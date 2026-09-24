<template>
  <div v-if="projet">
    <PageHero :eyebrow="`${projet.type} · ${projet.statut}`" :titre="projet.titre" :sous-titre="projet.resume">
      <div class="tags hero-tags">
        <span v-for="t in projet.technos" :key="t" class="tag">{{ t }}</span>
      </div>
    </PageHero>

    <div class="container detail">
      <article class="card contenu">
        <img v-if="projet.image" :src="img(projet.image)" :alt="projet.titre" class="image">

        <h2>Présentation</h2>
        <p v-for="(para, i) in projet.description" :key="i">{{ para }}</p>

        <p v-if="projet.statut === 'En cours'" class="en-cours">🚧 Projet en cours de réalisation</p>
      </article>

      <aside class="card infos">
        <h3>Infos</h3>
        <dl>
          <dt>Type</dt><dd>{{ projet.type }}</dd>
          <dt>Statut</dt><dd>{{ projet.statut }}</dd>
          <dt>Technologies</dt><dd>{{ projet.technos.join(', ') }}</dd>
        </dl>
        <div class="actions">
          <a v-if="projet.pdf" :href="pdf(projet.pdf)" target="_blank" class="btn btn-primary">
            Voir le document (PDF)
          </a>
          <a v-if="projet.github" :href="projet.github" target="_blank" rel="noopener" class="btn btn-ghost">
            Voir sur GitHub
          </a>
        </div>
      </aside>
    </div>

    <div class="container retour">
      <NuxtLink to="/projets" class="lien-fleche">← Retour aux projets</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import projets from '~~/data/projets.json'

const route = useRoute()
const projet = projets.find(p => p.slug === route.params.projet)

if (!projet) {
  throw createError({ statusCode: 404, statusMessage: 'Projet introuvable', fatal: true })
}

useHead({ title: `${projet.titre} — Léo Adam` })
</script>

<style scoped>
.hero-tags { margin-top: 20px; }
.hero-tags .tag { background: var(--surface); border: 1px solid var(--bordure); }

.detail {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: var(--grid-gap);
  align-items: start;
}
.contenu { padding: 40px; }
.contenu p { font-size: 1.05rem; }
.image { border-radius: 10px; margin-bottom: 32px; }

.en-cours {
  display: inline-block;
  margin: 8px 0 0;
  padding: 8px 16px;
  border-radius: 999px;
  background: #fdf1de;
  color: #9a5b00;
  font-weight: 600;
  font-size: .95rem !important;
}

.infos { position: sticky; top: 96px; }
dl { margin: 0 0 24px; }
dt {
  font-size: .78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--texte-doux);
}
dd { margin: 2px 0 16px; font-weight: 500; }
.actions { display: grid; gap: 10px; }
.actions .btn { justify-content: center; }

.retour { margin-top: 40px; }

@media (max-width: 860px) {
  .detail { grid-template-columns: 1fr; }
  .infos { position: static; }
  .contenu { padding: 28px; }
}
</style>
