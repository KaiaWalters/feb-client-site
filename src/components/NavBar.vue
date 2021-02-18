<template>
  <div style="background-color:'red';">
    <NavMobile v-if="mobileview"/>
    <div v-if="!mobileview" id="navbar">
        <router-link style="padding:0px;" :to="{name:'Home'}"><img id="logo" src="../assets/css/images/logo.svg" alt="Nikia Campaign Logo"></router-link>
        <div id="navbar-right">
             <router-link :to="{name:'Home'}">MEET NIKKIA</router-link>
             <router-link :to="{name:'Issues'}">ISSUES</router-link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbAr151anh7MYOuYqnFH14b3n9S1H7NpVzTN-EMiLKjrJcGQ/viewform?usp=pp_url">JOIN US</a>
            <a class="highlight" href="https://secure.actblue.com/donate/nikkia4boston">DONATE</a>
        </div>
    </div>
  </div>
</template>

<script>
//import navbarMin from "client-site/src/navbarminimize.js"
import NavMobile from "./NavMobile.vue";

export default {
  name: 'NavBar',
  components: {
    NavMobile
  },
  props: {
    msg: String
  }, 
  data:() => {
    return {
      mobileview: false
    }
  },
  methods: {
    handleview() {
      this.mobileview = window.innerWidth < 990; 
    }
  },
  created() {
    this.handleview()
  },
  mounted() {
      this.$nextTick(function(){
      if(window.innerWidth > 990) {
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("navbar")
          var logo = this.document.getElementById("logo")
          var nav_classes = navbar.classList
          var logo_classes = logo.classList
          if(document.documentElement.scrollTop >= 150) {
            if (nav_classes.contains("shrink") === false) {
              nav_classes.toggle("shrink");
              logo_classes.toggle("shrinkLogo");
            }
          }
          else {
            if (nav_classes.contains("shrink") === true) {
              nav_classes.toggle("shrink");
              logo_classes.toggle("shrinkLogo");
            }
          }
        })
        }
      })
    },
}
</script>

<style scoped>
    @import 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css';
  
    #navbar.shrink {
      padding: 5px !important;

    }

    #navbar a {
      margin-right: 1rem;
    }

    #navbar {
        background-color: #f6efd8 !important;
        padding: 20px !important; 
        font-family: "Josefin Sans" !important;
    }

    #navbar-right a {
        color: #ea8700; 
    }
    
    #navbar .highlight {
      background-color: #8b0c0e;
      color: white;
      padding-left: 20px;
      border-bottom: none;
    }

    #logo.shrinkLogo {
      height: 40px;
      width: 100px;
      margin-top: 15px;
    }

    #logo {
     height: 60px;
     width: 125px;
     margin-bottom: 10px;
    }
</style>
