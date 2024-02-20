interface RateLimitOptions<Args extends any[] = any[]> {
    /**
     * "Rate limit on average `interval` milliseconds."
     */
    interval: number;
    /**
     * Will block after internal temperature reaches `threshold`.
     * 
     * Example: 5 allows 5 calls in a row, but the 6th will be blocked.
     * 
     * Will take 5 * `interval` milliseconds to cool down.
     */
    threshold: number;
    /**
     * callback to be called when rate limit is reached.
     * 
     * Throw an error at the end to override default error
     */
    cb?: (info: { temperature: number, wait: number }, args: Args) => void;
  }
  
  export function rateLimitWrapper<Fn extends (...args: any[]) => any>(
    fn: Fn,
    options: RateLimitOptions<Parameters<Fn>>,
  ): Fn {
    
    let temperature = 0;
    let lastTime = Date.now();
  
    function rateLimitedFn(...args: Parameters<Fn>): ReturnType<Fn> {
      const now = Date.now();
      const timeDiff = now - lastTime;
      lastTime = now;
  
      temperature -= timeDiff;
      if (temperature < 0) {
        temperature = 0;
      }
  
      const wait = temperature - options.threshold * options.interval;
      if (wait >= 0) {
        
        options?.cb && options.cb({
          temperature,
          wait,
        }, args);
  
        throw new Error(`Rate limit reached. Try again in ${wait}ms.}`);
      }
  
      temperature += options.interval;
      return fn(...args);
    }
  
    return rateLimitedFn as Fn;
  }