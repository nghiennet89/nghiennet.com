<template>
  <div>
    <v-fade-transition mode="out-in">
      <router-view ref="content"/>
    </v-fade-transition>
    <SiteNotice/>
    <!--    <div id="app-loading" :style="appLoading || initializing ? 'display: block;' : 'display: none;'">-->
    <!--      <img class="indicator-icon" src="/webapp/img/loading_indicator.svg">-->
    <!--    </div>-->
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import SiteNotice from "@/website/components/SiteNotice";

export default {
  name: 'Site',
  metaInfo: {
    title: 'App',
    titleTemplate: '%s | Latify',
    htmlAttrs: {lang: 'en'},
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
  },
  data() {
    return {
      needUserMasterData: true,
      watchUserAuth: null,
      initializing: true,
    }
  },
  components: {
    SiteNotice
  },
  computed: {
    ...mapGetters({
      appLoading: 'system/appLoading',
      notices: 'system/notices',
    }),
    _user() {
      return this.$auth.user()
    },
  },
  methods: {
    ...mapActions({
      loadMasterData: 'loadMasterData',
      loadUserMasterData: 'loadUserMasterData',
      setAuthenticatedUser: 'user/setAuthenticatedUser'
    }),

  },
  watch: {
    '$route': {
      handler(to) {
        if (!to || !to.matched || to.matched.length < 1)
          return this.$router.push({
            name: 'Page404',
          });
      }
    },
  },
  created() {
    this.watchUserAuth = this.$watch('_user', (newVal) => {
      console.log('SET_AUTHENTICATED_USER', newVal)
      if (newVal && newVal.id && newVal.role_id) {
        this.setAuthenticatedUser(JSON.parse(JSON.stringify(newVal)))
        this.needUserMasterData = false
        this.loadUserMasterData().then(res => {
          console.log("User's master data :", res)
          if (this.$route.name === 'Login') return this.$router.push({name: 'Dashboard'});
        })
      } else this.setAuthenticatedUser(null)
    });
    this.loadMasterData().then(res => {
      console.log("Master data :", res)
    });
  },
  updated() {
    if (!this.initializing) return;
    this.$nextTick(() => {
      if (typeof this.$refs.content != 'undefined') this.initializing = false
    })
  }
};
</script>

<style lang="scss">
@import 'frontend/src/website/styles/custom';
</style>

<style lang="scss" scoped>
#app-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1e1e1ebf;
  z-index: 999999;

  img.indicator-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

#app-loading.show {
  display: block !important;
}
</style>

<style>
::-webkit-scrollbar {
  background: #eeeeeeee;
  border-radius: 0;
  height: 7px;
  transition: all 0.3s ease;
  width: 7px;
}

::-webkit-scrollbar:hover {
  background: #c6c6c6;
}

::-webkit-scrollbar-thumb {
  background: #88888888;
  border-radius: 3px;
}

html {
  overflow-y: auto !important;
}

.extra-padding {
  padding-bottom: 96px !important;
  padding-top: 96px !important;
}

@media screen and (max-width: 959px) {
  .extra-padding {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
}
</style>
