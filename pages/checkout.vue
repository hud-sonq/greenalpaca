<template>
  <div>
    <h1>Checkout</h1>
    <div v-if="cartItems.length === 0">
      <p>No items in cart</p>
      <button @click="router.push('/')">Go home</button>
    </div>
    <div v-else>
      <div v-for="item in cartItems" :key="item._id" style="display: flex; border-bottom: 1px solid var(--alpaca-green); border-left: 1px solid var(--alpaca-green); margin-left: 16px; padding-left: 16px;">
        <div>
          <h2>{{ item.brand }}</h2>
          <h3>{{ item.name }} | ${{ item.price }}</h3> 
          <h4 @click="cart.removeFromCart(item)">remove from cart</h4>
        </div>
        <div>
          <img :src="item.imageDir + `/` + `1.jpg`" style="width: 128px; height: 128px; padding-left: 16px;"/>
        </div>
      </div>
      <div>
        <h2>Total: ${{ cartTotal }}</h2>
      </div>
      <div id="paypal-button-container"></div>
      <button @click="clearCart">Clear cart</button>
      <button @click="router.push('/')">Go home</button>
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
  // Your JavaScript to create and render the PayPal button
  (window as any).paypal.Buttons({
    createOrder: function(data: any, actions: any) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: cartTotal // Replace this with the total amount for the cart
          }
        }]
      });
    },
    onApprove: function(data: any, actions: any) {
      return actions.order.capture().then(function(details: any) {
        alert('Transaction completed by ' + details.payer.name.given_name);
      });
    }
  }).render('#paypal-button-container');
};

onMounted(() => {
  // Include the PayPal JavaScript SDK
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

<style>

</style>