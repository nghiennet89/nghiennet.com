<template>
  <base-info-card title="Social Network">
    <v-row dense>
      <v-col
        v-for="n in 6"
        :key="n"
        cols="auto"
      >
        <base-img
          :src="require(`@/website/assets/insta-${n}.jpg`)"
          color="grey lighten-1"
          tile
          width="96"
        />
      </v-col>
    </v-row>
  </base-info-card>
</template>

<script>
export default {
  name: 'SocialNetwork',
}
</script>
