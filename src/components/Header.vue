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
@media (min-width: 300px) and (max-width: 900px) {
  #header {
    height:42vh;
    width:100%;
    background-image: url('../assets/css/images/mobiletitlecard.svg');
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: cover;
    background-size:contain;
    background-repeat: no-repeat;
    background-position: 0px 82px;
    box-shadow: none;
  }
}

@media (min-width: 1016px) and (max-width: 1146px) {
  #header {
    height:30vh;
    width:100%;
    background-image: url('../assets/css/images/mobiletitlecard.svg');
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: cover;
    background-size:contain;
    background-repeat: no-repeat;
    background-position: 0px 85px;
    box-shadow: none;
  }
}

/* @media (min-width: 1016px) and (max-width: 1146px) { */
@media (min-width: 1146px) and (max-width: 1320px) {
  #header {
    height:62vh;
    width:100%;
    background-image: url('../assets/css/images/home-title-card.png');
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: cover;
    background-size:contain;
    background-repeat: no-repeat;
    background-position: 0px 85px;
    box-shadow: none;
  }
}
@media (min-width: 1325px) and (max-width: 1460px){
  #header {
    height:90vh;
    background-image: url('../assets/css/images/home-title-card.png');
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: cover;
    background-size:contain;
    background-repeat: no-repeat;
    background-position: 0px 85px;
    box-shadow: none;
  }
}

@media (min-width: 1682px) and (max-width: 1998px) {
  #header {
    height:58vh;
    background-image: url('../assets/css/images/home-title-card.png');
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size:contain;
    background-repeat: no-repeat;
    background-position: 0px 55px;
  }
}

@media (min-width: 1999px) and (max-width: 2122px) {
  #header {
    height:70vh;
    background-image: url('../assets/css/images/home-title-card.png');
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size:contain;
    background-repeat: no-repeat;
    background-position: 0px 55px;
  }
}

@media (min-width: 1999px) and (max-width: 2122px) {
  #header {
    height:70vh;
    background-image: url('../assets/css/images/home-title-card.png');
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size:contain;
    background-repeat: no-repeat;
    background-position: 0px 55px;
  }
}
</style>