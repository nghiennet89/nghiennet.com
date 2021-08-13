<template>
  <v-icon
    v-bind="$attrs"
    v-on="$listeners"
    :size="size"
  >
    <slot/>
  </v-icon>
</template>

<script>
export default {
  name: 'BaseIcon',

  props: {
    size: {
      type: [Number, String],
      default: 56,
    },
  },
}
</script>
