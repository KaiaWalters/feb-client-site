<template>
  <div class="hello">
    <div id="navbar">
         <router-link to="/home"><img id="logo" src="../assets/css/images/logo.svg" alt="Nikia Campaign Logo"></router-link>
        <div id="navbar-right">
             <router-link to="/home">MEET JANE</router-link>
             <router-link to="/issues">ISSUES</router-link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbAr151anh7MYOuYqnFH14b3n9S1H7NpVzTN-EMiLKjrJcGQ/viewform?usp=pp_url">JOIN US</a>
            <a class="highlight" href="#">DONATE</a>
        </div>
    </div>
  </div>
</template>

<script>
//import navbarMin from "client-site/src/navbarminimize.js"
export default {
  name: 'NavBar',
  props: {
    msg: String
  }, 
 mounted() {
      this.$nextTick(function(){
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
        background-color:#f6efd8 !important;
        padding: 20px !important; 
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
      height: 15px;
      width: 15px;
    }

    #logo {
      height: 40px;
      width: 40px;
    }
</style>
