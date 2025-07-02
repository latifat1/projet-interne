# Y3 Audit & Conseils – Plateforme Web

![Next.js](https://img.shields.io/badge/Next.js-15.x-black)
![React](https://img.shields.io/badge/React-19.x-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)

Plateforme web du cabinet Y3 Audit & Conseils, développée avec Next.js, React, TypeScript et TailwindCSS. Cette application moderne offre une présentation complète des services du cabinet avec un système de gestion intégré et une automatisation des communications.

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Gestion des accès & sécurité](#gestion-des-accès--sécurité)
- [Automatisation des emails](#automatisation-des-emails)
- [Scripts disponibles](#scripts-disponibles)
- [Technologies principales](#technologies-principales)
- [Organisation des pages](#organisation-des-pages)
- [Déploiement](#déploiement)
- [Dépannage](#dépannage)
- [Personnalisation & développement](#personnalisation--développement)
- [Contribuer](#contribuer)
- [Support](#support)
- [Licence](#licence)

---

## Fonctionnalités

### ✨ Frontend
- Présentation des services de conseil, audit, expertise comptable, gestion, fiscalité
- Pages institutionnelles : À propos, Notre équipe, Nos valeurs, Notre histoire, Vision et certifications
- Actualités dynamiques avec système de gestion de contenu
- Interface utilisateur responsive et moderne avec animations fluides
- Optimisation SEO et performance

### 📋 Gestion des interactions
- Prise de rendez-vous avec calendrier intégré
- Formulaire de contact avancé
- Espace recrutement avec gestion des candidatures
- Stockage sécurisé en base de données via Prisma

### 🔐 Administration
- Dashboard d'administration sécurisé avec authentification
- Visualisation, filtrage et gestion des soumissions (contact, rendez-vous, candidatures)
- Navigation par onglets pour une gestion optimisée
- Gestion des statuts avec mise à jour en temps réel
- Interface intuitive avec feedback visuel immédiat

### 📧 Communication automatisée
- Envoi automatique d'emails personnalisés pour chaque interaction
- Notifications lors des changements de statut
- Templates d'emails professionnels et personnalisables
- Gestion robuste des erreurs d'envoi

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** 18.0 ou supérieur
- **npm** 9.0+ ou **pnpm** 8.0+
- **Base de données** : PostgreSQL, MySQL ou SQLite (selon votre configuration Prisma)
- **Compte Gmail** avec mot de passe d'application activé (pour l'envoi d'emails)
- **Git** pour le contrôle de version

### Vérification des prérequis
```bash
node --version  # Doit être >= 18.0
npm --version   # Doit être >= 9.0
git --version   # Toute version récente
```

---

## Installation

### 1. Cloner le dépôt
```bash
git clone <url-du-repo>
cd projet-interne/y3-audit-conseils
```

### 2. Installer les dépendances
```bash
# Avec npm
npm install

# Ou avec pnpm (recommandé pour de meilleures performances)
pnpm install
```

### 3. Configurer la base de données
```bash
# Générer le client Prisma
npx prisma generate

# Appliquer les migrations
npx prisma migrate deploy

# Ou pour un développement local
npx prisma db push

# Optionnel : Visualiser la base de données
npx prisma studio
```

---

## Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
# Base de données
DATABASE_URL="postgresql://user:password@localhost:5432/y3audit"
# Ou pour SQLite en local : DATABASE_URL="file:./dev.db"

# Authentification admin
ADMIN_PASSWORD=VotreMotDePasseSecurise123!
NEXTAUTH_SECRET=votre_secret_jwt_tres_long_et_securise

# Configuration email (Gmail)
EMAIL_USER=votre.email@gmail.com
EMAIL_PASS=votre_mot_de_passe_application_gmail
EMAIL_TO=contact@y3audit.com

# Configuration de l'application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Optionnel : Configuration supplémentaire
NEXT_PUBLIC_SITE_NAME="Y3 Audit & Conseils"
NEXT_PUBLIC_CONTACT_EMAIL=contact@y3audit.com
NEXT_PUBLIC_CONTACT_PHONE="+33 1 23 45 67 89"
```

### Configuration Gmail

Pour configurer l'envoi d'emails via Gmail :

1. Activez la validation en 2 étapes sur votre compte Gmail
2. Générez un mot de passe d'application :
   - Allez dans "Gérer votre compte Google" > "Sécurité"
   - Cliquez sur "Mots de passe des applications"
   - Sélectionnez "Autre" et nommez-le "Y3 Audit Plateforme"
   - Utilisez le mot de passe généré dans `EMAIL_PASS`

---

## Utilisation

### Développement local
```bash
# Démarrer le serveur de développement
npm run dev

# Ou avec pnpm
pnpm dev
```

Accédez à [http://localhost:3000](http://localhost:3000)

### Build de production
```bash
# Construire l'application
npm run build

# Démarrer en mode production
npm start
```

### Commandes utiles
```bash
# Linter le code
npm run lint

# Corriger les erreurs de lint automatiquement
npm run lint:fix

# Vérifier les types TypeScript
npm run type-check

# Réinitialiser la base de données (développement uniquement)
npx prisma migrate reset
```

---

## Structure du projet

```
projet-interne/y3-audit-conseils/
│
├── 📁 app/                    # App Router Next.js 15
│   ├── 🔧 api/               # Routes API
│   │   ├── contact/          # API formulaire de contact
│   │   ├── appointments/     # API rendez-vous
│   │   ├── careers/          # API candidatures
│   │   ├── admin/           # API administration
│   │   └── utils/           # Utilitaires API (sendMail, etc.)
│   ├── 🏢 services/          # Pages services
│   │   ├── audit/
│   │   ├── comptabilite/
│   │   ├── conseil-en-gestion/
│   │   ├── conseil-financier/
│   │   ├── conseil-fiscal/
│   │   ├── conseil-operationnel/
│   │   ├── expertise-comptable/
│   │   └── formation/
│   ├── 👥 a-propos/          # Pages institutionnelles
│   │   ├── notre-equipe/
│   │   ├── nos-valeurs/
│   │   ├── notre-histoire/
│   │   └── notre-vision-et-certifications/
│   ├── 📞 contact/           # Contact et RDV
│   │   ├── rendez-vous/
│   │   └── nous-trouver/
│   ├── 💼 rejoignez-nous/    # Recrutement
│   │   ├── carrieres/
│   │   └── candidature/
│   ├── 📰 actualites/        # Blog/Actualités
│   ├── 🔐 admin/            # Dashboard admin
│   ├── 🔑 admin-login/      # Connexion admin
│   └── 📄 mentions-legales/ # Pages légales
│
├── 🧩 components/            # Composants réutilisables
│   ├── ui/                  # Composants UI de base
│   ├── forms/               # Composants de formulaires
│   ├── layout/              # Composants de mise en page
│   └── business/            # Composants métier
│
├── 📊 data/                  # Données statiques
│   ├── news.json           # Actualités
│   ├── services.json       # Configuration services
│   └── team.json           # Données équipe
│
├── 🪝 hooks/                # Hooks React personnalisés
├── 📚 lib/                  # Fonctions utilitaires
├── 🗄️ prisma/              # Configuration base de données
│   ├── schema.prisma       # Schéma de base
│   └── migrations/         # Migrations
├── 🖼️ public/              # Assets statiques
├── 🎨 styles/               # Styles globaux
├── 🔧 scripts/              # Scripts utilitaires
└── 📋 types/                # Définitions TypeScript
```

---

## Gestion des accès & sécurité

### Authentification Admin
- Accès au dashboard `/admin` protégé par middleware Next.js
- Cookie sécurisé avec expiration automatique
- Mot de passe robuste requis (défini dans `.env`)
- Bouton de déconnexion pour invalidation de session

### Sécurité des données
- Validation côté serveur avec Zod
- Protection CSRF intégrée
- Sanitisation des entrées utilisateur
- Chiffrement des données sensibles
- Rate limiting sur les APIs sensibles

### Bonnes pratiques
- Utilisez un mot de passe admin fort (12+ caractères, majuscules, minuscules, chiffres, symboles)
- Changez régulièrement les secrets JWT
- Surveillez les logs d'accès au dashboard
- Effectuez des sauvegardes régulières de la base de données

---

## Automatisation des emails

### Fonctionnalités
- **Confirmation automatique** : Email envoyé immédiatement après chaque soumission
- **Notifications de statut** : Mise à jour automatique lors des changements d'état
- **Templates personnalisés** : Messages adaptés selon le type d'interaction
- **Gestion d'erreurs** : Logs détaillés et tentatives de renvoi

### Types d'emails envoyés
1. **Contact** : Confirmation de réception + notification interne
2. **Rendez-vous** : Confirmation, reports, annulations
3. **Candidatures** : Accusé de réception, acceptation, refus
4. **Replanification** : Instructions pour proposer de nouvelles créneaux

### Configuration avancée
```typescript
// lib/email-config.ts
export const emailConfig = {
  from: process.env.EMAIL_USER,
  templates: {
    contact: 'templates/contact-confirmation.html',
    appointment: 'templates/appointment-confirmation.html',
    career: 'templates/career-application.html'
  },
  retryAttempts: 3,
  retryDelay: 1000
}
```

---

## Scripts disponibles

| Script | Description | Commande |
|--------|-------------|----------|
| `dev` | Serveur de développement avec hot-reload | `npm run dev` |
| `build` | Build optimisé pour la production | `npm run build` |
| `start` | Serveur de production | `npm start` |
| `lint` | Analyse statique du code | `npm run lint` |
| `lint:fix` | Correction automatique des erreurs | `npm run lint:fix` |
| `type-check` | Vérification TypeScript | `npm run type-check` |
| `db:generate` | Génération du client Prisma | `npm run db:generate` |
| `db:migrate` | Application des migrations | `npm run db:migrate` |
| `db:studio` | Interface graphique BDD | `npm run db:studio` |
| `postinstall` | Copie des assets après installation | Auto-exécuté |

---

## Technologies principales

### Core Framework
- **Next.js** 15.x - Framework React full-stack
- **React** 19.x - Bibliothèque UI avec Server Components
- **TypeScript** 5.x - Typage statique JavaScript

### Styling & UI
- **TailwindCSS** 3.x - Framework CSS utilitaire
- **Radix UI** - Composants accessibles headless
- **Lucide React** - Bibliothèque d'icônes moderne
- **Framer Motion** - Animations et transitions

### Formulaires & Validation
- **React Hook Form** - Gestion performante des formulaires
- **Zod** - Validation de schémas TypeScript-first

### Base de données & Backend
- **Prisma** - ORM moderne avec type-safety
- **Nodemailer** - Envoi d'emails robuste
- **bcryptjs** - Hachage sécurisé des mots de passe

### Outils de développement
- **ESLint** - Linting JavaScript/TypeScript
- **Prettier** - Formatage automatique du code
- **Husky** - Git hooks pour la qualité

---

## Organisation des pages

### 🏢 Services (`/services/`)
- **Audit** (`/audit/`) - Services d'audit financier et opérationnel
- **Comptabilité** (`/comptabilite/`) - Tenue de comptabilité
- **Conseil en gestion** (`/conseil-en-gestion/`) - Optimisation de gestion
- **Conseil financier** (`/conseil-financier/`) - Stratégie financière
- **Conseil fiscal** (`/conseil-fiscal/`) - Optimisation fiscale
- **Conseil opérationnel** (`/conseil-operationnel/`) - Amélioration des processus
- **Expertise comptable** (`/expertise-comptable/`) - Missions d'expertise
- **Formation** (`/formation/`) - Programmes de formation

### 👥 À propos (`/a-propos/`)
- **Notre équipe** (`/notre-equipe/`) - Présentation des collaborateurs
- **Nos valeurs** (`/nos-valeurs/`) - Valeurs et engagement
- **Notre histoire** (`/notre-histoire/`) - Historique du cabinet
- **Vision et certifications** (`/notre-vision-et-certifications/`) - Vision d'avenir

### 📞 Contact (`/contact/`)
- **Page principale** - Formulaire de contact général
- **Rendez-vous** (`/rendez-vous/`) - Prise de rendez-vous en ligne
- **Nous trouver** (`/nous-trouver/`) - Localisation et horaires

### 💼 Recrutement (`/rejoignez-nous/`)
- **Carrières** (`/carrieres/`) - Offres d'emploi et culture d'entreprise
- **Candidature** (`/candidature/`) - Formulaire de candidature spontanée

### 📰 Communication
- **Actualités** (`/actualites/`) - Blog et actualités du secteur
- **Mentions légales** (`/mentions-legales/`) - Informations légales
- **Politique de confidentialité** (`/politique-de-confidentialite/`) - RGPD

### 🔐 Administration
- **Dashboard** (`/admin/`) - Interface de gestion (accès restreint)
- **Connexion** (`/admin-login/`) - Authentification administrateur

---

## Déploiement

### Déploiement sur Vercel (Recommandé)

1. **Connecter le repository**
   ```bash
   # Installer Vercel CLI
   npm i -g vercel
   
   # Se connecter et déployer
   vercel
   ```

2. **Configurer les variables d'environnement**
   - Aller dans le dashboard Vercel
   - Ajouter toutes les variables du fichier `.env`
   - Redéployer si nécessaire

3. **Configuration de domaine**
   - Ajouter votre domaine personnalisé
   - Configurer les DNS selon les instructions Vercel

### Déploiement sur serveur VPS/dédié

1. **Préparer le serveur**
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install nginx nodejs npm postgresql
   
   # Configurer PM2 pour la gestion des processus
   npm install -g pm2
   ```

2. **Cloner et configurer**
   ```bash
   git clone <url-du-repo>
   cd projet-interne/y3-audit-conseils
   npm install
   npm run build
   ```

3. **Configuration Nginx**
   ```nginx
   server {
       listen 80;
       server_name votre-domaine.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Démarrer avec PM2**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

### Déploiement sur Hostinger

1. **Préparer les fichiers**
   ```bash
   npm run build
   # Zipper le dossier .next et les fichiers nécessaires
   ```

2. **Configuration sur Hostinger**
   - Uploader les fichiers via le gestionnaire de fichiers
   - Configurer Node.js dans le panneau de contrôle
   - Ajouter les variables d'environnement
   - Pointer le domaine vers l'application

---

## Dépannage

### Problèmes courants

#### ❌ Erreur de connexion à la base de données
```bash
# Vérifier la chaîne de connexion
echo $DATABASE_URL

# Tester la connexion
npx prisma db pull
```
**Solution** : Vérifiez `DATABASE_URL` dans `.env` et que la base de données est accessible.

#### ❌ Emails non envoyés
```bash
# Vérifier les variables email
echo $EMAIL_USER
echo $EMAIL_PASS
```
**Solutions** :
- Vérifiez que le mot de passe d'application Gmail est correct
- Activez l'authentification à 2 facteurs sur Gmail
- Vérifiez que "Accès aux applications moins sécurisées" est activé

#### ❌ Accès admin refusé
**Solutions** :
- Vérifiez `ADMIN_PASSWORD` dans `.env`
- Supprimez les cookies du navigateur
- Redémarrez le serveur après modification du `.env`

#### ❌ Erreurs de build
```bash
# Nettoyer le cache Next.js
rm -rf .next

# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
```

#### ❌ Erreurs Prisma
```bash
# Régénérer le client
npx prisma generate

# Réinitialiser la base (développement uniquement)
npx prisma migrate reset
```

### Logs et debugging

```bash
# Voir les logs PM2 (production)
pm2 logs

# Logs détaillés Next.js
DEBUG=* npm run dev

# Logs base de données
npx prisma studio
```

### Performance

- **Images lentes** : Optimisez avec `next/image`
- **Bundle trop lourd** : Analysez avec `npm run analyze`
- **Requêtes lentes** : Vérifiez les index de base de données

---

## Personnalisation & développement

### Ajouter un nouveau service

1. **Créer la page**
   ```typescript
   // app/services/nouveau-service/page.tsx
   export default function NouveauService() {
     return (
       <div>
         <h1>Nouveau Service</h1>
         {/* Contenu du service */}
       </div>
     )
   }
   ```

2. **Ajouter à la navigation**
   ```typescript
   // data/services.json
   {
     "services": [
       {
         "name": "Nouveau Service",
         "slug": "nouveau-service",
         "description": "Description du service"
       }
     ]
   }
   ```

### Modifier les actualités

```json
// data/news.json
{
  "articles": [
    {
      "id": 1,
      "title": "Titre de l'actualité",
      "excerpt": "Résumé de l'article",
      "date": "2024-01-15",
      "author": "Nom de l'auteur",
      "content": "Contenu complet de l'article",
      "featured": true
    }
  ]
}
```

### Personnaliser les styles

```css
/* styles/globals.css */
:root {
  --primary-color: #your-brand-color;
  --secondary-color: #your-secondary-color;
}

/* Ou modifier tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#your-color',
      }
    }
  }
}
```

### Ajouter de nouveaux composants

```typescript
// components/ui/nouveau-composant.tsx
interface NouveauComposantProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary';
}

export function NouveauComposant({ 
  children, 
  variant = 'default' 
}: NouveauComposantProps) {
  return (
    <div className={`base-styles ${variant === 'primary' ? 'primary-styles' : ''}`}>
      {children}
    </div>
  )
}
```

---

## Contribuer

### Workflow de développement

1. **Forker le projet**
   ```bash
   git clone https://github.com/your-fork/y3-audit-conseils.git
   cd y3-audit-conseils
   ```

2. **Créer une branche de feature**
   ```bash
   git checkout -b feature/ma-nouvelle-feature
   ```

3. **Développer et tester**
   ```bash
   npm run dev
   npm run lint
   npm run type-check
   ```

4. **Committer avec des messages clairs**
   ```bash
   git add .
   git commit -m "feat: ajouter nouveau composant de contact"
   ```

5. **Pousser et créer une Pull Request**
   ```bash
   git push origin feature/ma-nouvelle-feature
   ```

### Standards de code

- **Commits** : Suivre la convention [Conventional Commits](https://www.conventionalcommits.org/)
- **Code** : Utiliser ESLint et Prettier (configurés automatiquement)
- **TypeScript** : Typer toutes les fonctions et composants
- **Tests** : Ajouter des tests pour les nouvelles fonctionnalités

### Types de contributions

- 🐛 **Bug fixes** : Corrections de bugs
- ✨ **Features** : Nouvelles fonctionnalités
- 📝 **Documentation** : Amélioration de la documentation
- 🎨 **Style** : Améliorations UI/UX
- ⚡ **Performance** : Optimisations
- 🔧 **Maintenance** : Mise à jour des dépendances

---

## Support

### Contacts techniques

- **Email développement** : dev@y3audit.com
- **Responsable technique** : [Nom du responsable]
- **Documentation interne** : [Lien vers wiki/confluence interne]

### Ressources

- **Documentation Next.js** : https://nextjs.org/docs
- **Documentation Prisma** : https://www.prisma.io/docs
- **Documentation TailwindCSS** : https://tailwindcss.com/docs
- **Guide TypeScript** : https://www.typescriptlang.org/docs

### Heures d'assistance

- **Lundi - Vendredi** : 9h00 - 18h00 (CET)
- **Urgences** : Contact par email uniquement
- **Maintenance** : Dimanche 2h00 - 4h00 (CET)

---

## Licence

**Propriété privée - Y3 Audit & Conseils**

Ce projet est la propriété exclusive de Y3 Audit & Conseils. Tous droits réservés.

### Restrictions d'usage

- ❌ **Redistribution interdite** : Ne pas redistribuer ou publier le code
- ❌ **Usage commercial externe interdit** : Réservé à un usage interne uniquement
- ❌ **Modification sans autorisation interdite** : Contacter l'équipe technique avant toute modification majeure

### Utilisation autorisée

- ✅ **Développement interne** : Modification pour les besoins du cabinet
- ✅ **Formation** : Utilisation à des fins de formation des employés
- ✅ **Maintenance** : Corrections de bugs et mises à jour de sécurité

---

### 📞 Besoin d'aide ?

N'hésitez pas à contacter l'équipe technique pour toute question ou assistance !

**Version du README** : 2.0  
**Dernière mise à jour** : Juillet 2025