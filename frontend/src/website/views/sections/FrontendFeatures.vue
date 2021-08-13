<template>
  <base-section id="frontend-features">
    <base-section-heading title="Front-end Features">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse
      accusamus mollitia magni fuga.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card v-bind="feature" align="left" horizontal>
            <div v-html="feature.description"></div>
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: 'SectionThemeFeatures',

  data: () => ({
    features: [
      {
        title: 'Website from Zero Theme',
        description: '<a href="https://store.vuetifyjs.com/products/zero-theme-free">Click here</a> to get more detail about Zero Theme Free',
        icon: 'mdi-fountain-pen-tip',
      },
      {
        title: 'Admin Template with Vuetify',
        description: 'Extend from this : <a href="https://github.com/NelsonEAX/vue-vuetify-admin" target="_blank">https://github.com/NelsonEAX/vue-vuetify-admin</a> and modified to work perfect with laravel 8',
        icon: 'mdi-help-circle-outline',
      },
      {
        title: 'Support simple SSR - Useful for SEO',
        description: 'Simple Server Side Rendering system, implement with pupperter, <a href="https://github.com/puppeteer/puppeteer" target="_blank">Click here</a> or read more on README.md',
        icon: 'mdi-ice-pop',
      },
      {
        title: 'Responsive UI',
        description: 'Flexible to manage responsive UI with vuetify',
        icon: 'mdi-cellphone',
      },
      {
        title: 'Easily Customizable',
        description: 'Project with good-structure, easy to extend or customize anything.',
        icon: 'mdi-pencil-box-outline',
      },
      {
        title: 'Built with vue-cli',
        description: 'Override default laravel JS APP. Now we can use Vue-CLI to make bundle for vue app.',
        icon: 'mdi-pencil-box-outline',
      },
    ],
  }),
}
</script>
