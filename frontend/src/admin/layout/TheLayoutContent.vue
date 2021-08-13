<template>
  <v-main>
    <transition mode="out-in" name="fade-transform">
      <keep-alive>
        <v-card tile :elevation="0" class="layout-card-content">
          <router-view/>
        </v-card>
      </keep-alive>
    </transition>
  </v-main>
</template>

<script>
export default {
  name: 'TheLayoutContent'
};
</script>
<style>
.v-main .v-main__wrap {
  padding-bottom: 35px;
}

.v-main .v-main__wrap > .layout-card-content {
  display: inline-block;
  width: 100%;
  min-height: calc(100% + 35px);
}
</style>
