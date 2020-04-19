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

<style lang="scss">
// // Import Bulma's core
// @import "~bulma/sass/utilities/_all";
// // Set your colors
// $primary: red;
// $primary-invert: findColorInvert($primary);
// $twitter: #4099FF;
// $twitter-invert: findColorInvert($twitter);
// $danger:rgb(94, 219, 94);
// $fontColor:#2c3e50;

// // Setup $colors to use as bulma classes (e.g. 'is-twitter')
// $colors: (
//     "white": ($white, $black),
//     "black": ($black, $white),
//     "light": ($light, $light-invert),
//     "dark": ($dark, $dark-invert),
//     "primary": ($primary, $primary-invert),
//     "info": ($info, $info-invert),
//     "success": ($success, $success-invert),
//     "warning": ($warning, $warning-invert),
//     "danger": ($danger, $danger-invert),
//     "twitter": ($twitter, $twitter-invert)
// );

// // Links
// $link: $primary;
// $link-invert: $primary-invert;
// $link-focus-border: $primary;
#app {
  font-family: 'lgf';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
// Import Bulma and Buefy styles
// @import "~bulma";
// @import "~buefy/src/scss/buefy";
</style>