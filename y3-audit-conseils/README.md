# Y3 Audit & Conseils – Plateforme Web

Plateforme web du cabinet Y3 Audit & Conseils, développée avec Next.js, React, TypeScript et TailwindCSS.

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Scripts disponibles](#scripts-disponibles)
- [Technologies principales](#technologies-principales)
- [Organisation des pages](#organisation-des-pages)
- [Personnalisation & développement](#personnalisation--développement)
- [Contribuer](#contribuer)
- [Licence](#licence)

---

## Fonctionnalités

- Présentation des services de conseil, audit, expertise comptable, gestion, fiscalité, etc.
- Pages institutionnelles : À propos, Notre équipe, Nos valeurs, Notre histoire, Vision et certifications.
- Actualités dynamiques.
- Prise de rendez-vous et formulaire de contact.
- Espace recrutement (carrières, candidatures).
- Design responsive et moderne.

---

## Structure du projet

```
projet-interne/y3-audit-conseils/
│
├── app/                  # Pages et routes Next.js
│   ├── services/         # Pages de chaque service (audit, conseil, etc.)
│   ├── a-propos/         # Pages institutionnelles
│   ├── contact/          # Prise de contact et rendez-vous
│   ├── rejoignez-nous/   # Carrières et candidatures
│   ├── actualites/       # Actualités (dynamique)
│   ├── components/       # Composants réutilisables
│   └── ...               # Autres pages (mentions légales, politique, etc.)
│
├── components/           # UI partagée (boutons, formulaires, etc.)
├── data/                 # Données statiques (ex : news.json)
├── hooks/                # Hooks React personnalisés
├── lib/                  # Fonctions utilitaires
├── public/               # Images et assets statiques
├── scripts/              # Scripts utilitaires (ex : copy-leaflet-assets.js)
├── styles/               # Fichiers CSS globaux
├── package.json          # Dépendances et scripts NPM
├── tsconfig.json         # Configuration TypeScript
├── next.config.mjs       # Configuration Next.js
└── ...
```

---

## Installation

1. **Cloner le dépôt**  
   ```bash
   git clone <url-du-repo>
   cd projet-interne/y3-audit-conseils
   ```

2. **Installer les dépendances**  
   ```bash
   npm install
   # ou
   pnpm install
   ```

---

## Utilisation

- **Développement local**  
  ```bash
  npm run dev
  ```
  Accéder à [http://localhost:3000](http://localhost:3000)

- **Build de production**  
  ```bash
  npm run build
  npm start
  ```

- **Lint**  
  ```bash
  npm run lint
  ```

---

## Scripts disponibles

- `dev` : Lance le serveur Next.js en mode développement.
- `build` : Build l’application pour la production.
- `start` : Démarre l’application en mode production.
- `lint` : Analyse le code avec ESLint.
- `postinstall` : Script pour copier les assets Leaflet après installation.

---

## Technologies principales

- **Next.js** 15.x
- **React** 19.x
- **TypeScript**
- **TailwindCSS**
- **Radix UI** (composants accessibles)
- **Lucide React** (icônes)
- **Leaflet** (cartographie)
- **Framer Motion** (animations)
- **React Hook Form** (formulaires)
- **Zod** (validation)

---

## Organisation des pages

- `/services/`  
  - `audit/`  
  - `comptabilite/`  
  - `conseil-en-gestion/`  
  - `conseil-en-risques/`  
  - `conseil-financier/`  
  - `conseil-fiscal/`  
  - `conseil-operationnel/`  
  - `expertise-comptable/`  
  - `expertise-sectorielle/`  
  - `formation/`  
- `/a-propos/`  
  - `notre-equipe/`  
  - `nos-valeurs/`  
  - `notre-histoire/`  
  - `notre-vision-et-certifications/`  
- `/contact/`  
  - `rendez-vous/`  
  - `nous-trouver/`  
- `/rejoignez-nous/`  
  - `carrieres/`  
  - `candidature/`  
- `/actualites/`  
- `/mentions-legales/`  
- `/politique-de-confidentialite/`  

---

## Personnalisation & développement

- **Ajout de services** : Ajouter un dossier dans `app/services/` avec un fichier `page.tsx`.
- **Ajout d’actualités** : Modifier `data/news.json`.
- **Ajout de membres d’équipe** : Modifier la page correspondante dans `a-propos/notre-equipe/`.
- **Styles globaux** : Modifier `app/globals.css` ou `styles/globals.css`.

---

## Contribuer

1. Forker le projet
2. Créer une branche (`git checkout -b feature/ma-feature`)
3. Committer vos modifications (`git commit -am 'feat: ma feature'`)
4. Pousser la branche (`git push origin feature/ma-feature`)
5. Ouvrir une Pull Request

---

## Licence

Projet interne – Y3 Audit & Conseils.  
Usage privé, non destiné à la redistribution publique. 