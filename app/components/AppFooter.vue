<template>
  <footer class="app-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <NuxtLink to="/" class="logo">Léo Adam<span>.</span></NuxtLink>
        <p>Étudiant en BTS SIO option SLAM à MyDigitalSchool Caen, à la recherche d'une alternance.</p>
      </div>

      <nav class="footer-nav">
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/cv">CV</NuxtLink>
        <NuxtLink to="/ressources">Ressources</NuxtLink>
        <NuxtLink to="/projets">Projets</NuxtLink>
        <NuxtLink to="/veille-technologique">Veille technologique</NuxtLink>
        <NuxtLink to="/contact">Me contacter</NuxtLink>
      </nav>
    </div>

    <div class="container footer-bottom">
      <span>© {{ annee }} Léo Adam — Tous droits réservés</span>
      <span>
        <a href="https://github.com/duckzla" target="_blank" rel="noopener">GitHub</a>
        ·
        <a href="https://www.linkedin.com/in/léo-adam" target="_blank" rel="noopener">LinkedIn</a>
      </span>
    </div>
  </footer>
</template>

<script setup>
const annee = new Date().getFullYear()
</script>

<style scoped>
.app-footer {
  margin-top: 96px;
  background: var(--primaire);
  color: rgba(255, 255, 255, .7);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  padding-top: 56px;
  padding-bottom: 40px;
}

.logo {
  font-family: var(--font-titre);
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
}
.logo span { color: #6fd1b8; }

.footer-brand p {
  margin: 8px 0 0;
  max-width: 320px;
  color: rgba(255, 255, 255, .65);
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 10px 40px;
  align-content: start;
}

a {
  color: rgba(255, 255, 255, .75);
  text-decoration: none;
  transition: color var(--transition_time);
}
a:hover { color: #fff; }

.footer-bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 20px;
  padding-bottom: 24px;
  border-top: 1px solid rgba(255, 255, 255, .12);
  font-size: .85rem;
}
</style>
