<template>
  <span></span>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import config from '@/config'

export default {
  name: 'AdminNotice',
  data() {
    return {
      toastShowing: 0,
    }
  },
  computed: {
    ...mapGetters({
      notices: 'system/notices',
    }),
  },
  methods: {
    ...mapActions({
      removeNotice: 'system/removeNotice',
    }),
    showNotice(notice) {
      let option = {
        className: 'vue-toast-notices',
        duration: 5759 + this.toastShowing * 579,
        action: {
          class: 'action-close-toast v-icon mdi mdi-close',
          onClick: (e, toastObject) => {
            this.toastShowing -= 1
            toastObject.goAway(0)
          }
        },
        onComplete: () => this.toastShowing -= 1
      };
      this.toastShowing += 1
      if (notice.type === config.CONSTANTS.NOTICE_TYPE.SUCCESS) option.type = 'success';
      if (notice.type === config.CONSTANTS.NOTICE_TYPE.ERROR) option.type = 'error';
      if (notice.type === config.CONSTANTS.NOTICE_TYPE.INFO) option.className += ' toast-info';
      if (notice.type === config.CONSTANTS.NOTICE_TYPE.WARNING) option.className += ' toast-warning';
      this.$toasted.show(notice.message, option)
      this.removeNotice(notice)
    },
  },
  watch: {
    notices: {
      handler(val) {
        while (this.toastShowing < config.settings.maxNoticesDisplay && val.length > 0)
          this.showNotice(val.pop())
      },
      deep: true
    },
    toastShowing: {
      handler() {
        while (this.toastShowing < config.settings.maxNoticesDisplay && this.notices.length > 0)
          this.showNotice(this.notices.pop())
      },
    }
  }
}
</script>
<style lang="scss">
.vue-toast-notices {
  white-space: pre-line;

  .action-close-toast {
    text-decoration: none;
    color: #fff;
  }
}

.vue-toast-notices.toasted.toast-warning {
  background: var(--v-warning-lighten1);

}

.vue-toast-notices.toasted.toast-info {
  background: var(--v-info-lighten1);
}
</style>
