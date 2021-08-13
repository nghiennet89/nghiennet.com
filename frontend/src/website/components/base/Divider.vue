<template>
  <v-responsive
    v-bind="$attrs"
    v-on="$listeners"
    :class="classes"
    class="base-divider"
    max-width="28"
  >
    <v-divider/>
  </v-responsive>
</template>

<script>
// Mixins
import Heading from '@/website/mixins/heading'

export default {
  name: 'BaseDivider',

  mixins: [Heading],

  props: {
    color: String,
    dense: Boolean,
    space: {
      type: [Number, String],
      default: 6,
    },
  },

  computed: {
    classes() {
      return [
        this.color,
        this.margin,
        `mb-${this.space}`,
        this.dense && 'base-divider--dense',
      ]
    },
    margin() {
      switch (this.align) {
        case 'left':
          return 'mr-auto'
        case 'right':
          return 'ml-auto'
        default:
          return 'mx-auto'
      }
    },
  },
}
</script>

<style lang="sass">
.base-divider .v-divider
  border-width: 3px 0 0 0 !important

.base-divider.base-divider--dense .v-divider
  border-width: 2px 0 0 0 !important
</style>
