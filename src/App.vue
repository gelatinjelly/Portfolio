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
</style>