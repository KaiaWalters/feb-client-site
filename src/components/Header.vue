<template>
  <section id="header" :style="style"></section>
</template>>

<script>
export default {
  name: "Header.vue",
//   computed: {
//     style() {
//       return "background-image: url(" + this.bannerImage + " !important);";
//     },
 // },
  props: {
    bannerImage: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "/src/assets/css/main.css";
@import "/src/assets/css/noscript.css";

#header {
  background-image:"../assets/css/images/home-title-card.png";
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>