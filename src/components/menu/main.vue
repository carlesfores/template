<script setup>

const menu = [
  {
    type: 'title',
    label: "Contacto",
  },
  {
    type: 'contact',
    label: '663 138 241',
    action: 'phone',
    icon: 'phone',
  },
  {
    type: 'contact',
    label: 'mateosadvocat@gmail.com',
    action: 'mail',
    icon: 'envelope',
  },
  {
    type: 'contact',
    label: 'Carretera Nacional 340 Km. 1.180 Torredembarra',
    action: 'maps',
    icon: 'location-dot',
  },
  {
    type: 'map'
  },
  {
    type: 'title',
    label: "Idioma",
  },
  {
    type: 'lang',
    label: 'Castellano',
    action: 'lang-es',
    icon: 'language',
  },
  {
    type: 'lang',
    label: 'Catalán',
    action: 'lang-cat',
    icon: 'language',
  },
];


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
      v-for="(item, index) in menu"
      :key="index"
      class="menu__row"
      >

        <div v-if="item.type === 'title'" class="menu__title">
          {{ item.label }}
        </div>

        <div v-if="item.type === 'contact'" class="menu__contact">
          <div class="menu__item-label menu-link" >
            {{ item.label }}
          </div>
          <div class="menu__item-icon">
            <font-awesome-icon class="icon" :icon="item.icon" />
          </div>
        </div>

        <div v-if="item.type === 'map'" class="menu__map">
          <iframe 
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13905.000448573477!2d1.426646993877053!3d41.15838387146715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a3f17d1a85f259%3A0x8d3f2470c6b2ca83!2sN-340%2C%201180%2C%2043839%20Creixell%2C%20Tarragona!5e0!3m2!1ses!2ses!4v1749722785792!5m2!1ses!2ses" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <div v-if="item.type === 'lang'" class="menu__contact">
          <div class="menu__item-label menu-link" >
            {{ item.label }}
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
  padding-bottom: 33px;
  margin-bottom: 33px;

  &__row {
    display: flex;
    flex-direction: column;
  }

  &__row:last-child {
    padding-bottom: 40px;
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

  &__contact {
    display: grid;
    grid-template-columns: 1fr 48px;
    color: #fff;
    cursor: pointer;
  }

  &__map {
    margin: 16px 0px;
    .map {
      width: 100%;
      height: 450px;
    }
  }

  &__lang {
    display: grid;
    grid-template-columns: 1fr 48px;
    color: #fff;
    cursor: pointer;
  }



  .menu-link {
    cursor: pointer;
    padding-right: 32px;
  }


}

</style>
