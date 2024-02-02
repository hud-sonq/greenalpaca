<template>
  <div id="main" ref="main">
    <FilterBar @logoClicked="handleLogoClicked"/>
    <NavBar/>
    <AboutUs/>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const handleLogoClicked = () => {
  // go home
  router.push("/");
}

const main = ref<HTMLElement | null>(null);
onMounted(() => {
  setTimeout(() => {
    main.value?.classList.add("active");
  }, 50);
});

</script>

<style scoped>

#main {
  opacity: 0;
  transition: opacity .3s ease-in-out;
}

#main.active {
  opacity: 1;
}

</style>