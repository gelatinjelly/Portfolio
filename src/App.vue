<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <RouterView />

  <footer>
    <p>© 2025. Kang Ji-seung. All rights reserved.</p>

    <p class="attribution">
      Icons created by
      <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Smashicons - Flaticon</a><br>
      <a href="https://www.flaticon.com/free-icons/python" title="python icons">Python icons created by Freepik - Flaticon</a><br>
      <a href="https://www.flaticon.com/free-icons/data-source" title="data source icons">Data source icons created by Vectorslab - Flaticon</a><br>
      <a href="https://www.flaticon.com/free-icons/android" title="android icons">Android icons created by Pixel perfect - Flaticon</a>
    </p>
  </footer>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-background);
  padding: 15px 0;
  z-index: 50;
}

nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
}

nav a {
  font-weight: bold;
  color: var(--color-heading);
  text-decoration: none;
  font-size: 16px;
}

nav a:hover {
  color: #007bff;
}

footer {
  background-color: var(--color-background-soft);
  padding: 30px 0;
  text-align: center;
  border-top: 1px solid var(--color-border);
  margin-top: 50px;
  font-size: 12px;
  color: #666;
}

footer p { margin: 5px 0; }

footer a {
  color: #666;
  text-decoration: none;
}

footer a:hover { text-decoration: underline; }
</style>