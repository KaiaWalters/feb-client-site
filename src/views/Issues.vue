<template>
  <div>
    <body class="is-preload">
      <NavBar/>
      <!-- <section v-if="!hide">
        <section v-if="this.selectedIssue.id == 3" id="headerThree"></section>
        <section v-else-if="this.selectedIssue.id == 2" id="headerTwo"></section>
        <section v-else id="headerOne"></section> 
      </section> -->
      <button @click="topFunction()" id="myBtn" title="Go to top"><i class="fas fa-arrow-up"></i></button>
      <section id="issues" class="main style1 special">
        <header class="major">
          <h2 style="color:white !important;">Our Vision</h2>
        </header>
        <div class="container">
          <ul class="actions">
           <a @click="displayIssue('one')" href="#" class="button wide"
                >Transparency</a>
           <a @click="displayIssue('two')" href="#" class="button wide">Food Abundance</a>
           <a @click="displayIssue('three')" href="#" class="button wide"
                >Public Peace</a>
          </ul>
        </div>

       <div class="container" style="background-color: #f6efd8; padding: 30px;">
         <PublicPeace v-if="this.selectedIssue.id == 3"/>
         <FoodAbundance v-else-if="this.selectedIssue.id == 2"/>
         <Transparency v-else/>
       </div>
      </section>
      <Footer/>
    
    </body>
  </div>
</template>

<script>
import FoodAbundance from '../components/FoodAbundance.vue';
import NavBar from "../components/NavBar.vue";
import PublicPeace from "../components/PublicPeace.vue"
import Transparency from '../components/Transparency.vue';
import Footer from "../components/Footer.vue"

export default {
  name: "Issues",
  components: {
    NavBar, 
    PublicPeace,
    Transparency,
    FoodAbundance, 
    Footer
  },
  data: function () {
    return {
      selectedIssue: Object,
      content: {
        one: {
          id: 1
        },  
        two: {
          id: 2
        },
        three: {
          id: 3
        },
      },
      hide: false
    };
  },
  methods: {
    displayIssue: function (issue) {
      switch (issue) {
        case "one":
          this.selectedIssue = this.content.one;
          break;
        case "two":
          this.selectedIssue = this.content.two;
          break;
        case "three":
          this.selectedIssue = this.content.three;
          break;
      }
    },
    hideBanners: function () {
       if(window.innerWidth < 1300) {
         this.hide = true;
       }
    },
       handleScroll (event) {
       this.scrollFunction()
       console.log(event)
    },
    scrollFunction: function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  },
    // When the user clicks on the button, scroll to the top of the document
    topFunction: function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
    this.hideBanners()
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "/src/assets/css/main.css";
@import "/src/assets/css/noscript.css";
.container{
  color:black;
  padding: 1em;
  font-family: "Open Sans";
  font-size: .75em;
  width:90%;
}

b{
  color: black !important;
}

.button.wide {
  font-size: 1.2em;
}
.major h2 {
  font-family: "Josefin Sans" !important;
  margin-top: 1em;
}

#issues{
  margin-top: 85px;
  padding:40px;
}
.main.style1.special h2 {
 color: black !important;
}

.hidden {
  display: none;
}

.actions {
  display: flex;
  justify-content: space-evenly;
}
.actions router-link {
  background-color: #f6efd8 !important;
}
#footer {
  background-color: #8b0c0e !important;
  background-image: none;
}

.button.wide {
  border: 2px solid #ea8700;
  background-color: white; 
  color: #ea8700 !important;
  font-family: "Josefin Sans" !important;
}
.button.wide:hover{
  background-color: #8b0c0e;
  color: white !important;
  /* border: 2px solid white; */
}

#headerOne {
  height:95vh;
  background-image: url("../assets/css/images/transparency.png");
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: cover;
  background-size: cover;
   background-position: top 50px left 5px;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#headerTwo {
  height:95vh;
  background-image: url("../assets/css/images/foodabundance.png");
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: cover;
  background-position: top 55px right 2px;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#headerThree {
  height:90vh;
  background-image: url("../assets/css/images/publicpeace.png");
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 0px 40px;
}
.container {
  text-align: left;
}
.major {
  text-align: center !important;
}

@media screen and (min-width: 990px) {
  .button.wide {
    width: 500px; 
  }
}
@media (min-width:540px) and (max-width: 940px) {
  .button.wide {
    width: 480px; 
  }
  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

#myBtn i {
  height: 20px; 
  width: 35px;
  color:white;
}
#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  background-color:#ea8700;
  border: 2px solid #ea8700;
  color: white;
  cursor: pointer;
  padding: 5px; 
  border-radius: 4px;
}

#myBtn:hover {
  background-color:#fcda02;
  border: 2px solid white; 
}
#myBtn i:hover {
  color:white; 
}
/* @media (min-width: 1682px) and (max-width: 1998px) {
  #headerOne, #headerTwo, #headerThree {
    height:58vh;
    background-image: url('../assets/css/images/home-title-card.png');
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size:contain;
    background-repeat: no-repeat;
    background-position: 0px 55px;
    }
  } */
</style>






