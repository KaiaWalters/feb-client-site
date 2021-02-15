<template>
  <div>
    <body class="is-preload">
      <NavBar />
      <Header :bannerImage="this.image" />
      <!-- One -->
      <section id="one" class="main style1">
        <div class="container">
          <div class="row gtr-150">
            <div class="col-6 col-12-medium">
              <header class="major">
                <h2 class="m13">
                  Lorem ipsum dolor adipiscing amet dolor consequat
                </h2>
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan et interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis sed volutpat
                aclacus nascetur ac non. Lorem curae et ante amet sapien sed
                tempus adipiscing id accumsan.
              </p>
              <a href="#one" class="button primary">Learn More</a>
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
                <li><img src="../assets/css/images/n-main.jpg" alt="" /></li>
              </ul>
            </div>
            <div class="col-6 col-12-medium">
              <header class="major">
                <h2>
                  Lorem ipsum dolor adipiscing<br />
                  amet dolor consequat
                </h2>
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
              <p>
                Blandit faucibus proin. Ac aliquam integer adipiscing enim non
                praesent vis commodo nunc phasellus cubilia ac risus accumsan.
                Accumsan blandit. Lobortis phasellus non lobortis dit varius mi
                varius accumsan lobortis. Blandit ante aliquam lacinia lorem
                lobortis semper morbi col faucibus vitae integer placerat
                accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing
                curae consequat feugiat etiam dolore.
              </p>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Three -->
      <section id="three" class="main style1 special">
        <div class="container">
          <header class="major">
            <h2>The Issues</h2>
          </header>
          <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
          <div class="row gtr-150">
            <div class="col-4 col-12-medium">
              <span class="image fit"
                ><img src="images/pic02.jpg" alt=""
              /></span>
              <h3 class="issue_header">Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
            </div>
            <div class="col-4 col-12-medium">
              <span class="image fit"
                ><img src="images/pic03.jpg" alt=""
              /></span>
              <h3 class="issue_header">Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
            </div>
            <div class="col-4 col-12-medium">
              <span class="image fit"
                ><img src="images/pic04.jpg" alt=""
              /></span>
              <h3 class="issue_header">Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
            </div>
            <ul class="actions special">
              <router-link to="/issues"
                ><a href="#" class="button primary">More</a></router-link
              >
            </ul>
          </div>
        </div>
      </section>

      <!-- Four -->
      <section id="four" class="main style2 special">
        <div class="container">
          <header class="major">
            <h2>Want to get involved?</h2>
          </header>
          <p>Sed lacus nascetur ac ante amet sapien.</p>
          <ul class="actions special">
            <li><a href="#" class="button wide primary">Contact Us</a></li>
            <li><a href="#" class="button wide">Sign Up for Newsletter</a></li>
              <li><a href="#" class="button wide primary">Contact Us</a></li>
          </ul>
        </div>
      </section>
      <!-- Footer -->
      <section id="footer">
        <div>
          <span>Stay connected with Jane</span>
        </div>
        <ul class="icons">
          <li>
            <a
              href="https://twitter.com/Nikkia4Boston"
              class="icon brands alt fa-twitter"
              ><span class="label">Twitter</span></a
            >
          </li>
          <li>
            <a
              href="https://www.instagram.com/nikkia4boston/"
              class="icon brands alt fa-facebook-f"
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
          <li>&copy; Untitled</li>
          <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </section>
    </body>
  </div>
</template>

<script>
import Header from "./Header.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
    Header,
  },

  data() {
    return {
      image: "../assets/css/images/home-title-card.png",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "/src/assets/css/main.css";
@import "/src/assets/css/noscript.css";

.button.primary {
  background-color: white;
  box-shadow: none !important;
  color: #ea8700 !important;
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
  background-color:#8b0c0e;
  color:white !important;
}
.main.style2 h2 {
  color: #ea8700 !important;
}
.main.style2 header.major:after {
  background-color: #ea8700;
}
.main.style2 .button.primary {
  background-color: #ea8700;
  box-shadow: inset 0 0 0 1px #ffffff !important;
  color: white !important;
}
.main.style2 .button {
  box-shadow: inset 0 0 0 1px #ea8700;
  color: #ea8700 !important;
}
header.major:after {
  background-color: white;
}
#footer {
  background-color: #b70a0c !important;
  background-image: none;
  color: white;
}
.icons {
  color: white;
}

#one {
  padding-bottom: 2em;
}
</style>
