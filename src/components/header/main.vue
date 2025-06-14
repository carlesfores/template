<script setup>
import { ref } from 'vue';

const emit = defineEmits(['toggle-menu']);

const isVisible = ref(false);

const onClick = () => {
  emit('toggle-menu');
  isVisible.value = !isVisible.value;
}

</script>

<template>
  <div class="header">
    <div class="header__logo">
      <font-awesome-icon class="icon" icon="ghost" /><h2>Estrategia Legal</h2>
    </div>
    <div class="header__item" @click="onClick">
      <font-awesome-icon v-if="isVisible" class="icon" icon="xmark" />
      <font-awesome-icon v-if="!isVisible" class="icon" icon="bars" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  height: 48px;

  &__logo {
    display: flex;
    justify-content: start;
    gap: 12px;
    align-items: center;
    padding: 0px 16px;
    color: #1e2a38;
    font-size: 22px;
  }

  &__logo h2  {
    font-weight: 200;
    font-size: 22px;
    
  }

  &__item {
    align-self: center;
    cursor: pointer;
    background-color: #1e2a38;
    color: #fff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    padding: 0px 16px;
  }
}
</style>
