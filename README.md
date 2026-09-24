# Portfolio — Léo Adam

Portfolio de **Léo Adam**, étudiant en **BTS SIO option SLAM** à MyDigitalSchool Caen, à la recherche d'une **alternance**.

Après une première carrière dans le domaine scientifique, je me reconvertis vers le développement informatique. Ce site regroupe mon parcours, mes projets, mes modes opératoires et ma veille technologique.

🔗 **Site en ligne :** [duckzla.github.io/portfolio_bts](https://duckzla.github.io/portfolio_bts/) *(bientôt disponible)*

---

## 📄 Contenu du site

| Page | Description |
| --- | --- |
| **Accueil** | Présentation, parcours, expériences, compétences et galerie photo |
| **CV** | Aperçu de mon CV et téléchargement du PDF |
| **Ressources** | Technologies apprises et modes opératoires (Docker, SSH, Git, WordPress, FreeIPA…) |
| **Projets** | Mes projets de BTS, avec une page détaillée pour chacun |
| **Veille technologique** | Veille sur VS Code, les outils du développement web et l'actualité tech |
| **Me contacter** | Email, téléphone, LinkedIn et GitHub |

## 🛠️ Technologies

- [Nuxt 4](https://nuxt.com/) / [Vue 3](https://vuejs.org/)
- HTML, CSS (sans framework CSS)
- Déploiement sur GitHub Pages

## 📁 Structure du projet

```
app/
├── assets/
│   ├── css/main.css        # thème global (couleurs, typo, composants)
│   ├── img/                # photos et images
│   └── ressources/         # PDF (CV, modes opératoires, livrables)
├── components/             # header, footer, en-tête de page, carte projet
├── layouts/default.vue     # structure commune à toutes les pages
├── pages/                  # une page = un fichier (routes automatiques)
└── utils/fichiers.js       # récupère les images / PDF par leur nom
data/
└── projets.json            # liste des projets affichés sur le site
```

## ✏️ Modifier le contenu

- **Ajouter un projet** : ajouter une entrée dans `data/projets.json` (la page détaillée est générée automatiquement à partir du `slug`).
- **Ajouter un mode opératoire** : déposer le PDF dans `app/assets/ressources/` puis l'ajouter dans la liste de `app/pages/ressources.vue`.
- **Mettre à jour le CV** : remplacer `app/assets/ressources/CV_Leo_Adam.pdf` en gardant le même nom.
- **Changer les couleurs** : modifier les variables en haut de `app/assets/css/main.css`.

## 🚀 Lancer le projet en local

```bash
# installer les dépendances
npm install

# serveur de développement → http://localhost:3000/portfolio_bts/
npm run dev

# générer le site statique (pour GitHub Pages) → dossier .output/public
npm run generate
```

## 📬 Contact

- **Email :** l14.adm@gmail.com
- **LinkedIn :** [linkedin.com/in/léo-adam](https://www.linkedin.com/in/léo-adam)
- **GitHub :** [github.com/duckzla](https://github.com/duckzla)
