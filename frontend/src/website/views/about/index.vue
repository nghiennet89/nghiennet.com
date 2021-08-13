<script>
// Extensions
import View from '@/website/views/View'

// Mixins
import LoadSections from '@/website/mixins/load-sections'

export default {
  name: 'About',

  metaInfo: {title: 'About Us'},

  extends: View,

  mixins: [
    LoadSections([
      'hero-alt',
      'about-our-product',
      'affiliates',
      'newsletter',
      'features',
      'info',
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
