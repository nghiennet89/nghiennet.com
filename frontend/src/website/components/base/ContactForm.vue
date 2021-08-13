<template>
  <div>
    <base-info-card
      :subtitle="subtitle"
      :title="title"
      color="primary"
      space="4"
    />

    <base-text-field label="Name"/>

    <base-text-field label="Email"/>

    <base-text-field label="Subject"/>

    <base-textarea
      class="mb-6"
      label="Your Need & Description"
    />

    <base-btn
      :color="!theme.isDark ? 'accent' : 'white'"
      href="mailto:nghiennet89@gmail.com?subject=Latify Question"
      outlined
      target="_blank"
    >
      Send message
    </base-btn>
  </div>
</template>

<script>
export default {
  name: 'BaseContactForm',

  // Injected from the Vuetify Themeable mixin
  inject: ['theme'],

  props: {
    subtitle: String,
    title: {
      type: String,
      default: 'MAIL US YOUR MESSAGE',
    },
  },
}
</script>
