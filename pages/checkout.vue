<template>
  <FilterBar @logoClicked="handleLogoClicked" @filterClicked="handleFilterClicked"/>
  <div id="right-of-filterbar" >
    <NavBar @categoryClicked="handleCategoryChange"/>
    <div id="checkout">
      <CartCheckout />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart';

const router = useRouter();
const config = useRuntimeConfig();
const paypalClientId = config.public.ppClientId;
console.log(paypalClientId)
const cart = useCartStore();
const cartItems = cart.cartItems;
const cartTotal = cart.cartTotal;

function handleCategoryChange(newCategory: any) {
  router.push('/');
}

function handleLogoClicked() {
  router.push('/');
}

function handleFilterClicked() {
  router.push('/');
}

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

function clearCart() {
  cart.clearCart();
  location.reload();
}



function goHandlePayment() {
  console.log('paying for items');
}
</script>

<style>
#checkout {
  width: calc(100% - 74px);
  height: calc(100% - 74px);
  position: absolute;
  bottom: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

</style>