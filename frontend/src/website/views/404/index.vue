<script>
// Extensions
import View from '@/website/views/View'

// Mixins
import LoadSections from '@/website/mixins/load-sections'

export default {
  name: 'Page404',

  metaInfo: {title: 'Oops! No Page Found'},

  extends: View,

  mixins: [
    LoadSections([
      '404',
      'newsletter',
      'info-alt',
    ]),
  ],

  props: {
    id: {
      type: String,
      default: 'about',
    },
  },
}
</script>
