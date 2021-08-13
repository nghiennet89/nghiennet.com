<template>
  <v-app>
<!--    <home-system-bar />-->

    <home-app-bar/>

    <home-view/>

    <home-footer/>

    <home-settings/>
  </v-app>
</template>

<script>
export default {
  name: 'HomeLayout',

  components: {
    HomeAppBar: () => import('@/website/layouts/home/AppBar'),
    HomeFooter: () => import('@/website/layouts/home/Footer'),
    HomeSettings: () => import('@/website/layouts/home/Settings'),
    /*HomeSystemBar: () => import('@/website/layouts/home/SystemBar'),*/
    HomeView: () => import('@/website/layouts/home/View'),
  },
}
</script>
