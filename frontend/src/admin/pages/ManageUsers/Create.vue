<template>
  <v-card class="mx-auto pa-5">
    <v-card-title class="mx-0 px-0">Create new user</v-card-title>
    <v-row>
      <v-col cols="6">
        <v-text-field dense outlined label="Name" v-model="newUser.name"/>
      </v-col>
      <v-col cols="6">
        <v-text-field dense outlined label="Email" type="email" v-model="newUser.email"/>
      </v-col>
      <v-col cols="6">
        <v-text-field dense outlined label="Password" type="password" v-model="newUser.password"/>
      </v-col>
      <v-col cols="6">
        <v-text-field dense outlined label="Re-type Password" type="password" v-model="newUser.password_conf"/>
      </v-col>
      <v-col cols="6">
        <v-select v-model="newUser.role_id" :items="roles" item-text="name" item-value="id" label="Role" outlined dense></v-select>
      </v-col>
    </v-row>
    <v-card-actions class="mx-0 pa-0">
      <v-spacer></v-spacer>
      <v-btn color="secondary" text @click="onCancel">Cancel</v-btn>
      <v-btn color="primary" text @click="processAdd">Create</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'CreateUser',
  props: ['onCreated', 'onCancel'],
  data: () => ({
    newUser: {}
  }),
  computed: {
    ...mapGetters({
      roles: 'role/all'
    }),
  },
  methods: {
    ...mapActions({
      createItem: 'user/create',
      getAllRoles: 'role/all'
    }),
    processAdd() {
      this.createItem(this.newUser).then(() => {
        this.onCreated();
      });
    }
  },
  mounted() {
    this.getAllRoles();
  }
}
</script>
