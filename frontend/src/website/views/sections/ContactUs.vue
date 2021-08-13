<template>
  <v-theme-provider dark>
    <base-section
      id="contact-us"
      class="primary"
      space="40"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <base-title :space="$vuetify.breakpoint.mdAndUp ? 0 : 4" title="DONATE FOR ME IF YOU LIKE THIS"/>

            <base-body space="0">
              <span class="white--text">
                ETH Wallet: 0x9208740C01af974cebB173793763270053e8E81b
              </span>
            </base-body>
          </v-col>

          <v-col
            cols="12"
            md="2"
          >
            <base-btn
              :block="$vuetify.breakpoint.smAndDown"
              color="white"
              href="mailto:nghiennet89@gmail.com?subject=Latify-Question"
              large
              outlined
              target="_blank"
            >
              Contact Us
            </base-btn>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'SectionContactUs',
}
</script>
