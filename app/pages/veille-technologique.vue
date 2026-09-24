<template>
  <div>
    <PageHero
      eyebrow="Veille"
      titre="Veille technologique"
      sous-titre="Comment je reste à jour : les grands thèmes que je suis, ma veille spécifique sur VS Code, mes sources et mes outils."
    />

    <div class="container">
      <!-- ===== Grands thèmes ===== -->
      <section>
        <div class="section-title">
          <div>
            <span class="eyebrow">Les grands thèmes</span>
            <h2>Ce que je surveille</h2>
          </div>
        </div>
        <div class="grid">
          <div v-for="(t, i) in themes" :key="t.titre" class="card theme">
            <span class="numero">0{{ i + 1 }}</span>
            <h3>{{ t.titre }}</h3>
            <p>{{ t.texte }}</p>
          </div>
        </div>
      </section>

      <!-- ===== VS Code ===== -->
      <section class="section">
        <div class="card vscode">
          <div class="vscode-intro">
            <div class="vscode-logo" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M23.15 2.59 18.21.21a1.49 1.49 0 0 0-1.7.29L7.04 9.13 2.92 6a1 1 0 0 0-1.28.06L.32 7.26a1 1 0 0 0 0 1.48L3.9 12 .32 15.26a1 1 0 0 0 0 1.48l1.32 1.2a1 1 0 0 0 1.28.06l4.12-3.13 9.47 8.63a1.49 1.49 0 0 0 1.7.29l4.94-2.38A1.5 1.5 0 0 0 24 20.06V3.94a1.5 1.5 0 0 0-.85-1.35ZM18 17.45 10.82 12 18 6.55Z"/></svg>
            </div>
            <div>
              <span class="eyebrow">Ma veille spécifique</span>
              <h2>Visual Studio Code</h2>
              <p>
                Visual Studio Code est un éditeur de code source léger, gratuit et open-source développé par
                Microsoft. Lancé en 2015, il est aujourd'hui l'éditeur n°1 mondial (Stack Overflow Dev Survey
                2024 : 73 % des développeurs).
              </p>
            </div>
          </div>

          <div class="stats">
            <div v-for="s in stats" :key="s.valeur" class="stat">
              <strong>{{ s.valeur }}</strong>
              <span>{{ s.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Extensions + Git -->
      <section class="section">
        <div class="section-title">
          <div>
            <span class="eyebrow">VS Code</span>
            <h2>Les extensions incontournables</h2>
          </div>
        </div>
        <div class="extensions">
          <div v-for="e in extensions" :key="e.nom" class="card extension">
            <h3>{{ e.nom }}</h3>
            <p>{{ e.texte }}</p>
          </div>
          <div class="card extension git">
            <h3>Intégration Git</h3>
            <ul>
              <li v-for="g in integrationGit" :key="g">{{ g }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ===== Nouveautés ===== -->
      <section class="section">
        <div class="section-title">
          <div>
            <span class="eyebrow">Actualité</span>
            <h2>Nouveautés 2025 – 2026</h2>
          </div>
        </div>
        <ol class="timeline">
          <li v-for="n in nouveautes" :key="n.titre">
            <time>{{ n.date }}</time>
            <div class="card">
              <h3>{{ n.titre }}</h3>
              <p>{{ n.texte }}</p>
            </div>
          </li>
        </ol>
      </section>

      <!-- ===== Sources ===== -->
      <section class="section">
        <div class="section-title">
          <div>
            <span class="eyebrow">Mes sources</span>
            <h2>Où je m'informe</h2>
          </div>
        </div>
        <div class="sources">
          <div v-for="groupe in sources" :key="groupe.titre" class="card">
            <h3>{{ groupe.titre }}</h3>
            <a v-for="s in groupe.liens" :key="s.nom" :href="s.url" target="_blank" rel="noopener" class="source">
              <span class="source-nom">{{ s.nom }} <span class="fleche">↗</span></span>
              <span v-if="s.texte" class="source-texte">{{ s.texte }}</span>
            </a>
          </div>
        </div>
      </section>

      <!-- ===== Outils ===== -->
      <section class="section">
        <div class="section-title">
          <div>
            <span class="eyebrow">Mes outils</span>
            <h2>Ma veille générale</h2>
          </div>
        </div>
        <div class="grid">
          <div v-for="o in outils" :key="o.nom" class="card">
            <h3>{{ o.nom }}</h3>
            <p v-for="(para, i) in o.texte" :key="i">{{ para }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Veille technologique — Léo Adam' })

const themes = [
  {
    titre: 'Les actualités du monde de la tech',
    texte: 'Que ce soit une innovation technologique en hardware ou les dernières nouvelles du hack d\'une entreprise, je me tiens informé sur l\'ensemble de l\'environnement pour ne pas louper une information qui pourrait être cruciale, ou simplement m\'intéresser !'
  },
  {
    titre: 'Les nouveaux outils du développement web',
    texte: 'Je suis les évolutions des technologies utilisées dans les projets modernes. Cette veille me permet de découvrir de nouvelles méthodes de développement, d\'améliorer ma façon de travailler et de mieux comprendre les pratiques du milieu professionnel.'
  },
  {
    titre: 'Les nouveautés de mes langages et outils',
    texte: 'Je reste à jour sur l\'évolution des langages et outils que j\'utilise : nouvelles fonctionnalités, améliorations, bonnes pratiques et changements importants qui m\'aident à progresser et à développer des projets plus modernes et plus efficaces.'
  }
]

const stats = [
  { valeur: '73 %', label: 'des devs l\'utilisent' },
  { valeur: '100 k+', label: 'extensions disponibles' },
  { valeur: 'Multi-langage', label: 'JS, Python, PHP…' },
  { valeur: 'Gratuit', label: '& open-source !' }
]

const extensions = [
  { nom: 'Prettier', texte: 'Formatage automatique du code selon des règles configurables (JSON, JS, HTML, CSS…).' },
  { nom: 'ESLint', texte: 'Détection des erreurs et mauvaises pratiques JavaScript/TypeScript en temps réel.' },
  { nom: 'GitLens', texte: 'Annotations Git avancées, historique par ligne, blame, comparaison de branches.' },
  { nom: 'Live Server', texte: 'Serveur local avec rechargement automatique du navigateur — parfait pour HTML/CSS.' },
  { nom: 'Docker', texte: 'Gérer ses conteneurs, images et compose directement depuis VS Code.' },
  { nom: 'PHP Intelephense', texte: 'IntelliSense avancé pour PHP : complétion, diagnostics, navigation dans le code.' }
]

const integrationGit = [
  'Voir les fichiers modifiés / staged / untracked',
  'Commit, push, pull sans quitter l\'éditeur',
  'Visualiser les diffs ligne par ligne',
  'Gérer les branches et les merges',
  'Résoudre les conflits avec un éditeur visuel'
]

const nouveautes = [
  { date: '2025.01', titre: 'Agent mode Copilot', texte: 'Copilot peut agir de façon autonome : créer des fichiers, lancer des commandes.' },
  { date: '2025.03', titre: 'MCP intégré (preview)', texte: 'Model Context Protocol : brancher des outils externes à Copilot (APIs, bases de données).' },
  { date: '2026.03', titre: 'Autopilot Mode', texte: 'L\'agent peut modifier plusieurs fichiers, lancer des commandes terminal, corriger des erreurs et exécuter des workflows presque seul.' },
  { date: '2026.04', titre: 'Agent Terminal Control', texte: 'Les agents peuvent utiliser le terminal directement pour lancer builds, tests, Docker, scripts npm et workflows backend/frontend.' },
  { date: '2026.04', titre: 'Copilot Built-In', texte: 'GitHub Copilot est désormais intégré nativement dans VS Code sans installation d\'extension.' },
  { date: '2026.04', titre: 'Agent Debug Logs', texte: 'Historique complet des actions IA pour comprendre, auditer et déboguer les modifications automatiques du code.' }
]

const sources = [
  {
    titre: 'Sources officielles',
    liens: [
      { nom: 'VS Code Release Notes', url: 'https://code.visualstudio.com/updates', texte: 'La source principale. Chaque version détaille nouveautés, IA agents, terminal, debug, extensions, API, etc.' },
      { nom: 'VS Code Blog', url: 'https://devblogs.microsoft.com/vscode-blog', texte: 'Articles plus approfondis que les release notes, notamment sur Copilot et les agents IA.' },
      { nom: 'GitHub Copilot Changelog (VS Code)', url: 'https://cocalc.com/github/microsoft/vscode/blob/main/extensions/copilot/CHANGELOG.md', texte: 'Très utile pour suivre les évolutions IA semaine par semaine : MCP, agents, terminal control, debug logs, etc.' }
    ]
  },
  {
    titre: 'Autres sources',
    liens: [
      { nom: 'La chaîne YouTube officielle de VS Code', url: 'https://www.youtube.com/@code' },
      { nom: 'La chaîne YouTube de faizdev', url: 'https://www.youtube.com/@faizdev', texte: 'YouTuber qui propose de nombreux tutoriels, notamment sur VS Code.' },
      { nom: 'Site dédié à VS Code', url: 'https://visualstudiomagazine.com/pages/topic-pages/visual-studio-tutorials.aspx' },
      { nom: 'Discussion Reddit dédiée à VS Code', url: 'https://www.reddit.com/r/vscode/' }
    ]
  }
]

const outils = [
  {
    nom: 'Feedly',
    texte: ['J\'utilise Feedly pour avoir une vision globale du monde de la tech. Cet outil me permet de suivre facilement les actualités importantes : nouvelles technologies, failles de sécurité, hacks, évolutions du développement web et grandes tendances du secteur informatique.']
  },
  {
    nom: 'L\'extension daily.dev',
    texte: ['J\'utilise daily.dev pour une veille plus spécialisée dans le développement web. La plateforme regroupe articles, tutoriels, actualités et discussions autour de JavaScript, React, CSS ou Node.js, et me propose un flux personnalisé selon les sujets qui m\'intéressent.']
  },
  {
    nom: 'Contenu vidéo et réseaux sociaux',
    texte: [
      'YouTube regorge de chaînes de qualité pour apprendre en profondeur. Je complète aussi avec les replays de conférences tech.',
      'Les communautés sont une source d\'information en temps réel : j\'y puise des retours terrain, des débats et des projets inspirants.'
    ]
  }
]
</script>

<style scoped>
.section { padding-bottom: 0; }

.theme { position: relative; }
.numero {
  font-family: var(--font-titre);
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--accent-clair);
  -webkit-text-stroke: 1px var(--accent);
  line-height: 1;
  display: block;
  margin-bottom: 16px;
}
.theme p { margin: 0; }

/* VS Code */
.vscode {
  padding: 40px;
  background:
    radial-gradient(circle at 100% 0%, rgba(0, 122, 204, .12), transparent 45%),
    var(--surface);
}
.vscode-intro {
  display: flex;
  gap: 28px;
  align-items: flex-start;
}
.vscode-intro p { max-width: 720px; margin: 0; }
.vscode-logo {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: grid;
  place-items: center;
  border-radius: 20px;
  background: #007acc;
  color: #fff;
  box-shadow: 0 12px 30px rgba(0, 122, 204, .3);
}
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 32px;
}
.stat {
  padding: 20px;
  border-radius: 12px;
  background: var(--fond-site);
  border: 1px solid var(--bordure);
}
.stat strong {
  display: block;
  font-family: var(--font-titre);
  font-size: 1.6rem;
  color: var(--primaire);
  line-height: 1.2;
}
.stat span { font-size: .9rem; color: var(--texte-doux); }

.extensions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--grid-gap);
}
.extension p { margin: 0; }
.extension h3 { color: #007acc; }
.git {
  grid-column: 1 / -1;
  background: var(--primaire);
  border-color: var(--primaire);
}
.git h3 { color: #fff; }
.git ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 10px 24px;
}
.git li { color: rgba(255, 255, 255, .8); padding-left: 24px; position: relative; }
.git li::before { content: '✓'; position: absolute; left: 0; color: #6fd1b8; font-weight: 700; }

/* Timeline */
.timeline {
  list-style: none;
  margin: 0;
  padding: 0 0 0 28px;
  border-left: 2px solid var(--bordure);
  display: grid;
  gap: 20px;
}
.timeline li { position: relative; }
.timeline li::before {
  content: '';
  position: absolute;
  left: -36px;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--surface);
  border: 3px solid var(--accent);
}
.timeline time {
  display: block;
  font-family: var(--font-titre);
  font-size: .9rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 8px;
}
.timeline .card { padding: 20px 24px; }
.timeline .card h3 { margin-bottom: .3em; }
.timeline .card p { margin: 0; }

/* Sources */
.sources {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--grid-gap);
  align-items: start;
}
.source {
  display: block;
  padding: 14px 0;
  border-top: 1px solid var(--bordure);
  text-decoration: none;
}
.source-nom { font-weight: 600; color: var(--primaire); transition: color var(--transition_time); }
.source:hover .source-nom { color: var(--accent); }
.fleche { color: var(--accent); }
.source-texte { display: block; font-size: .92rem; color: var(--texte-doux); margin-top: 2px; }

.grid .card p:last-child { margin-bottom: 0; }

@media (max-width: 860px) {
  .vscode { padding: 28px; }
  .vscode-intro { flex-direction: column; }
  .stats { grid-template-columns: 1fr 1fr; }
  .extensions, .sources { grid-template-columns: 1fr; }
}
</style>
