<template>
  <v-main class="layout-fab">
    <v-btn v-if="settingsPanelBtn" class="layout-fab__btn" color="error" fab falt fixed right="right" small top="top" @click="toggleSettingsPanel">
      <v-icon>mdi-cog</v-icon>
    </v-btn>
    <v-navigation-drawer :value="settingsPanelShow" app disable-resize-watcher fixed right temporary @input="stateSettingsPanel">
      <v-app-bar :dense="toolbarDense" color="secondary" dark>
        <v-toolbar-title>
          {{ $t('settings.title') }}
        </v-toolbar-title>
        <v-tooltip left>
          <template v-slot:activator="{on}">
            <v-btn v-on="on" absolute bottom color="error" dark fab right small @click.stop="setDefaultSettingsPanel">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </template>
          <span>{{ $t('settings.default') }}</span>
        </v-tooltip>
      </v-app-bar>

      <v-subheader class="layout-fab__header">
        {{ $t('settings.version') }}: {{ version }}
      </v-subheader>
      <v-divider/>

      <v-expansion-panels accordion>
        <v-expansion-panel>
          <v-expansion-panel-header class="layout-fab__header">
            {{ $t('settings.position') }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-switch v-for="(toggle, i) in switches" :key="i" :disabled="toggle.value === null" :input-value="toggle.value" :label="toggle.label"
                      class="layout-fab__switch"
                      color="secondary" dense hide-details @change="toggle.change"/>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="layout-fab__header">
            {{ $t('settings.theme') }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-theme cols="6"/>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
  </v-main>
</template>

<script>
import {mapGetters} from 'vuex';
import AppTheme from '@/admin/widget/AppTheme.vue';

export default {
  name: 'TheLayoutFab',
  components: {AppTheme},
  data: () => ({}),
  computed: {
    ...mapGetters({
      version: 'settings/version',
      themeDark: 'settings/themeDark',
      settingsPanelBtn: 'settings/settingsPanelBtn',
      settingsPanelShow: 'settings/settingsPanelShow',
      toolbarDense: 'settings/toolbarDense',
      navbarDense: 'settings/navbarDense',
      navbarLogo: 'settings/navbarLogo',
      footerShow: 'settings/footerShow',
    }),
    switches() {
      return [
        {
          value: this.toolbarDense,
          label: `${this.$t('settings.toolbarDense')}: ${this.toolbarDense ? 'on' : 'off'}`,
          change: this.toggleToolbarDense,
        },
        {
          value: this.navbarDense,
          label: `${this.$t('settings.navbarDense')}: ${this.navbarDense ? 'on' : 'off'}`,
          change: this.toggleNavbarDense,
        },
        {
          value: this.navbarLogo,
          label: `${this.$t('settings.navbarLogo')}: ${this.navbarLogo ? 'on' : 'off'}`,
          change: this.toggleNavbarLogo,
        },
        {
          value: this.settingsPanelBtn,
          label: `${this.$t('settings.settingsBtn')}: ${this.settingsPanelBtn ? 'on' : 'off'}`,
          change: this.toggleSettingsPanelBtn,
        },
        {
          value: this.footerShow,
          label: `${this.$t('settings.footer')}: ${this.footerShow ? 'on' : 'off'}`,
          change: this.toggleFooterToggle,
        },
        {
          value: this.themeDark,
          label: `${this.$t('settings.dark')}: ${this.themeDark ? 'on' : 'off'}`,
          change: this.toogleThemeDark,
        },
      ];
    },
  },
  methods: {
    stateSettingsPanel(state) {
      this.$store.dispatch('settings/SettingsPanelState', {state});
    },
    toggleSettingsPanel() {
      this.$vuetify.goTo(0);
      this.$store.dispatch('settings/SettingsPanelToggle');
    },
    toogleThemeDark() {
      this.$store.dispatch('settings/ThemeDarkToggle');
    },
    toggleToolbarDense() {
      this.$store.dispatch('settings/ToolbarDenseToggle');
    },
    toggleNavbarDense() {
      this.$store.dispatch('settings/NavbarDenseToggle');
    },
    toggleNavbarLogo() {
      this.$store.dispatch('settings/NavbarLogoToggle');
    },
    toggleSettingsPanelBtn() {
      this.$store.dispatch('settings/SettingsPanelBtnToggle');
    },
    toggleFooterToggle() {
      this.$store.dispatch('settings/FooterToggle');
    },
    setDefaultSettingsPanel() {
      this.$store.dispatch('settings/SettingsPanelDefault');
    },
  },
};
</script>

<style>
.layout-fab {
  position: absolute;
}

.layout-fab__btn {
  border-radius: 0 !important;
  margin-top: 4px; /* fixme: vertical align */
  right: 0 !important;
  top: 50% !important;
}

.layout-fab__switch {
  margin-top: 4px;
}

.layout-fab__header {
  padding: 0 12px 0 12px !important;
}

.v-expansion-panel-content__wrap {
  padding: 0 12px 12px;
}
</style>
