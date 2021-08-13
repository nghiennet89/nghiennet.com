<template>
  <v-textarea
    v-bind="{
      rows: 6,
      ...$attrs,
    }"
    v-on="$listeners"
    dense
    outlined
    single-line
  />
</template>

<script>
export default {
  name: 'BaseTextarea',
}
</script>

<style lang="sass">
//
</style>
