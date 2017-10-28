<template>
    <div class="row wrapper">
        
        <sidebar/>
        <nuxt/>

    </div>
</template>

<script>
import Sidebar from '~/components/Sidebar/Sidebar_index.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  components: {
    Sidebar
  }
}
</script>

<style>

</style>