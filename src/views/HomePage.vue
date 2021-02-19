<template>
  <div>
    <body class="is-preload">
      <NavBar />
      <Header/>
      <!-- One -->
      <section id="one" class="main style1">
        <div class="container">
          <!-- here -->
          <button @click="topFunction()" id="myBtn" title="Go to top">
            <i class="fas fa-arrow-up"></i>
          </button>
          <div class="row gtr-150">
            <div class="col-6 col-12-medium">
              <header class="major">
                <h2 class="m13">
                  "From Lorna Rd to the West Selden Apartments, and Blue Hill Ave
                  triple deckers, D4 has always been my home."
                </h2>
              </header>
              <p>
                District 4 deserves better! We deserve to have a public high
                school in Mattapan, We deserve to have stable housing, we
                deserve safety, we deserve to have access to healthy foods, we
                deserve to breathe clean air and we deserve to be listened to
                when community demands are made. We deserve better.
              </p>
              <router-link :to="{name:'Issues'}"><a href="#" class="button primary">Learn More</a></router-link>
            </div>
            <div class="col-6 col-12-medium imp-medium">
              <span class="image fit"
                ><img src="../assets/css/images/n-mttpn.jpg" alt=""
              /></span>
            </div>
          </div>
        </div>
      </section>

      <!-- Two -->
      <section id="two" class="main style2">
        <div class="container">
          <div class="row gtr-150">
            <div class="col-6 col-12-medium">
              <ul class="major-icons">
                  <li style="padding-top: 0px !important;"><img  src="../assets/css/images/n-main.jpg" alt="" /></li>
                 <li style="padding-top: 0px !important;"><img src="../assets/css/images/nikkiaflagpole.jpg" alt="" /></li>
              </ul>
            </div>
            <div class="col-6 col-12-medium">
              <header class="major">
                <h2>
                  "As a community organizer, survivor, and longtime resident of
                  District 4, I wanted to create a campaign that is framed by my
                  lived experiences. Born from a Haitian Immigrant family I
                  value accessibility, safety, and love."
                </h2>
              </header>
              <p>
                I believe that everyone should have access to their immediate
                needs. We need to make sure that information and resources are
                easily reached by those who need them. We need to reimagine and
                innovate our relationship with the community. I believe in
                reimagining safety to create new ways that will ensure our
                community’s safety and health. In my decision-making process, I
                will always prioritize and center the happiness, health, and joy
                of the residents of District 4, my peers, team members, and
                myself to ensure the well-being of our community.
              </p>
              <p>
                I value
                learning that is non-linear and accessible to all. In my
                decision-making, I want to envision continuous, healthy,
                sustainable lives that encourage people to think more about
                building, innovating, and growing as a community, neighbors, and
                individuals rather than housing, financial, and food insecurity.
                Its important that I set a precedent in how I keep myself
                accountable with the support of my constituents and peers. I
                will always be transparent and upfront with my constituents so
                that they are in the loop and updated on what is going on. I
                will be truthful and open to any suggestions brought to me by
                other community members. I will work on providing ways that will
                help continue and bring intergenerational relationships in our
                communities.
              </p>
              <p>
                See, even at a young age especially growing up in Mattapan I had
                a deep understanding of racial disparities in Black and Brown
                communities like mine. As an Elementary school student, I worked
                tirelessly with my friends and cousins to prevent the beloved
                lower mills library from closing down, and when I went to the
                Mattapan Library, I saw kids who looked like me get the police
                called on them unnecessarily. In the fourth grade, I watched as
                black and brown kids get thrown into paddy wagons for having
                mental health breakdowns.
              </p>
              <p>
                Even at ten years old, I was being taught the dangers of being
                Black in this world. These experiences, and more, have shaped
                who I am and what I believe in. I know that I do not hold these
                experiences alone and that many others in my district have
                stories just like this. District 4 deserves better! We deserve
                to have a public high school in Mattapan, We deserve to have
                stable housing, we deserve safety, we deserve to have access to
                healthy foods, we deserve to breathe clean air and we deserve to
                be listened to when community demands are made. We deserve
                better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Three -->
      <section id="three" class="main style1 special">
        <div class="container">
          <header class="major">
            <h2>Our Vision</h2>
          </header>
          <p>
            I plan on bringing my perspective and energy as a young Black woman
            to city hall. We have an opportunity to set new precedents with this
            campaign and envision change on the horizon.
          </p>
          <div class="row gtr-150">
            <div class="col-4 col-12-medium">
              <router-link :to="{name:'Issues'}">
                  <span class="image fit"
                  ><img src="../assets/css/images/peace.svg" alt=""
                /></span>
              </router-link>
              <h3 class="issue_header">Public Peace</h3>
              <p>
                Reimagining public safety, and creating goals and expectations
                to promote and sustain peace in the community.
              </p>
            </div>
            <!-- here -->
            <div class="col-4 col-12-medium">
              <router-link :to="{name:'Issues'}">
                <span class="image fit"
                ><img src="../assets/css/images/food.svg" alt=""
              /></span>
              </router-link>
              <h3 class="issue_header">Imagining Food Abundance</h3>
              <p>
                Reimagining food access to meet the needs of community members
                and also build locally sustained economies.
              </p>
            </div>
            <div class="col-4 col-12-medium">
               <router-link :to="{name:'Issues'}">
                <span class="image fit"
                ><img src="../assets/css/images/transparency.svg" alt=""
              /></span>
              </router-link>
              <h3 class="issue_header">Transparency and Accountability</h3>
              <p>
                Reimagining the relationship between government and communities.
              </p>
            </div>
            <ul class="actions special">
               <router-link :to="{name:'Issues'}"><a href="#" class="button primary">More</a></router-link>
            </ul>
          </div>
        </div>
      </section>

      <!-- Four -->
      <section id="four" class="main style2 special">
        <div class="container">
          <header class="major">
            <h2>WANT TO GET INVOLVED?</h2>
          </header>
          <ul class="actions special">
            <li><a href="https://secure.actblue.com/donate/nikkia4boston" class="button wide primary">Donate</a></li>
            <li><a href="https://actionnetwork.org/forms/become-a-campaign-organizer" class="button wide">Become an organizer</a></li>
            <li><a href="mailto:nikkiajeancharles@gmail.com" class="button wide primary">Contact Us</a></li>
          </ul>
        </div>
      </section>
      <!-- Footer -->
      <section id="footer">
        <div>
          <span>Stay connected with Nikkia</span>
        </div>
        <ul class="icons">
          <li>
            <a
              href="https://twitter.com/Nikkia4Boston"
              class="icon brands alt fa-twitter"
              ><span class="label">Twitter</span></a
            >
          </li>
          <!-- <li>
            <a
              href="https://www.instagram.com/nikkia4boston/"
              class="icon brands alt fa-facebook-f"
              ><span class="label">Facebook</span></a
            >
          </li> -->
          <li>
            <a href="https://www.instagram.com/nikkia4boston/" class="icon brands alt fa-instagram"
              ><span class="label">Instagram</span></a
            >
          </li>
          <li>
            <a href="mailto:nikkiajeancharles@gmail.com" class="icon solid alt fa-envelope"
              ><span class="label">Email</span></a
            >
          </li>
        </ul>
        <ul class="copyright">
          <li>&copy;Paid for by the Jean-Charles Committee</li>
          <li><a href="https://www.linkedin.com/in/kaiawalters/">Developed by Kaia Walters</a></li>
        </ul>
      </section>
    </body>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "HomePage",
  components: {
    NavBar,
    Header,
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "/src/assets/css/main.css";
@import "/src/assets/css/noscript.css";
@font-face {
  font-family: "Hebrew Sans Bold";
  src:
  url("/./../../OpenSansHebrewCondensed-Bold.ttf") format(".tff")
}
@font-face {
  font-family: "Hebrew Sans Light";
  src:
  url("/./../../OpenSansHebrewCondensed-Light.ttf") format(".tff")
} */


body {
  background-color: #fff9d6;
  font-family: "Open Sans" !important;
}
.m13 {
  font-family: "Open Sans" !important;
}
.button.primary {
  background-color: white;
  box-shadow: none !important;
  color: #ea8700 !important;
  font-family: "Josefin Sans" !important;
}
input[type="submit"].primary:hover,
input[type="reset"].primary:hover,
input[type="button"].primary:hover,
button.primary:hover,
.button.primary:hover {
  background-color: #8b0c0e;
  color: white !important;
}

input[type="submit"].primary:active,
input[type="reset"].primary:active,
input[type="button"].primary:active,
button.primary:active,
.button.primary:active {
  background-color: #8b0c0e;
  color: white !important;
}
.major h2 {
  font-family: "Josefin Sans" !important;
}
.main.style2 h2 {
  color: #ea8700 !important;
  font-family: "Josefin Sans" !important;
}
.main.style2 header.major:after {
  background-color: #ea8700;
}
.main.style2 .button.primary {
  background-color: #ea8700;
  box-shadow: inset 0 0 0 1px #ffffff !important;
  color: white !important;
  font-family: "Josefin Sans" !important;
}
.main.style2 .button {
  box-shadow: inset 0 0 0 1px #ea8700;
  color: #ea8700 !important;
}
header.major:after {
  background-color: white;
}
#footer {
  background-color:#8b0c0e !important;
  background-image: none;
}
#one {
  padding-bottom: 2em;
}
.open {
  transform: translateY(300px);
}
@media screen and (max-width:980px) {
  .major-icons li:first-child {
    display: none;
  }
  .actions.special {
    display:flex;
    align-items: center;
    flex-direction: column;
  }

  .actions.special li {
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 0px;
    margin-top: 8px;
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
</style>
