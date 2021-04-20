<template>
  <section id="container">
     <section style="" id="" class="">
        <div class="row">
          <div class="col-6 col-12-medium left-column" style="background-color: rgb(255,215,0);"></div>
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
    background-image: url(../assets/css/images/organizerInfo.png);  
    background-repeat: no-repeat;
    background-size: 90% 99%;
      background-position: 80px 5px;
}

.typeform-widget {
    height: 62rem !important;
}

#container {
    background-color: rgb(255,249,214);
}

</style>