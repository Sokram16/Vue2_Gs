<template>
  <div >
    <nuxt-link :to="url" :class="classList">
      <i :class="icon + ' text-white'"></i> {{name}}
      <b-badge v-if="badge && badge.text" :variant="badge.variant">{{badge.text}}</b-badge>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'sidebar-nav-link',
    props: {
      name: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      badge: {
        type: Object,
        default: () => {}
      },
      variant: {
        type: String,
        default: ''
      }
    },
    computed: {
      classList () {
        return [
          'nav-link text-white font-weight-bold',
          this.linkVariant
        ]
      },
      linkVariant () {
        return this.variant ? `nav-link-${this.variant}` : ''
      },
      isExternalLink () {
        if (this.url.substring(0, 4) === 'http') {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>
