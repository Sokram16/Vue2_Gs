<template>
    <nuxt-link tag="li" :to="url" class="nav-item nav-dropdown" disabled>
    <div class="nav-link nav-dropdown-toggle text-white font-weight-bold" @click="handleClick"><i :class="icon + ' text-white'"></i>
     {{name}}</div>
    <ul class="nav-dropdown-items">
      <slot></slot>
    </ul>
  </nuxt-link>
</template>

<script>
export default {
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
    }
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>
