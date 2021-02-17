<template>
  <div>
    <body class="is-preload">
      <NavBar/>
      <section v-if="this.selectedIssue.id == 3" id="headerThree"></section>
      <section v-else-if="this.selectedIssue.id == 2" id="headerTwo"></section>
      <section v-else id="headerOne"></section>
      <!-- One -->
      <section id="issues" class="main style1 special">
        <header class="major">
          <h2 style="color:white !important;">Our Vision</h2>
        </header>
        <div class="container">
          <ul class="actions">
           <a @click="displayIssue('one')" href="#" class="button wide"
                >Transparency &amp; Accountability</a>
           <a @click="displayIssue('two')" href="#" class="button wide">Food Abundance</a>
           <a @click="displayIssue('three')" href="#" class="button wide"
                >Public Peace</a>
          </ul>
        </div>

       <div class="container" style="background-color: #f6efd8">
         <PublicPeace v-if="this.selectedIssue.id == 3"/>
         <FoodAbundance v-else-if="this.selectedIssue.id == 2"/>
         <Transparency v-else/>
       </div>
      </section>

      <section id="footer">
        <div>
          <span>Stay connected with Nikkia</span>
        </div>

        <ul class="icons">
          <li>
            <a href="#" class="icon brands alt fa-twitter"
              ><span class="label">Twitter</span></a
            >
          </li>
          <li>
            <a href="#" class="icon brands alt fa-facebook-f"
              ><span class="label">Facebook</span></a
            >
          </li>
          <li>
            <a href="#" class="icon brands alt fa-instagram"
              ><span class="label">Instagram</span></a
            >
          </li>
          <li>
            <a href="#" class="icon solid alt fa-envelope"
              ><span class="label">Email</span></a
            >
          </li>
        </ul>
        <ul class="copyright">
          <li>&copy; Paid for by the Committee to Elect Nikkia Charles</li>
          <li><a href="https://www.linkedin.com/in/kaiawalters/">Developed by Kaia Walters</a></li>
        </ul>
      </section>
    </body>
  </div>
</template>

<script>
import FoodAbundance from '../components/FoodAbundance.vue';
import NavBar from "../components/NavBar.vue";
import PublicPeace from "../components/PublicPeace.vue"
import Transparency from '../components/Transparency.vue';

export default {
  name: "Issues",
  components: {
    NavBar, 
    PublicPeace,
    Transparency,
    FoodAbundance
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "/src/assets/css/main.css";
@import "/src/assets/css/noscript.css";
.container {
  color: #b70a0c;
  padding: 25px; 
  padding: 1em;
}
.major h2 {
  color: #b70a0c !important;
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
}
.button.wide:hover{
  background-color: #b70a0c;
  color: white !important;
  border: 2px solid white;
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






