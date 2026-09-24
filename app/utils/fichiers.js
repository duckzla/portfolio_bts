// Récupère automatiquement les images et PDF placés dans app/assets
// (Vite leur donne une URL valide, même avec le baseURL de GitHub Pages)

const pdfs = import.meta.glob('~/assets/ressources/*.pdf', { eager: true, query: '?url', import: 'default' })
const images = import.meta.glob('~/assets/img/*.{png,jpg,jpeg,webp,svg}', { eager: true, import: 'default' })

function trouver(liste, nom) {
  const cible = '/' + nom.normalize('NFC')
  const cle = Object.keys(liste).find(k => k.normalize('NFC').endsWith(cible))
  return cle ? liste[cle] : undefined
}

// ex : pdf('Docker.pdf')
export const pdf = nom => trouver(pdfs, nom)

// ex : img('moi-1.png')
export const img = nom => trouver(images, nom)
