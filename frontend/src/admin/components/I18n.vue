<template>
  <v-container class="container--fluid grid-list-md">
    <v-row no-gutters>
      <v-col cols="12">
        <v-alert :value="true" color="info" dense outlined>
          {{ $t('components.baseOnL18n') }} <a class="link-type" href="//github.com/kazupon/vue-i18n">vue-i18n</a>
        </v-alert>
      </v-col>

      <v-col cols="12" md="4" offset-md="4" offset-sm="2" sm="8">
        <app-widget :title="$t('ui.switch')" class="text-center" icon="mdi-translate" padding-hide>
          <div slot="widget-content">
            <v-list v-for="item in locales" :key="item.abbr">
              <v-list-item :target="item.target" ripple="ripple" @click="setLocale(item.locale)">
                <v-list-item-action>
                  <v-icon v-if="item.locale === locale" color="success">
                    mdi-radiobox-marked
                  </v-icon>
                  <v-icon v-else>
                    mdi-radiobox-blank
                  </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>{{ item.abbr }}</v-list-item-avatar>
              </v-list-item>
            </v-list>
          </div>
        </app-widget>
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col class="text-center" cols="12" offset-sm="2" sm="8">
        <v-btn class="mx-2">
          {{ $t('ui.default') }}
        </v-btn>
        <v-btn class="mx-2" color="primary">
          {{ $t('ui.primary') }}
        </v-btn>
        <v-btn class="mx-2" color="secondary">
          {{ $t('ui.secondary') }}
        </v-btn>
        <v-btn class="mx-2" color="success">
          {{ $t('ui.success') }}
        </v-btn>
        <v-btn class="mx-2" color="error">
          {{ $t('ui.error') }}
        </v-btn>
        <v-btn class="mx-2" color="warning">
          {{ $t('ui.warning') }}
        </v-btn>
        <v-btn class="mx-2" color="info">
          {{ $t('ui.info') }}
        </v-btn>
      </v-col>

      <v-col class="text-center d-md-flex" cols="12" offset-sm="2" sm="8">
        <v-col cols="12" md="4">
          <v-text-field :counter="10" :label="$t('ui.firstName')"/>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field :counter="10" :label="$t('ui.lastName')"/>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field :label="$t('ui.email')"/>
        </v-col>
      </v-col>

      <v-col class="text-center" cols="12" offset-sm="2" sm="8">
        <v-data-table :headers="headers" :items="desserts" class="elevation-1">
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-right">
              {{ props.item.calories }}
            </td>
            <td class="text-right">
              {{ props.item.fat }}
            </td>
            <td class="text-right">
              {{ props.item.carbs }}
            </td>
            <td class="text-right">
              {{ props.item.protein }}
            </td>
            <td class="text-right">
              {{ props.item.iron }}
            </td>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {locales} from '@/admin/locale';
import AppWidget from '@/admin/widget/AppWidget.vue';

export default {
  name: 'I18n',
  components: {
    AppWidget,
  },
  data: () => ({
    locales,
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      {text: 'Calories', value: 'calories'},
      {text: 'Fat (g)', value: 'fat'},
      {text: 'Carbs (g)', value: 'carbs'},
      {text: 'Protein (g)', value: 'protein'},
      {text: 'Iron (%)', value: 'iron'},
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%',
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%',
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%',
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%',
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%',
      },
    ]
  }),
  computed: {
    ...mapGetters({
      locale: 'settings/locale',
    }),
  },
  methods: {
    ...mapActions({
      SetLocale: 'settings/SetLocale'
    }),
    async setLocale(locale) {
      await this.SetLocale({locale});
    },
  },
};
</script>
