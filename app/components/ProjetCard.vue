<template>
  <NuxtLink :to="`/projets/${projet.slug}`" class="card projet-card">
    <div class="projet-visuel">
      <img v-if="projet.image" :src="img(projet.image)" :alt="projet.titre">
      <span v-else>{{ initiales }}</span>
    </div>
    <div class="projet-meta">
      <span>{{ projet.type }}</span>
      <span :class="{ encours: projet.statut === 'En cours' }">{{ projet.statut }}</span>
    </div>
    <h3>{{ projet.titre }}</h3>
    <p>{{ projet.resume }}</p>
    <div class="tags">
      <span v-for="t in projet.technos" :key="t" class="tag">{{ t }}</span>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  projet: { type: Object, required: true }
})

const initiales = computed(() =>
  props.projet.sigle || props.projet.titre.split(' ').map(m => m[0]).join('').slice(0, 2).toUpperCase()
)
</script>

<style scoped>
.projet-card {
  padding: 0;
  overflow: hidden;
  display: flex !important;
  flex-direction: column;
}
.projet-card > *:not(.projet-visuel) { margin-left: 24px; margin-right: 24px; }
.projet-card .tags { margin-bottom: 24px; margin-top: auto; }

.projet-visuel {
  aspect-ratio: 16 / 9;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primaire), var(--accent));
  color: rgba(255, 255, 255, .9);
  font-family: var(--font-titre);
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  overflow: hidden;
}
.projet-visuel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s;
}
.projet-card:hover .projet-visuel img { transform: scale(1.04); }

.projet-meta {
  display: flex;
  justify-content: space-between;
  font-size: .8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--accent);
  margin-bottom: 6px;
}
.encours { color: #c27a12; }
</style>
