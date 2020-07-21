<template>
  <div id="app">
    <page/>
  </div>
</template>

<script>
import page from './components/page'

export default {
  name: 'App',
  components: {
    page
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  ul li{
    list-style: none;
  }
  html,body,#app {
   height: 100%;
}
</style>
