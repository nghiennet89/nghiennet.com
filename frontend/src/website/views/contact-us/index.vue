<script>
// Extensions
import View from '@/website/views/View'

// Mixins
import LoadSections from '@/website/mixins/load-sections'

export default {
  name: 'ContactUs',

  metaInfo: {title: 'Contact Us'},

  extends: View,

  mixins: [
    LoadSections([
      'hero-alt',
      'keep-in-touch',
      'map',
      'newsletter',
      'features',
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
