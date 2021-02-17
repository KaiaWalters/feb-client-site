<template>
  <div id="navigation-mobile">
    <i @click="toggleNavMenu()" class="fas fa-bars"></i>
    <h1 v-if="isActive">NIKKIA JEAN-CHARLES</h1>
    <ul v-bind:class="[isActive ? 'hideMenu' : 'showMenu']">
      <router-link :to="{name:'Home'}">MEET NIKKIA</router-link>
      <router-link :to="{name:'Issues'}">ISSUES</router-link>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbAr151anh7MYOuYqnFH14b3n9S1H7NpVzTN-EMiLKjrJcGQ/viewform?usp=pp_url">JOIN US</a>
      <a class="highlight" href="#">DONATE</a>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavMobile", 
  data: () => {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNavMenu: function(){
      this.isActive = !this.isActive;
    }
  },
};
</script>

<style lang="css" scoped>

  .hideMenu {
    display:none; 
  }
  h1 {
      text-align: center;
      width: 100%;
      color: #ea8700; 
      font-weight: bold;
      margin: 0px;
  }

  i {
    font-size: 30px;
    color: #8b0c0e;
  }

  #navigation-mobile {
      background-color: #f6efd8 !important;
      padding: 30px !important;
      display: flex;
  }

  .showMenu {
      display: flex;
      align-self: center;
      justify-self: center;
      align-items: center;
      flex-direction: column;
      color: #ea8700; 
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 25px;
      cursor: pointer;
      width:86%;
    }
    
    ul a {
      color: #ea8700; 
      margin-bottom: 25px;
    }

  #navigation-mobile ul {
    list-style: none;
    padding:0px;
    padding-top:30px;
    margin: 0px;
  }

  #navigation-mobile {
    padding: 20px 0 0 0;
  }

  #navigation-mobile .highlight {
    background-color: #8b0c0e;
    color: white;
    padding: 20px 70px 20px 70px;
    border-bottom: none;
  }
</style>

