<script setup>

const props = defineProps({
 type: {
  type: String,
  default: "primary"
 },
 title: {
  type: String,
  default: null
 },
});

</script>

<template>
  <div class="card" :class="{'card--secondary': props.type === 'secondary'}">
    <div class="card__content">
      <h2 v-if="title" class="card__header">
        {{ title }}
      </h2>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 32px 0px;
  margin-bottom: 16px;

  &__header {
    max-width: 1256px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: 1256px;
    align-self: center;
  }

  &--secondary {
    background-color: #1e2a38;
    color: #fff;
  } 

  @media only screen and (max-width : 1024px) {
    padding: 32px 16px;
  }

}

</style>
