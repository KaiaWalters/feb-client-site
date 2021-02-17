<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style>
@font-face {
  font-family: "Hebrew Sans Bold";
  src:
  url("/./../../OpenSansHebrewCondensed-Bold.ttf") format(".tff"),
  url("/./../../OpenSansHebrewCondensed-BoldItalic.ttf") format(".tff"),
  url("/./../../OpenSansHebrewCondensed-Regular.ttf") format(".ttf");
}

#app {
  font-family: "Hebrew Sans Bold";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
