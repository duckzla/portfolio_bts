<!-- En-tête réutilisable en haut de chaque page -->
<template>
  <section class="page-hero">
    <div class="container">
      <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
      <h1>{{ titre }}</h1>
      <p v-if="sousTitre" class="sous-titre">{{ sousTitre }}</p>
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: String,
  titre: { type: String, required: true },
  sousTitre: String
})
</script>

<style scoped>
.page-hero {
  padding: 72px 0 48px;
  background:
    radial-gradient(circle at 85% 0%, var(--accent-clair), transparent 45%),
    linear-gradient(to bottom, var(--surface), var(--fond-site));
  border-bottom: 1px solid var(--bordure);
  margin-bottom: 56px;
}
.sous-titre {
  font-size: 1.15rem;
  max-width: 640px;
  margin: 0;
}
</style>
