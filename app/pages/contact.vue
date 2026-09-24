<template>
  <div>
    <PageHero
      eyebrow="Contact"
      titre="Me contacter"
      sous-titre="Une question, une proposition d'alternance ? N'hésite pas à m'écrire ou à m'appeler."
    />

    <div class="container">
      <div class="infos">
        <a
          v-for="c in contacts"
          :key="c.label"
          :href="c.lien"
          :target="c.lien.startsWith('http') ? '_blank' : undefined"
          rel="noopener"
          class="card interactive info"
        >
          <div class="card-icon" v-html="c.icone"></div>
          <div>
            <span class="label">{{ c.label }}</span>
            <strong>{{ c.valeur }}</strong>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Contact — Léo Adam' })

const email = 'l14.adm@gmail.com'

const contacts = [
  {
    label: 'Email',
    valeur: email,
    lien: `mailto:${email}`,
    icone: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>'
  },
  {
    label: 'Téléphone',
    valeur: '+33 6 46 62 65 15',
    lien: 'tel:+33646626515',
    icone: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>'
  },
  {
    label: 'LinkedIn',
    valeur: 'linkedin.com/in/léo-adam',
    lien: 'https://www.linkedin.com/in/léo-adam',
    icone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>'
  },
  {
    label: 'GitHub',
    valeur: 'github.com/duckzla',
    lien: 'https://github.com/duckzla',
    icone: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>'
  }
]
</script>

<style scoped>
.infos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--grid-gap);
}
.info {
  display: flex !important;
  align-items: center;
  gap: 16px;
  padding: 28px;
}
.info .card-icon { margin: 0; flex-shrink: 0; }
.label {
  display: block;
  font-size: .78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--texte-doux);
}
.info strong { color: var(--primaire); word-break: break-all; }

@media (max-width: 700px) {
  .infos { grid-template-columns: 1fr; }
}
</style>
