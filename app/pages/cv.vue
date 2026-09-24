<template>
  <div>
    <PageHero eyebrow="Curriculum vitæ" titre="Mon CV" sous-titre="Mon parcours, mes formations et mes compétences en un coup d'œil.">
      <div class="hero-actions">
        <a :href="cvUrl" target="_blank" class="btn btn-primary">Ouvrir mon CV (PDF)</a>
        <a :href="cvUrl" download="CV_Leo_Adam.pdf" class="btn btn-ghost">Télécharger</a>
      </div>
    </PageHero>

    <div class="container">
      <div class="apercu">
        <iframe :src="`${cvUrl}#view=FitH`" title="CV de Léo Adam"></iframe>
      </div>
      <p class="mobile-info">
        L'aperçu n'est pas disponible sur mobile :
        <a :href="cvUrl" target="_blank">ouvrir le CV</a>.
      </p>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'CV — Léo Adam' })

// le CV est dans app/assets/ressources : remplace ce fichier pour le mettre à jour
const cvUrl = pdf('CV_Leo_Adam.pdf')
</script>

<style scoped>
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }

.apercu {
  max-width: 900px;
  margin: 0 auto;
  border-radius: var(--rayon);
  overflow: hidden;
  border: 1px solid var(--bordure);
  box-shadow: var(--ombre-hover);
  background: var(--surface);
}
iframe {
  display: block;
  width: 100%;
  height: 85vh;
  min-height: 600px;
  border: 0;
}

.mobile-info { display: none; text-align: center; }

@media (max-width: 700px) {
  .apercu { display: none; }
  .mobile-info { display: block; }
}
</style>
