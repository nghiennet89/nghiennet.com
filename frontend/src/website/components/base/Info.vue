<template>
  <v-theme-provider :dark="dark">
    <div>
      <div class="app-name dark">
        {{ appName }}
      </div>

      <base-title
        size="body-1"
        space="4"
        title="Web application base on laravel & vuetify"
        weight="regular"
      />

      <base-body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci,
        voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere.
      </base-body>

      <base-btn
        class="mb-12"
        color="white"
        outlined
      >
        More Info
      </base-btn>
    </div>
  </v-theme-provider>
</template>

<script>
import {appName} from '@/config';
import {mapGetters} from 'vuex'

export default {
  name: 'BaseInfo',
  props: {
    title: String,
    dark: Boolean,
  },
  data: () => ({
    appName: appName,
  }),
  computed: {
    ...mapGetters({
      business: 'website/business'
    })
  }
}
</script>
