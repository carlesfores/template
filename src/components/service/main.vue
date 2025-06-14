<script setup>

const props = defineProps({
 data: {
  type: Object,
  default: null
 },
});

</script>

<template>
  <div class="service">
    <div class="service__header">
      <h3 class="service__title">
        {{ data.title }}
      </h3>
    </div>
    <div 
      v-for="(detail, idx) in data.details"
      :key="idx"
      class="service__detail"
    >
      <div>{{ detail }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service {
  
  &__header {

  }

  &__title {
    font-weight: 400;
    margin-bottom: 16px;
  }

  &__detail {
    display: flex;
    gap: 8px;
    height: 36px;
    justify-content: start;
    align-items: center;
    color: #54749c;
    padding-left: 8px;
    font-weight: 400;
    font-size: 14px;
  }
}

</style>
