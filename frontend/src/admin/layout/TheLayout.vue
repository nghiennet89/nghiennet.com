<template>
  <div class="v-application--wrap">
    <div class="app-background" :style="'background-image: url(' + backgroundImage + ')'"></div>
    <the-layout-drawer/>
    <the-layout-toolbar/>
    <the-layout-content/>
    <the-layout-fab/>
    <the-layout-to-top-fab/>
    <the-layout-footer/>
  </div>
</template>

<script>
import TheLayoutDrawer from '@/admin/layout/TheLayoutDrawer.vue';
import TheLayoutToolbar from '@/admin/layout/TheLayoutToolbar.vue';
import TheLayoutContent from '@/admin/layout/TheLayoutContent.vue';
import TheLayoutFab from '@/admin/layout/TheLayoutFab.vue';
import TheLayoutToTopFab from '@/admin/layout/TheLayoutToTopFab.vue';
import TheLayoutFooter from '@/admin/layout/TheLayoutFooter.vue';
import {mapGetters} from 'vuex'

export default {
  name: 'TheLayout',
  components: {
    TheLayoutDrawer,
    TheLayoutToolbar,
    TheLayoutContent,
    TheLayoutFab,
    TheLayoutToTopFab,
    TheLayoutFooter,
  },
  data: () => ({}),
  computed: {
    ...mapGetters({
      backgroundImage: 'settings/backgroundImage'
    })
  }
};
</script>
<style>
.app-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: 100% 100%;
}
</style>
