<template>
  <base-section id="backend-features">
    <base-section-heading title="Back-end Features">
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
  name: 'SectionBackendFeatures',

  data: () => ({
    features: [
      {
        title: 'Laravel 8.x',
        description: 'And keep upgrading to next stable versions of laravel',
        icon: 'mdi-ice-pop',
      },
      {
        title: 'Abstract Repositories',
        description: 'Implement Laravel Repositories to abstract data layer, making our application more flexible and easy to maintain. ' +
          'Detail here : <a href="https://github.com/andersao/l5-repository" target="_blank">https://github.com/andersao/l5-repository</a>',
        icon: 'mdi-fountain-pen-tip',
      },
      {
        title: 'Event & Broadcast with Pusher and Echo',
        description: 'Pre-Implement workflow for broadcast and event, helpful when u want to implement notification system',
        icon: 'mdi-cellphone',
      },
      {
        title: 'Full REST API with advance authentication',
        description: 'Laravel passport and websanova/vue-auth, support define role, set scope for each API, support authentication with social network',
        icon: 'mdi-pencil-box-outline',
      },
      {
        title: 'Auto Generate UI for resource',
        description: 'Detail on README.md, generate UI for resource by artisan command. Support search, import, export, CRUD. Easy to customize.',
        icon: 'mdi-image-size-select-actual',
      },
      {
        title: 'Resource Revisionable',
        description: 'Implement revision to manage history for resource, ' +
          'detail here: <a href="https://github.com/VentureCraft/revisionable" target="_blank">https://github.com/VentureCraft/revisionable</a>',
        icon: 'mdi-help-circle-outline',
      },
    ],
  }),
}
</script>
