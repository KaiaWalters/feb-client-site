<template>
  <div>
    <body class="is-preload">
      <NavBar />
      <section v-if="this.selectedIssue.id == 1" id="headerOne"></section>
      <section v-else-if="this.selectedIssue.id == 2" id="headerTwo"></section>
      <section v-else-if="this.selectedIssue.id == 3" id="headerThree"></section>

      <!-- <section id="issueNav" class="main style2">
			
		</section> -->

      <!-- One -->
      <section id="issues" class="main style1 special">
        <div class="container">
          <ul class="actions">
            <router-link to="#"
              ><a @click="displayIssue('one')" href="#" class="button primary"
                >Issue One</a
              ></router-link
            >
            <router-link to="#"
              ><a @click="displayIssue('two')" href="#" class="button primary"
                >Issue Two</a
              ></router-link
            >
            <router-link to="#"
              ><a @click="displayIssue('three')" href="#" class="button primary"
                >Issue Three</a
              ></router-link
            >
          </ul>
        </div>
        <div class="container">
          <div class="issue">
            <header class="major">
              <h2>{{ this.selectedIssue.title }}</h2>
            </header>
            <p>{{ this.selectedIssue.content }}</p>
          </div>

          <!-- <div class="issue">
					<header class="major">
						<h2>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</h2>
					</header>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus voluptate quaerat, iusto commodi fugit temporibus error laudantium repellat illum vitae odit, ipsum autem, doloribus animi natus corrupti veritatis tempore!</p>
				</div>

				<div>
					<header class="major">
						<h2>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</h2>
					</header>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus voluptate quaerat, iusto commodi fugit temporibus error laudantium repellat illum vitae odit, ipsum autem, doloribus animi natus corrupti veritatis tempore!</p>
				</div>

				<div>
					<header class="major">
						<h2>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</h2>
					</header>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus voluptate quaerat, iusto commodi fugit temporibus error laudantium repellat illum vitae odit, ipsum autem, doloribus animi natus corrupti veritatis tempore!</p>
				</div> -->
        </div>
      </section>

      <section id="footer">
        <div>
          <span>Stay connected with Jane</span>
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
          <li>&copy; Untitled</li>
          <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </section>
    </body>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: "Issues",
  components: {
    NavBar
  },
  data: function () {
    return {
      selectedIssue: Object,
      content: {
        one: {
          title: "This is the first issue",
          content: "Some content to display",
          banner: "../assets/css/images/peace.svg",
          id: 1
        },
        two: {
          title: "This is the second issue",
          content: "Some content to display",
          banner: "../assets/css/images/home-title-card.png",
          id: 2
        },
        three: {
          title: "This is the third issue",
          content: "Some content to display",
          banner: "../assets/css/images/home-title-card.png",
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
      console.log("fuck", issue, "selected", this.selectedIssue);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "/src/assets/css/main.css";
@import "/src/assets/css/noscript.css";

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

.button.primary {
  color: #ea8700 !important;
}
#footer {
  background-color: #8b0c0e !important;
  background-image: none;
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

#headerOne {
  height:480px; background-image: url('../assets/css/images/peace.svg');
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#headerTwo {
  height:480px; background-image: url('../assets/css/images/home-title-card.png');
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#headerThree {
  height:480px; background-image: url('../assets/css/images/home-title-card.png');
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>






