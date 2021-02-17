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
                >Public Safety</a>
          </ul>
        </div>

        <div class="container" style="background-color: #f6efd8">
          <header class="major">
            <h2>Public Peace</h2>
          </header>
          <div class="issue">
            <p>Public peace means reimagining public safety and health while creating goals and expectations to promote and sustain peace in our communities, at school, on the streets, and in our homes. Public peace is reliant on the prevention of violence. Keep in mind that violence is and must be recognized as any issue that targets the well-being, health, and safety of a community, including its members and the environment. Any behavior or policy that goes against these principles is considered acts of violence. To achieve public peace, our campaign is committed to prioritizing the following:</p>
            <ul class="main-points">
                <li>
                  <b>We must dismantle the school-to-confinement pipeline.</b> Students, disproportionately Black and Brown, are being funneled into mental health institutions, the prison industrial complex, ICE, and the foster care system instead of receiving the resources they need to thrive in school.
                </li>
                    <ul class="sub-points">
                      <li>Students should be given culturally competent and non-violent support from Clinical Therapists, Mental Health Professionals, stable food programs, stable housing agencies, youth empowerment, and employment programs. </li>
                      <li>
                        City counselors must advocate for a BPS budget that prioritizes funding for school nurses, mental health professionals, higher wages for educators, and technical, vocational &amp; creative in-school electives, over School Resource Officers (police in schools).</li>
                      <li>According to the Chicago Lawyers Committee for Civil Rights:</li>
                        <ul class="sub-points2">
                      <li>“There is no clear evidence that the use of school resource officers (SROs) or guards in schools is effective in preventing school violence.[i] A review of 40 years of evaluations of school policing showed no positive impact on school safety outcomes.[ii]“</li>
                      <li>“The presence of SROs leads to more expulsions and suspensions – particularly for Black students. Studies show that schools with SROs also rely more heavily on exclusionary discipline.[iii] Schools with high security (including police presence) have significantly more suspensions and a greater black-white disparity in suspensions.[iv]”</li>
                      <li>“Schools with SROs criminalize and arrest youth for minor misbehavior. When SROs or security are present in schools, trivial forms of student misconduct are more likely to result in arrest and court referral.[v] Most secondary school administrators say their SROs are involved in school discipline, even in situations where no crime was committed.[vi]”</li>
                        </ul>
                      <li>We must also cut off ALL relations with ICE and deny them student and family information. Now two years ago, ICE was able to get a hold of student information through the BPD Student database system, ripping a child from their school, their community, and a place of “sanctuary” and learning.</li>
                    </ul>
                <li> <b> We need a citywide adult jobs program and an expansion of SuccessLink, the city’s youth jobs program.</b> Families in D4 are living paycheck to paycheck and there is no public peace when folks cannot feed their families, it is up to the local government to create a robust jobs program for both young people and adults. As a city councilor, I will advocate for a city budget that allocates more funding to SuccessLink so that we can hire more young people during the summer and the school year, as well as support creating an adult version of SuccessLink for those in need.</li> 
                    <ul class="sub-points">
                      <li>In 2014, Boston became the pilot city for a federal program, CVE (countering violent extremism)  and the Boston Police Department implemented a Youth and Police Initiative for Somali Youth. The program specifically targeted anti-terrorist programming on Somali youth who are "deemed a potential threat due to the social and economic trauma that they experience as immigrants and refugees." CVE These programs deterred civic participation in Muslim youth when in actuality we need to amplify their voices. I will prioritize funding social services for immigrant youth without ties to the police.</li>
                      <li>The Boston Police Department's Gang Database run by BRIC (Boston Regional Intelligence Center) collects, analyzes, and disseminates information about Boston residents to the federal government. BRIC is run without any accountability/oversight and gives the green light to law enforcement to surveillance, stop &amp; frisk, and deportation. BRIC disproportionately collects information on men of color. We must be intentional when we name intervention programs, as a city councilor, I will support ending the gang database.</li>
                      <li>We must support Violence Intervention Programs like Cure Violence that see violence as a public health issue and address it as such.</li>
                    </ul>
                <li> <b>We must divert funds away from the Boston Police Department and towards community resources.</b> Where the city decides to allocate money is indicative of its priorities. Year after year the city has chosen to prioritize policing over the preventative work of providing much-needed resources to communities. And year after year,  Boston’s Black, Brown, and low-income communities, such as District 4, are the most shortchanged of those resources. The City of Boston has prioritized funding to a system that not only harmed and killed our neighbors but also is incompetent in keeping our community safe enough to take casual walks. Our communities need resources to be sustainable. </li>
                  <ul class="sub-points">
                    <li> For the FY21 budget, BPD was given $414.2 Million in City funding including $60.8 Million in overtime. </li>
                      <ul class="sub-point2">
                       <li> According to the ACLU’s Data For Liberation, “Compared to the budgets of other Boston City departments (and cabinets), the Boston Police budget is:</li>
                        <ul>
                          <li>1.5x larger than the Cabinet of Administration and Finance (which constitutes 17 individual departments)</li>
                          <li>2.7x larger than the Cabinet of Health and Human Services (which constitutes 9 individual departments)</li>
                          <li>4x larger than the Public Health Commission</li>
                          <li>10x larger than the Library Department</li>
                          <li>15x larger than the Neighborhood Development Department</li>
                          <li>182x larger than the Office of Arts &amp; Culture”</li>
                        </ul>
                      </ul>
                    <li>As a city councilor, I would support a contract negotiation with the Boston Police Union that liberates detailing and traffic flagging jobs away from police and into community hands.</li>
                  </ul>
                <li><b>We must build a citywide Mental Health crisis response separate from the police, and a community training program to help Boston residents fill those jobs. </b></li>
                  <ul class="sub-points">
                    <li>I support  Councilor Michelle Wu, Lydia Edwards, and Julia Mejia’s Ordinance to establish an unarmed community safety crisis response system for nonviolent emergency calls. Instead of police responding to nonviolent calls for help, it would be trained, trauma-informed mental health professionals, social workers, and generally people with a skillset to help folks in a way that police cannot. </li>
                      <ul class="sub-points2">
                        <li>We also need a community training program to recruit and train members of the community to join this response system, relying on the community helping the community. 
</li>
                      </ul>
                      </ul>
              </ul>
          </div>
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
import NavBar from "../components/NavBar.vue";

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
      console.log("fuck", issue, "selected", this.selectedIssue);
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
  width: 500px; 
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
}
.container {
  text-align: left;
}
.major {
  text-align: center !important;
}
</style>






