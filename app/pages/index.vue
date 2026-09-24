<template>
  <div>
    <!-- ===== Hero ===== -->
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-texte">
          <span class="eyebrow">BTS SIO · Option SLAM · MyDigitalSchool Caen</span>
          <h1>Bonjour, je suis <span class="accent">Léo Adam</span>.</h1>
          <p class="hero-intro">
            Ancien scientifique en reconversion vers le développement informatique,
            je recherche une <strong>alternance</strong> pour consolider mes compétences
            et participer à des projets innovants au sein d'une équipe dynamique.
          </p>
          <div class="hero-actions">
            <NuxtLink to="/projets" class="btn btn-primary">Voir mes projets <span>→</span></NuxtLink>
            <NuxtLink to="/cv" class="btn btn-ghost">Voir mon CV</NuxtLink>
          </div>
        </div>

        <div class="hero-photo">
          <img :src="img('moi-1.png')" alt="Portrait de Léo Adam">
          <div class="badge-alternance">
            <span class="point"></span>
            Disponible en alternance
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Parcours ===== -->
    <section class="section">
      <div class="container duo">
        <div class="card texte-bloc">
          <img :src="img('moi-8.jpg')" alt="Léo et son équipe en salle d'expérimentation" class="bloc-img">
          <span class="eyebrow">Mon parcours</span>
          <h2>De la science au code</h2>
          <p>
            Je m'appelle Léo Adam et je suis actuellement en BTS SIO option SLAM à MyDigitalSchool Caen.
            Après une première carrière dans le domaine scientifique, j'ai choisi de me reconvertir vers
            le développement informatique afin de mettre à profit mon sens de l'analyse et mon goût pour
            la création de solutions concrètes.
          </p>
          <p>
            Je recherche une alternance pour consolider mes compétences techniques et participer activement
            à des projets innovants au sein d'une équipe dynamique.
          </p>
        </div>

        <div class="card texte-bloc">
          <span class="eyebrow">Mes expériences</span>
          <h2>Rigueur &amp; analyse</h2>
          <p>
            Mon parcours s'est construit autour de l'analyse, de la rigueur et de la résolution de problèmes
            complexes. Habitué à travailler sur des données expérimentales, à structurer des protocoles et à
            garantir la fiabilité des résultats, j'ai développé une approche méthodique et logique qui guide
            aujourd'hui mon travail.
          </p>
          <p>
            De la biologie moléculaire à la recherche appliquée, chaque expérience a renforcé ma capacité à
            comprendre des systèmes, optimiser des processus et m'adapter rapidement à de nouveaux
            environnements techniques.
          </p>
        </div>
      </div>
    </section>

    <!-- ===== Compétences ===== -->
    <section class="section">
      <div class="container">
        <div class="card competences">
          <div>
            <span class="eyebrow">Compétences</span>
            <h2>Ma boîte à outils</h2>
            <p>Les langages et outils que j'apprends et utilise actuellement.</p>
          </div>
          <div class="tags">
            <span v-for="c in competences" :key="c" class="tag">{{ c }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Sections du portfolio ===== -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <div>
            <span class="eyebrow">Explorer</span>
            <h2>Le portfolio en un coup d'œil</h2>
          </div>
        </div>

        <div class="grid">
          <NuxtLink v-for="item in sections" :key="item.to" :to="item.to" class="card">
            <div class="card-icon" v-html="item.icone"></div>
            <h3>{{ item.titre }}</h3>
            <p>{{ item.texte }}</p>
            <span class="lien-fleche">Découvrir <span>→</span></span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===== Galerie ===== -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <div>
            <span class="eyebrow">En dehors du code</span>
            <h2>Je suis prêt pour une nouvelle aventure !</h2>
          </div>
        </div>

        <div class="galerie">
          <img v-for="(photo, i) in galerie" :key="photo" :src="img(photo)" :alt="`Photo de Léo ${i + 1}`" loading="lazy">
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const competences = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Vue / Nuxt', 'Docker', 'Git & GitHub', 'SQL', 'WordPress', 'Linux', 'SSH']

// photos affichées dans la galerie (dans app/assets/img)
const galerie = ['moi-2.png', 'moi-3.png', 'moi-4.png', 'moi-5.png', 'moi-6.png', 'moi-7.png', 'moi-9.jpg']

const sections = [
  {
    to: '/projets',
    titre: 'Projets',
    texte: 'Les projets que je réalise ou que j\'ai réalisés au cours de mon BTS SIO.',
    icone: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>'
  },
  {
    to: '/ressources',
    titre: 'Ressources',
    texte: 'Les modes opératoires que j\'ai rédigés : Docker, SSH, Git, WordPress, FreeIPA…',
    icone: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg>'
  },
  {
    to: '/veille-technologique',
    titre: 'Veille technologique',
    texte: 'Ma veille sur VS Code, les outils du développement web et l\'actualité tech.',
    icone: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>'
  },
  {
    to: '/contact',
    titre: 'Me contacter',
    texte: 'Une question, une offre d\'alternance ? Écris-moi.',
    icone: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>'
  }
]
</script>

<style scoped>
.hero {
  padding: 72px 0 56px;
  background:
    radial-gradient(circle at 90% 10%, var(--accent-clair), transparent 40%),
    radial-gradient(circle at 0% 100%, #e6ecf4, transparent 40%);
}
.hero-inner {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 56px;
  align-items: center;
}
.accent { color: var(--accent); }
.hero-intro {
  font-size: 1.15rem;
  max-width: 540px;
  margin: 20px 0 32px;
}
.hero-intro strong { color: var(--primaire); }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }

.hero-photo {
  position: relative;
  justify-self: center;
  width: 100%;
  max-width: 400px;
}
.hero-photo::before {
  content: '';
  position: absolute;
  inset: 18px -18px -18px 18px;
  border-radius: 24px;
  background: linear-gradient(135deg, var(--accent), var(--primaire));
  z-index: 0;
}
.hero-photo img {
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: 45% 30%;
  border-radius: 24px;
  box-shadow: 0 30px 60px rgba(22, 50, 79, .25);
}
.badge-alternance {
  position: absolute;
  z-index: 2;
  left: -24px;
  bottom: 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 999px;
  background: var(--surface);
  box-shadow: var(--ombre-hover);
  font-weight: 600;
  font-size: .9rem;
  color: var(--primaire);
}
.point {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #28c840;
  box-shadow: 0 0 0 4px rgba(40, 200, 64, .2);
}

.duo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--grid-gap);
  align-items: start;
}
.texte-bloc { padding: 40px; }
.texte-bloc p:last-child { margin-bottom: 0; }
.bloc-img {
  width: calc(100% + 80px);
  max-width: none;
  margin: -40px -40px 32px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--rayon) var(--rayon) 0 0;
}

.card h3 { margin-top: 0; }

.competences {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 32px;
  align-items: center;
  padding: 40px;
}
.competences h2 { margin-bottom: .3em; }
.competences p { margin: 0; }

.galerie {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 16px;
}
.galerie img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--rayon);
  transition: transform .4s, box-shadow .4s;
}
.galerie img:hover { transform: scale(1.02); box-shadow: var(--ombre-hover); }
.galerie img:nth-child(1) { grid-column: span 2; grid-row: span 2; }
.galerie img:nth-child(5) { grid-row: span 2; }

@media (max-width: 860px) {
  .hero { padding-top: 40px; }
  .hero-inner, .competences, .duo { grid-template-columns: 1fr; }
  .hero-photo { max-width: 320px; margin-bottom: 16px; }
  .badge-alternance { left: 0; }
  .texte-bloc { padding: 28px; }
  .bloc-img { width: calc(100% + 56px); margin: -28px -28px 24px; }
  .galerie { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 160px; }
  .galerie img:nth-child(5) { grid-row: span 1; }
}
</style>
