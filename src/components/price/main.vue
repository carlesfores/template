<script setup>

const props = defineProps({
 data: {
  type: Object,
  default: null
 },
});

</script>

<template>
  <div class="price">

    <div class="price__detail">
      <div class="price__label">
        {{ data.label }}
      </div>

      <div 
        v-for="(detail, idx) in data.details"
        :key="idx"
        class="price__sub-detail"
      >
      * {{ detail }}
    </div>

    </div>

    <div class="price__value">
      {{ data.amount }}
    </div>

  </div>
</template>

<style lang="scss" scoped>
.price {
  display: grid;
  grid-template-columns: 3fr 1fr;
  border-bottom: 1px solid #982655;
  max-width: 800px;
  width: 100%;

  &__detail {
  }

  &__label {
    font-size: 20px;
    font-weight: 400;
  }

  &__sub-detail {
    color: #982655;
    margin-top: 8px;
    margin-bottom: 16px;
    font-weight: 200;
    font-size: 16px;
  }

  &__value {
    font-weight: 400;
    text-align: end;
    color: #982655;
  }

  &:last-child {
    border: none;
  }

}

</style>
