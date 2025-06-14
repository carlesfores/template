<script setup>
import Container from "./components/container/main.vue";
import Card from "./components/card/main.vue";
import Price from "./components/price/main.vue";
import Service from "./components/service/main.vue";

const services = [
  {
    title: "Derecho Laboral y Seguridad Social",
    details: [
      "Despidos y reclamaciones de cantidad",
      "Incapacidad Laboral",
      "Prestaciones de la Seguridad Social",
      "Acoso Laboral"
    ]
  },
  {
    title: "Derecho Penal",
    details: [
      "Delitos contra la esfera personal y patrimonial",
      "Acoso Laboral",
      "Especialidad en Violencia de Género",
      "Delitos contra la seguridad vial"
    ]
  },
  {
    title: "Derecho Civil",
    details: [
      "Reclamaciones de Cantidad",
      "Contratos de Arrendamientos",
      "Matrimonial",
      "Incapacidad Civil",
      "Derecho al honor"
    ]
  },
  {
    title: "Derecho Administrativo y Contecioso",
    details: [
      "Recursos Administrativo",
      "Reclamación contra la administración pública"
    ]
  },
];

const prices = [
  {
    label: "Consulta jurídica",
    amount: "60 €",
    details: [
      "Tarifa por hora."
    ]
  },
  {
    label: "Burofax",
    amount: "150 €",
    details: [
      "Tarifa por página. Incluye redacción y gestión del envío."
    ]
  },
  {
    label: "Representación ante actos jurídicos y/o institucionales",
    amount: "250 €",
    details: [
      "El precio varía según la duración, complejidad y naturaleza del evento."
    ]
  },
];

</script>

<template>
  <container>
    <template #content>


        <div class="banner">
          <div class="banner__content">

            <div class="banner__l">
              <div class="banner__subtitle">DESPACHO DE ABOGADOS</div>
              <div class="banner__title">DEFENSA LEGAL Y REPRESENTACIÓN JURÍDICA</div>
            </div>

            <div class="banner__r">
              <div class="banner__text font-size-20">
                Protegemos tus derechos con estrategias legales sólidas, 
                diseñadas para ayudarte a tomar las mejores decisiones para
                tu futuro.
              </div>
            </div>

          </div>

        </div>

        <card title="Servicios legales">
          <div class="services__wrapper">
            <service
              v-for="(s, idx) in services"
              :key="idx"
              :data="s"
            />
          </div>
        </card>
        
        <card type="secondary">
          <div class="font-size-20">
            ¿Necesita asesoría o representación legal?
            <span class="home-link" @click="openMenu">Contáctenos </span>
            <br><br> 
            Hoy mismo y reciba atención profesional y personalizada.
          </div>
        </card>

        <card title="Costas">
          <div class="price__wrapper">
            <price
              v-for="(p, idx) in prices"
              :key="idx"
              :data="p"
            />
          </div>
        </card>

        <card></card>

          <div class="footer">

            <div class="footer__content">

              <div class="footer__legal">
                <div class="footer__legal-links">
                  <div class="primary">Política de privacidad</div>
                  <div>|</div>
                  <div class="primary">Aviso legal</div>
                </div>
                <div class="footer__legal-copyright">
                  <div>
                    &copy; Estrategia legal, Miguel Angel Mateos Rozas {{new Date().getFullYear()}}
                  </div> 
                </div>
              </div>

              <div class="footer__contact">
                <div>663 138 241</div>
                <div>mateosadvocat@gmail.com</div>
                <div>Carretera Nacional 340 Km. 1.180 Torredembarra</div>
              </div>

            </div>

          </div>

    </template>
  </container>
</template>

<style lang="scss" scoped>

.home-link {
  color: #D4AF37;
  cursor: pointer;
}

.banner {
  display: flex;
  flex-direction: column;
  background-color: #1e2a38;
  color: #fff;
  padding: 32px 16px;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 980px;
    align-self: center;
    padding: 32px 0px;

    @media only screen and (max-width : 900px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      gap: 16px;
    }
  }

  &__l {

  }

  &__r {

  }

  &__title {
    color: #D4AF37;
    font-size: 32px;
    margin-bottom: 16px;
    // font-family: "Playfair Display", serif;
  }
  &__subtitle {
    font-size: 20px;
    font-weight: 200;

  }

  &__text {}
}

.services__wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media only screen and (max-width : 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 16px;
  }
}

.price__wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
}

.footer {
  display: flex;
  justify-content: center;
  padding: 42px 0px 32px 0px;
  background-color: #F5F5F7;

  &__content {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    width: 100%;
    max-width: 1256px;
    align-self: center;

    @media only screen and (max-width : 900px) {
      justify-content: center;
 
    }
  }
  
  &__legal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    align-items: end;

    @media only screen and (max-width : 900px) {
      gap: 16px;
      align-items: center;
    }
  }

  &__legal-copyright {
    color: #0000008f;
  }

  &__legal-links {
    display: flex;
    gap: 8px;
    cursor: pointer;

    .primary {
      //color: #982655;
      color: #54749c;
      text-decoration: underline;
    }
  }

  &__contact {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 8px;

    @media only screen and (max-width : 900px) {
      display: none;
    }
  }
}

</style>
