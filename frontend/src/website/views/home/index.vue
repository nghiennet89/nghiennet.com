<script>
// Extensions
import View from '@/website/views/View'

// Mixins
import LoadSections from '@/website/mixins/load-sections'

export default {
  name: 'Home',

  metaInfo: {title: 'Home'},

  extends: View,

  mixins: [
    LoadSections([
      'hero',
      'frontend-features',
      'backend-features',
      'contact-us',
      'affiliates',
      'social-media',
      'keep-in-touch',
      'newsletter',
      'features',
      'info',
    ]),
  ],

  props: {
    id: {
      type: String,
      default: 'home',
    },
  },
}
</script>
