<template>
  <div id="app">
    <div id="nav" class="border-bottom">
      <router-link to="/">Home</router-link> |
      <router-link to="/detail">Detail</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

.text-xx {
  font-size: 26px;
}

.text-bold {
  font-weight: bold;
}

.text-small {
  font-size: 12px;
  color: rgba(0,0,0,.54);
}

.text-line {
  text-decoration-line: line-through;
}

.cursor-pointer {
  cursor: pointer;
}

.text-label {
  color: rgba(0,0,0,.54);
  font-size: 16px;
}
</style>
