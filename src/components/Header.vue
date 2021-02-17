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
  height:70vh;
  width:100%;
  background-image: url('../assets/css/images/home-title-card.png');
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 0px 15px;
}
@media screen and (max-width: 900px) {
  #header {
    height:44vh;
    width:100%;
    background-image: url('../assets/css/images/mobiletitlecard.svg');
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: cover;
    background-size:contain;
    background-repeat: no-repeat;
    background-position: 0px 90px;
  }
}

@media (min-width: 411px) and (max-width: 980px) {
  #header {
    background-position: 0px 100px;
    height:25vh;
  }
}
/* dont touch me!!!! */
@media  screen and (max-width: 378px) {
  #header {
    background-position: 0px 100px;
    height:28.5vh;
  }
}

@media (max-width:768px) {
   #header {
    background-position: 0px 100px;
    height:37vh;
  }
}

@media  (max-width: 375px) {
  #header {
    background-position: 0px 100px;
    height:22.75vh;
  }
}

@media (min-width: 901px) and (max-width: 1024px) {
  #header {
    background-position: 0px 100px;
    height:30.5vh;
  }
}
</style>
