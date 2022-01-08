<template>
  <div id="app">
    <nav class="light-blue lighten-1" role="navigation">
        <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><router-link to="/">Memorize</router-link></a>
            <ul class="right hide-on-med-and-down">
                <li><a href="#">Navbar Link</a></li>
            </ul>
    
            <ul id="nav-mobile" class="sidenav">
                <li><a href="#">Navbar Link</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
    </nav>

    <div id="main page">
      <router-view/>
    </div>
  </div>
</template>

<script src="materialize-css/dist/js/materialize.js"></script>
<style src="materialize-css/dist/css/materialize.css"></style>
