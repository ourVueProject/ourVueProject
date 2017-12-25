<template>
  <div id="app">
      <v-header></v-header>
      <div class="pages">
        <router-view></router-view>
      </div>
      <v-footer></v-footer>
  </div>
</template>

<script>
import header from '@/components/header'
import footer from '@/components/footer'

export default {
    components: {
      'v-header': header,
      'v-footer': footer
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
