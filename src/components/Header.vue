<template>
  <section id="header"></section>
</template>>

<script>
export default {
  name: "Header.vue",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "/src/assets/css/main.css";
@import "/src/assets/css/noscript.css";

#header {
  height:480px;
  background-image: url('../assets/css/images/home-title-card.png');
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>