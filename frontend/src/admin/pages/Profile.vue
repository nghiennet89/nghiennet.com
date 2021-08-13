<template>
  <v-card class="ma-4" tile :elevation="0">
    <h1 class="mx-4">User Profile</h1>
    <v-row class="mb-4">
      <v-col cols="4" sm="6" xs="12">
        <v-avatar size="275" class="mr-4">
          <img :src="form.avatar" alt="Avatar">
        </v-avatar>
        <v-btn @click="openAvatarPicker">Change Avatar</v-btn>
      </v-col>
      <v-col cols="8" sm="6" xs="12">
        <v-text-field
          v-model="form.name"
          label="Name"></v-text-field>
        <v-text-field
          v-model="form.role"
          label="Role"></v-text-field>
        <v-text-field
          v-model="form.email"
          label="Email Address"></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" :loading="loading" @click.native="update">
        <v-icon left dark>mdi-check</v-icon>
        Save Changes
      </v-btn>
    </v-card-actions>
    <v-dialog v-model="dialogAvatarPicker" :width="400">
      <avatar-picker :current-avatar="form.avatar" @selected="selectAvatar" :onCancel="()=>{dialogAvatarPicker=false}"></avatar-picker>
    </v-dialog>
  </v-card>
</template>

<script>
import AvatarPicker from '@/admin/components/AvatarPicker'

export default {
  name: 'Profile',
  components: {AvatarPicker},
  data() {
    let user = this.$auth.user() || {};
    console.log(user);
    return {
      loading: false,
      form: {
        name: user.name,
        role: user.role ? user.role.name : '',
        email: user.email,
        avatar: require('~/img/avatars/13101802.jpg')
      },
      dialogAvatarPicker: false
    }
  },
  methods: {
    openAvatarPicker() {
      this.dialogAvatarPicker = true
    },
    selectAvatar(avatar) {
      this.form.avatar = avatar
    }
  }
}
</script>
