<template>
  <header class="app-header" :class="{ scrolled }">
    <div class="container header-inner">
      <NuxtLink to="/" class="logo" @click="menuOuvert = false">
        <span class="logo-badge">L</span>
        <span>Léo Adam<span class="logo-point">.</span></span>
      </NuxtLink>

      <button
        class="burger"
        :class="{ open: menuOuvert }"
        @click="menuOuvert = !menuOuvert"
        :aria-expanded="menuOuvert"
        aria-label="Ouvrir le menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav" :class="{ open: menuOuvert }">
        <NuxtLink to="/" class="nav-link" @click="menuOuvert = false">Accueil</NuxtLink>
        <NuxtLink to="/cv" class="nav-link" @click="menuOuvert = false">CV</NuxtLink>
        <NuxtLink to="/ressources" class="nav-link" @click="menuOuvert = false">Ressources</NuxtLink>
        <NuxtLink to="/projets" class="nav-link" @click="menuOuvert = false">Projets</NuxtLink>
        <NuxtLink to="/veille-technologique" class="nav-link" @click="menuOuvert = false">Veille technologique</NuxtLink>
        <NuxtLink to="/contact" class="nav-link nav-cta" @click="menuOuvert = false">Me contacter</NuxtLink>

        <div class="socials">
          <a href="https://github.com/duckzla" target="_blank" rel="noopener" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56
                0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7
                1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7
                0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49
                3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78
                2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/léo-adam" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05
                c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Z
                M7.12 20.45H3.56V9h3.56v11.45Z"/>
            </svg>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
const menuOuvert = ref(false)
const scrolled = ref(false)

const onScroll = () => { scrolled.value = window.scrollY > 10 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--fond-site) 80%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition_time), box-shadow var(--transition_time);
}
.app-header.scrolled {
  border-bottom-color: var(--bordure);
  box-shadow: 0 4px 20px rgba(20, 23, 28, .05);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-titre);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primaire);
  text-decoration: none;
}
.logo-badge {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  background: var(--primaire);
  color: #fff;
  font-size: 1rem;
}
.logo-point { color: var(--accent); }

.nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-link {
  position: relative;
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--texte-doux);
  text-decoration: none;
  font-size: .93rem;
  font-weight: 500;
  transition: color var(--transition_time), background var(--transition_time);
}
.nav-link:hover { color: var(--primaire); background: var(--surface-2); }
.nav-link.router-link-active {
  color: var(--accent);
}

.nav-cta {
  margin-left: 8px;
  background: var(--primaire);
  color: #fff !important;
  padding: 8px 16px;
  border-radius: 999px;
}
.nav-cta:hover { background: var(--accent); }

.socials {
  display: flex;
  gap: 4px;
  margin-left: 12px;
  padding-left: 12px;
  border-left: 1px solid var(--bordure);
}
.socials a {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: var(--texte-doux);
  transition: color var(--transition_time), background var(--transition_time);
}
.socials a:hover { color: var(--accent); background: var(--surface-2); }

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 26px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.burger span {
  display: block;
  height: 2px;
  width: 100%;
  border-radius: 2px;
  background: var(--primaire);
  transition: transform .25s, opacity .25s;
}
.burger.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

@media (max-width: 960px) {
  .burger { display: flex; }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 16px 24px 24px;
    background: var(--surface);
    border-bottom: 1px solid var(--bordure);
    box-shadow: 0 16px 30px rgba(20, 23, 28, .08);
    opacity: 0;
    transform: translateY(-8px);
    pointer-events: none;
    transition: opacity .2s, transform .2s;
  }
  .nav.open {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }
  .nav-link { padding: 12px; }
  .nav-cta { margin: 8px 0 0; text-align: center; }
  .socials {
    margin: 12px 0 0;
    padding: 12px 0 0;
    border-left: none;
    border-top: 1px solid var(--bordure);
  }
}
</style>
