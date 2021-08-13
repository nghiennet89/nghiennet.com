<template>
  <v-parallax :src="settings.backgroundImage" style="height: 100%">
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" lg="4" md="4" sm="8">
        <v-card class="elevation-5 pa-3">
          <v-card-actions>
            <v-spacer></v-spacer>
            <localization/>
          </v-card-actions>
          <v-card-text>
            <div class="layout column align-center">
              <img alt="App Logo" height="120" src="/webapp/img/icons/vuetify.svg" width="120">
              <h1 class="text-center my-4 primary--text">{{ appTitle }}</h1>
            </div>
            <v-form>
              <v-text-field v-model="user.email" :label="$t('login.email')" append-icon="mdi-account" autocomplete="username" name="email" required
                            type="email"/>
              <v-text-field v-model="user.password" :label="$t('login.password')" append-icon="mdi-lock" autocomplete="new-password" name="password"
                            required type="password"/>
              <v-text-field v-model="user.confirm" :label="$t('login.confirm')" append-icon="mdi-lock" autocomplete="new-password" name="confirm" required
                            type="password"/>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn :to="{name: 'Login'}" color="primary" outlined>
              {{ $t('login.login') }}
            </v-btn>
            <v-spacer/>
            <v-btn :loading="loading" color="primary" @click="register()">
              {{ $t('login.register') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import Localization from '@/admin/widget/AppLocalization.vue';
import config from '@/config'

export default {
  name: 'Register',
  components: {Localization},
  data: () => ({
    appTitle: config.appName,
    loading: false,
    user: {
      email: 'user' + new Date().toISOString().substring(0, 10).replace(/-/ig, '') + '@base-project.com',
      password: 'User@123',
      confirm: 'User@123',
    },
  }),
  computed: {
    settings: 'settings'
  },
  methods: {
    register() {
    },
  },
};
</script>
<style>
.v-parallax__image-container img {
  bottom: 0;
  left: 0;
  filter: brightness(35%);
  position: fixed;
  right: 0;
  top: 0;
  transform: none !important;
  transition: none;
}
</style>
