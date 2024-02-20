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
          <div style="display: flex; flex-direction: row; padding-left: 2px; cursor: pointer;">
            <img src="/resources/icons/minus.svg" style="width: 16px; padding-right: 2px;" @click="cart.removeFromCart(item._id)">
            <h4>remove from cart</h4>
          </div>
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
      <svg v-if="isLoading" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><g><circle cx="3" cy="12" r="2" fill="#10763c"/><circle cx="21" cy="12" r="2" fill="#10763c"/><circle cx="12" cy="21" r="2" fill="#10763c"/><circle cx="12" cy="3" r="2" fill="#10763c"/><circle cx="5.64" cy="5.64" r="2" fill="#10763c"/><circle cx="18.36" cy="18.36" r="2" fill="#10763c"/><circle cx="5.64" cy="18.36" r="2" fill="#10763c"/><circle cx="18.36" cy="5.64" r="2" fill="#10763c"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g></svg>
      <div v-if="showSuccessDetails">
        <h1>Thank you for your purchase!</h1>
      </div>
    </div>
    <div id="paypal-button-container" ref="paypalContainer"></div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart';

const config = useRuntimeConfig();
const paypalClientId = config.public.ppClientId;
const cart = useCartStore();
const cartItems = cart.cartItems;
const cartTotal = cart.cartTotal;
const isLoading = ref(false);
const showSuccessDetails = ref(false);
let paypalContainer = ref<HTMLElement | null>(null);

const cartSingleImages = () => {
  return cartItems.map((item: any) => {
    return item.images[0];
  });
};

function handleLoading() {
  console.log('changing paypal button')
  isLoading.value = false;
}

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
      try {
        return actions.order.capture().then(function(details: any) {
          alert('Transaction completed by ' + details.payer.name.given_name);
          goHandlePayment(details);
        });
      } catch (error) {
        console.log('handle', error);
      }
    }
  }).render('#paypal-button-container').then(setTimeout(handleLoading, 1000));
};

onMounted(() => {
  try {
    isLoading.value = true;
    let script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=USD&components=buttons`;
    if (cartTotal > 0) {
      script.addEventListener('load', handleScriptLoad);
    }
    document.body.appendChild(script);
  } catch (error) {
    console.log('error in paypal script load: ', error);
  }
});


const router = useRouter();

function clearCart() {
  cart.clearCart();
  location.reload();
}

function goHandlePayment(details: any) {
  console.log('user', details);
  showSuccessDetails.value = true;
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