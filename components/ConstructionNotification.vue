<template>
  <div id="cn">
    <div class="modal">
      <h2>Under construction</h2>
      <h1>No checkout</h1>
      <div class="ok" @click="$emit('emitClose')"><span>Acknowledge</span></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["emitClose"]);

</script>

<style>

#cn {
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 256px;
  height: 256px;
  background-color: white;
  border: 4px solid var(--accent-primary);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ok {
  width: 100px;
  height: 40px;
  background-color: white;
  border: 2px solid var(--accent-primary);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>