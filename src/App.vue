<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
const customIconConfig = {
  customIconPacks: {
    'ionicons': {
      sizes: {
        'default': 'is-size-5',
        'is-small': '',
        'is-medium': 'is-size-3',
        'is-large': 'is-size-1'
      },
      iconPrefix: 'ion-md-'
    }
  }
}
export default {
  name: 'app',
  created() {
    this.$buefy.config.setOptions(customIconConfig)
  }
}
</script>

<style>
 @import "https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css";
#app {
  font-family: 'lgf';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>