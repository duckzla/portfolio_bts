<template>
  <div>
    <PageHero
      eyebrow="Documents"
      titre="Ressources"
      sous-titre="Les technologies que j'apprends et les modes opératoires que j'ai rédigés au fil de mon apprentissage."
    />

    <div class="container">
      <!-- Technologies -->
      <section class="card technos">
        <div>
          <span class="eyebrow">Technologies</span>
          <h2>Ce que j'apprends actuellement</h2>
        </div>
        <div class="technos-liste">
          <div v-for="t in technologies" :key="t.nom" class="techno">
            <span class="techno-logo" :style="{ background: t.couleur }">{{ t.abrev }}</span>
            {{ t.nom }}
          </div>
        </div>
      </section>

      <!-- Modes opératoires -->
      <section class="section">
        <div class="section-title">
          <div>
            <span class="eyebrow">Modes opératoires</span>
            <h2>Mes protocoles</h2>
          </div>
          <div class="filtres">
            <button
              v-for="c in categories"
              :key="c"
              class="filtre"
              :class="{ actif: categorie === c }"
              @click="categorie = c"
            >{{ c }}</button>
          </div>
        </div>

        <div class="grid">
          <a
            v-for="r in ressourcesFiltrees"
            :key="r.fichier"
            :href="pdf(r.fichier)"
            target="_blank"
            class="card ressource"
          >
            <div class="ressource-haut">
              <div class="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg>
              </div>
              <span class="tag">{{ r.categorie }}</span>
            </div>
            <h3>{{ r.titre }}</h3>
            <p>{{ r.description }}</p>
            <span class="lien-fleche">Ouvrir le PDF <span>↗</span></span>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Ressources — Léo Adam' })

const technologies = [
  { nom: 'HTML', abrev: 'H', couleur: '#e34f26' },
  { nom: 'CSS', abrev: 'C', couleur: '#1572b6' },
  { nom: 'JavaScript', abrev: 'JS', couleur: '#d4b106' },
  { nom: 'PHP', abrev: 'PHP', couleur: '#777bb4' },
  { nom: 'Nuxt', abrev: 'N', couleur: '#00dc82' }
]

// ✏️ les PDF sont dans app/assets/ressources — "fichier" = nom exact du fichier
const ressources = [
  {
    titre: 'Docker',
    fichier: 'Docker.pdf',
    categorie: 'Docker',
    description: 'Créer, lancer et gérer des conteneurs avec Docker Compose et la structure d\'un fichier docker-compose.yml. Mise en réseau entre conteneurs (application + base de données), variables d\'environnement, et exemples concrets avec PostgreSQL et la configuration des networks.'
  },
  {
    titre: 'PhpMyAdmin',
    fichier: 'PhpMyAdmin.pdf',
    categorie: 'Base de données',
    description: 'Créer et gérer une nouvelle base de données et attribuer des droits utilisateurs via PhpMyAdmin, notamment pour plusieurs instances WordPress. Configuration réseau Docker nécessaire et mise en garde sur la gestion des permissions.'
  },
  {
    titre: 'Protocole SSH',
    fichier: 'Protocole_SSH.pdf',
    categorie: 'Réseau',
    description: 'Guide pratique pour se connecter à distance à une machine via SSH : prérequis, étapes de connexion (commande, acceptation de la clé, authentification) et connexion à un container Docker via un port spécifique.'
  },
  {
    titre: 'Clé SSH, GitHub et container',
    fichier: 'ssh__github_et_container.pdf',
    categorie: 'Git',
    description: 'Générer une paire de clés SSH, l\'ajouter sur GitHub, configurer Git en local et un fichier config SSH, puis mettre en place un container Apache avec déploiement automatique depuis GitHub via Docker Compose.'
  },
  {
    titre: 'Git et repository',
    fichier: 'git_et_repository.pdf',
    categorie: 'Git',
    description: 'Lier un projet local à GitHub : les 5 étapes essentielles (init, add, commit, remote, push), le workflow quotidien, une branche develop pour séparer développement et production, et l\'utilisation d\'un token d\'accès personnel.'
  },
  {
    titre: 'Activer GitHub Pages',
    fichier: 'Activer_GitHub_Pages.pdf',
    categorie: 'Git',
    description: 'Mettre en ligne un site via GitHub Pages : activation dans les paramètres du dépôt, mises à jour automatiques à chaque git push, et gestion des branches develop (développement) et master (production).'
  },
  {
    titre: 'WordPress',
    fichier: 'wordpress.pdf',
    categorie: 'CMS',
    description: 'Introduction à WordPress : différence entre WordPress.com (hébergé) et WordPress.org (auto-hébergé), possibilités en frontend et backend, avantages et inconvénients de la plateforme.'
  },
  {
    titre: 'Installation d\'une VM et FreeIPA',
    fichier: 'Installation_dune_VM_et_config_de_FreeIPA.pdf',
    categorie: 'Système',
    description: 'Créer une VM sous VirtualBox, installer Rocky Linux en mode serveur, configurer le réseau (IP fixe, hostname, SSH), puis installer FreeIPA (firewall, DNS, Kerberos) pour un serveur d\'authentification centralisé.'
  }
]

const categories = ['Tous', ...new Set(ressources.map(r => r.categorie))]
const categorie = ref('Tous')
const ressourcesFiltrees = computed(() =>
  categorie.value === 'Tous' ? ressources : ressources.filter(r => r.categorie === categorie.value)
)
</script>

<style scoped>
.technos {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 32px;
  align-items: center;
  padding: 40px;
}
.technos h2 { margin: 0; }
.technos-liste {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
}
.techno {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  background: var(--surface-2);
  font-weight: 600;
  color: var(--primaire);
}
.techno-logo {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: #fff;
  font-family: var(--font-titre);
  font-size: .85rem;
}

.filtres { display: flex; flex-wrap: wrap; gap: 8px; }
.filtre {
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid var(--bordure);
  background: var(--surface);
  color: var(--texte-doux);
  font: inherit;
  font-size: .85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition_time);
}
.filtre:hover { border-color: var(--accent); color: var(--accent); }
.filtre.actif { background: var(--primaire); border-color: var(--primaire); color: #fff; }

.ressource {
  display: flex !important;
  flex-direction: column;
}
.ressource-haut {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.ressource h3 { margin-bottom: .4em; }
.ressource p { font-size: .95rem; }
.ressource .lien-fleche { margin-top: auto; }

@media (max-width: 860px) {
  .technos { grid-template-columns: 1fr; padding: 28px; }
}
</style>
