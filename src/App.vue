<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header>
    <nav>
      <div class="nav-inner">
        <span class="nav-logo">JiSeung</span>

        <button class="hamburger" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="메뉴 열기">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="nav-links" :class="{ open: menuOpen }">
          <a href="#about" @click="closeMenu">About</a>
          <a href="#skills" @click="closeMenu">Skills</a>
          <a href="#projects" @click="closeMenu">Projects</a>
          <a href="#education" @click="closeMenu">Education</a>
          <a href="#contact" @click="closeMenu">Contact</a>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />

  <footer>
    <p>&copy; {{ new Date().getFullYear() }} Kang Ji-seung. All rights reserved.</p>
  </footer>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  z-index: 50;
}

nav {
  width: 100%;
  padding: 15px 0;
}

.nav-inner {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.nav-logo {
  display: none;
  font-weight: bold;
  font-size: 1.1rem;
  color: #007bff;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  font-weight: bold;
  color: var(--color-heading);
  text-decoration: none;
  font-size: 15px;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #007bff;
}

/* 햄버거 버튼 */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin: 0;
  z-index: 60;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--color-heading);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* 모바일 */
@media (max-width: 768px) {
  .nav-inner {
    justify-content: space-between;
  }

  .nav-logo {
    display: block;
  }

  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 200px;
    height: 100vh;
    background-color: var(--color-background);
    border-left: 1px solid var(--color-border);
    flex-direction: column;
    padding: 70px 30px 30px;
    gap: 0;
    transition: right 0.3s ease;
    box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 55;
  }

  .nav-links.open {
    right: 0;
  }

  .nav-links a {
    font-size: 1rem;
    padding: 15px 0;
    border-bottom: 1px solid var(--color-border);
  }
}

/* footer */
footer {
  background-color: var(--color-background-soft);
  padding: 30px 0;
  text-align: center;
  border-top: 1px solid var(--color-border);
  margin-top: 50px;
  font-size: 12px;
  color: #666;
}

footer p {
  margin: 5px 0;
}
</style>