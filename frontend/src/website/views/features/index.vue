<script>
// Extensions
import View from '@/website/views/View'

// Mixins
import LoadSections from '@/website/mixins/load-sections'

export default {
  name: 'Features',

  metaInfo: {title: 'Features'},

  extends: View,

  mixins: [
    LoadSections([
      'hero-alt',
      'frontend-features',
      'backend-features',
      'features',
    ]),
  ],

  props: {
    id: {
      type: String,
      default: 'features',
    },
  },
}
</script>
