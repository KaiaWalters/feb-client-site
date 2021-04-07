<template>
  <section id="container">
     <section style="" id="" class="">
        <div class="row">
          <div class="col-6 col-12-medium left-column">
            <h2 class="m13">
                
            </h2>
          </div>
            <div class="col-6 col-12-medium">
            <div class="typeform-widget" scrolling="no" data-url="https://form.typeform.com/to/CQKQv6MG?typeform-medium=embed-snippet" style="width: 100%; height: 300px;"></div> 
          </div>
    
        </div>
        
      </section>
  </section>
</template>>

<script>
export default {
  name: "CampaignSignUp",
   metaInfo: {
    meta: [
      { 'HTTP-EQUIV': 'refresh', content: '0' }
    ]
  },
  methods: {
    onCreate: function() {
       console.log("update")
    }
  }
};
</script>

<style scoped>

.left-column {
    background-image: url(../assets/css/images/sunset.jpg);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.typeform-widget {
    height: 62rem !important;
}

#container {
    background-color: rgb(255,249,214);
}

</style>