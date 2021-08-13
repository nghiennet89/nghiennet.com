<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        pace="6"
        title="KEEP IN TOUCH WITH US"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci,
        voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere.
      </base-info-card>

      <base-business-contact dense/>
    </div>
  </v-theme-provider>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'BaseBusinessInfo',
  props: {dark: Boolean},
  computed: {
    ...mapGetters({
      business: 'website/business'
    })
  }
}
</script>
