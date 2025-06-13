<script setup>
import { ref } from 'vue';
import ContainerHeader from "../header/main.vue";
import ContainerMenu from "../menu/main.vue";

const isMenuVisible = ref(false);

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

</script>
<template>
  <div class="container">
    <container-header @toggle-menu="toggleMenu"></container-header>

    <container-menu v-if="isMenuVisible"></container-menu>
<!-- 
    <div v-if="isMenuVisible" class="container__shade"></div> -->

    <div v-if="!isMenuVisible" class="container__content">
        <slot name="content"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  position: relative;
  background-color: #fff;

  &__shade {
    position: absolute;
    width: 100%;
    height: 100%;
    position: fixed;
    margin-top: -48px;
    z-index: 7776;
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;
  }
}

</style>
