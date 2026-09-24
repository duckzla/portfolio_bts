<template>
  <div>
    <PageHero
      eyebrow="Réalisations"
      titre="Mes projets"
      sous-titre="Les projets que je réalise ou que j'ai réalisés au cours de mon BTS SIO."
    />

    <div class="container">
      <div class="filtres">
        <button
          v-for="f in filtres"
          :key="f"
          class="filtre"
          :class="{ actif: filtre === f }"
          @click="filtre = f"
        >{{ f }}</button>
      </div>

      <div v-if="projetsFiltres.length" class="grid">
        <ProjetCard v-for="p in projetsFiltres" :key="p.slug" :projet="p" />
      </div>
      <div v-else class="placeholder">Aucun projet pour le moment.</div>
    </div>
  </div>
</template>

<script setup>
import projets from '~~/data/projets.json'

useHead({ title: 'Projets — Léo Adam' })

// les filtres sont générés à partir du champ "type" de data/projets.json
const filtres = ['Tous', ...new Set(projets.map(p => p.type))]
const filtre = ref('Tous')

const projetsFiltres = computed(() =>
  filtre.value === 'Tous' ? projets : projets.filter(p => p.type === filtre.value)
)
</script>

<style scoped>
.filtres {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}
.filtre {
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid var(--bordure);
  background: var(--surface);
  color: var(--texte-doux);
  font: inherit;
  font-size: .9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition_time);
}
.filtre:hover { border-color: var(--accent); color: var(--accent); }
.filtre.actif { background: var(--primaire); border-color: var(--primaire); color: #fff; }
</style>
