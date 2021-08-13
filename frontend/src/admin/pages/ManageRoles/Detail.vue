<template>
  <v-card :elevation="0" tile class="mx-auto pa-5">
    <v-card-title class="mx-0 px-0">
      <span>Detail Role</span>
      <v-spacer></v-spacer>
      <v-btn color="primary" outlined @click="updateScope">Save</v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <v-row no-gutters justify="space-between">
      <v-divider vertical></v-divider>
      <v-col cols="3">
        <v-card-subtitle>
          List Scope Groups
        </v-card-subtitle>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col class="d-flex text-left">
        <v-card-subtitle>
          List Scope
        </v-card-subtitle>
      </v-col>
      <v-divider vertical></v-divider>
    </v-row>
    <v-divider></v-divider>
    <v-row no-gutters justify="space-between">
      <v-divider vertical></v-divider>
      <v-col cols="3" class="pl-2">
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in scopeGroups" :key="i" @click="selectedGroup = item"
                         :class="selectedGroup === item ? 'v-item--active v-list-item--active' : ''">
              <v-list-item-content>
                <v-list-item-title v-text="'Group ' + item"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col class="d-flex text-center" style="max-height: 375px; overflow-y: auto; overflow-x: hidden;">
        <v-scroll-y-transition mode="out-in">
          <div v-if="!selectedGroup" class="title grey--text text--lighten-1 font-weight-light text-center">
            Select group
          </div>
          <v-row v-else no-gutters>
            <template v-for="(scope,idx) in listScope">
              <v-col v-show="scope.isDisplay" :key="idx">
                <v-checkbox d-table-cell class="mx-3 text-no-wrap" :label="scope.name" v-model="scope.isChecked"/>
              </v-col>
            </template>

          </v-row>
        </v-scroll-y-transition>
      </v-col>
      <v-divider vertical></v-divider>
    </v-row>
    <v-divider></v-divider>
    <v-card-actions class="mx-0 px-0">
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="onClose">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'DetailRole',
  props: ['selectedItem', 'onClose'],
  data() {
    return {
      selectedGroup: 'All Scopes',
      localListScopes: null,
    }
  },
  computed: {
    ...mapGetters({
      scopes: 'scope/all'
    }),
    listScope: {
      get() {
        return this.localListScopes ? this.localListScopes : this.scopes
      },
      set(val) {
        this.localListScopes = val
      }
    },
    scopeGroups() {
      let groups = ['All Scopes'];
      this.scopes.forEach(s => {
        if (groups.indexOf(s.group) === -1) groups.push(s.group)
      })
      return groups
    },
    listScopesOfCurrentRole() {
      return this.selectedItem && this.selectedItem.role_scopes ? this.selectedItem.role_scopes.map(r => r.scope) : []
    },
  },
  methods: {
    ...mapActions({
      roleSetScope: 'role/setScope',
    }),
    updateScope() {
      let data = {
        role_id: this.selectedItem.id,
        scope_ids: []
      }
      this.listScope.forEach(s => {
        if (s.isChecked) data.scope_ids.push(s.id)
      });
      this.roleSetScope(data).then(() => {
        this.onClose();
      });
    }
  },
  watch: {
    selectedGroup: {
      handler() {
        this.listScope.map(s => {
          s.isDisplay = s.group === this.selectedGroup || this.selectedGroup === 'All Scopes'
          return s
        });
      },
      deep: true
    },
    selectedItem: {
      handler() {
        this.listScope.map(s => {
          s.isChecked = this.listScopesOfCurrentRole.map(ss => ss.name).indexOf(s.name) > -1;
          return s
        });
      },
      deep: true
    }
  },

  mounted() {
    this.listScope.map(s => {
      s.isDisplay = s.group === this.selectedGroup || this.selectedGroup === 'All Scopes';
      s.isChecked = this.listScopesOfCurrentRole.map(ss => ss.name).indexOf(s.name) > -1;
      return s
    });
    this.$forceUpdate()
  }
}
</script>
