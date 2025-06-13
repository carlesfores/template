<script setup>

const menuSections = [{
  title: "Contacto",
  items: [{
    label: '663 138 241',
    action: 'phone',
    icon: 'phone',
    classes: 'type'
  },{
    label: 'mateosadvocat@gmail.com',
    action: 'mail',
    icon: 'envelope',
    classes: 'type'
  },{
    map: true,
    label: 'Carretera Nacional 340 Km. 1.180 Torredembarra',
    action: 'maps',
    url: '',
    icon: 'location-dot',
    classes: 'type'
  }
]
}, {
title: "Idioma",
  items: [{
    label: 'Castellano',
    action: 'lang-es',
    icon: 'language',
    classes: 'type',
    active: true
  },{
    label: 'Catalán',
    action: 'lang-cat',
    icon: 'language',
    classes: 'type'
  }]
}];


const handleAction = (action) => {

  if (action === "phone") {

  }

  if (action === "mail") {
    window.location.href = "mailto:mateosadvocat@gmail.com";
  }

  if (action === "maps") {
    window.location.href = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13905.000448573477!2d1.426646993877053!3d41.15838387146715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a3f17d1a85f259%3A0x8d3f2470c6b2ca83!2sN-340%2C%201180%2C%2043839%20Creixell%2C%20Tarragona!5e0!3m2!1ses!2ses!4v1749722785792!5m2!1ses!2ses";
  }

  if (action === "lang-es") {

  }

  if (action === "lang-cat") {

  }

};

</script>

<template>
  <div class="menu">
    <div 
      v-for="(section, index) in menuSections"
      :key="index"
      class="menu__row"
      >
        <div class="menu__title">
            {{ section.title }}
        </div>
        <div 
          v-for="(item, index) in section.items"
          :key="index"
          :class="{'menu__item--active': item.active}"
          class="menu__item"
        > 
          <div 
            v-if="!item.map" 
            class="menu__item-label menu-link" 
            @click="handleAction(item.action)"
            >
              {{ item.label }}
          </div>

          <div v-if="item.map" class="menu__item-label-map">
            <div>{{ item.label }}</div>
            <iframe 
              class="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13905.000448573477!2d1.426646993877053!3d41.15838387146715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a3f17d1a85f259%3A0x8d3f2470c6b2ca83!2sN-340%2C%201180%2C%2043839%20Creixell%2C%20Tarragona!5e0!3m2!1ses!2ses!4v1749722785792!5m2!1ses!2ses" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <div class="menu__item-icon">
            <font-awesome-icon class="icon" :icon="item.icon" />
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #1e2a38;
  z-index: 7777;

  &__row {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: "Playfair Display", serif;
    flex: 1;
    font-size: 28px;
    padding: 16px 8px;
    color: #fff;
    display: flex;
    align-items: center;
  }


  &__item {
    display: grid;
    grid-template-columns: 1fr 48px;
    color: #fff;
    cursor: pointer;
  }

  &__item--active {
      font-weight: 600;
      background-color: #394f6a;
  }


  &__item-label {
    display: flex;
    justify-content: end;
    text-align: end;
    align-items: center;
    padding-right: 16px;
  }


  &__item-label-map {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    padding: 16px 32px;
    gap: 32px;
    text-align: end;

    .map {
      width: 100%;
      height: 450px;
    }

  }

  &__item-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 47px;
    width: 47px;

    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    border-top: 1px solid #fff;
  }

  &__item-icon:last-child {
    border-bottom: 1px solid #fff;
  }

  .menu-link {
    cursor: pointer;
    padding-right: 32px;
  }

  &__item:hover {

    .menu__item-icon {
      background-color: #394f6a;

    }
  }


}

</style>
