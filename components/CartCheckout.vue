<template>
  <div id="checkout-container">
    <h1>Checkout</h1>
    <div v-if="cartItems.length === 0">
      <p>No items in cart</p>
      <button @click="router.push('/')">Go back</button>
    </div>
    <div v-else>
      <div v-for="item in cartItems" :key="item._id" style="display: flex; border-bottom: 1px solid var(--alpaca-green); border-left: 1px solid var(--alpaca-green);">
        <div>
          <h2>{{ item.brand }} | {{ item.name }} | ${{ item.price }}</h2>
            <h4 @click="cart.removeFromCart(item._id)">remove from cart</h4>
        </div>
        <div>
          <img :src="item.imageDir + `/` + `0.png`" style="width: 64px; height: 64px; padding-left: 16px;"/>
        </div>
      </div>
      <div class="lower-cart-info">
        <div>
          <h2>Total: ${{ cartTotal }}</h2>
        </div>
        <div @click="clearCart" class="clear-cart-container">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg>
          </div>          
          <span>clear cart</span>
        </div>
      </div>
      <div id="paypal-button-container"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart';

const config = useRuntimeConfig();
const paypalClientId = config.public.ppClientId;
console.log(paypalClientId)
const cart = useCartStore();
const cartItems = cart.cartItems;
const cartTotal = cart.cartTotal;

const cartSingleImages = () => {
  return cartItems.map((item: any) => {
    return item.images[0];
  });
};

const handleScriptLoad = async () => {
  (window as any).paypal.Buttons({
    createOrder: function(data: any, actions: any) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: cartTotal
          }
        }]
      });
    },
    onApprove: function(data: any, actions: any) {
      return actions.order.capture().then(function(details: any) {
        alert('Transaction completed by ' + details.payer.name.given_name);
        console.log(details);
      });
    }
  }).render('#paypal-button-container');
};

onMounted(() => {
  let script = document.createElement('script');
  script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=USD&components=buttons`;
  script.addEventListener('load', handleScriptLoad);
  document.body.appendChild(script);
});

const router = useRouter();

function clearCart() {
  cart.clearCart();
  location.reload();
}

function goHandlePayment() {
  console.log('paying for items');
}
</script>

<style scoped>
#checkout-container {
  padding: 16px;
}

.lower-cart-info {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
}

.clear-cart-container {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>