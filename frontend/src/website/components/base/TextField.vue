<template>
  <v-text-field
    v-bind="$attrs"
    v-on="$listeners"
    dense
    outlined
    single-line
  >
    <slot
      slot="append-outer"
      name="append-outer"
    />
  </v-text-field>
</template>

<script>
export default {
  name: 'BaseTextField',
}
</script>

<style lang="sass">
//
</style>
