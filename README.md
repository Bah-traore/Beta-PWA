# Installation des Dépendances et Outils

## Prérequis
Avant de commencer, assurez-vous d'avoir :
- Un système d'exploitation à jour (Windows, macOS, Linux)
- Une connexion Internet stable

---

## 1. Installation des Outils de Base

### Node.js
Node.js est nécessaire pour utiliser npm et vite.

- Téléchargez et installez Node.js depuis [nodejs.org](https://nodejs.org/)
- Vérifiez l'installation avec :
  ```sh
  node -v
  npm -v
  ```

### Python
Python est essentiel pour le développement.

- Téléchargez et installez Python depuis [python.org](https://www.python.org/downloads/)
- Vérifiez l'installation avec :
  ```sh
  python --version
  ```

### Git
Git est nécessaire pour la gestion de version avec GitHub.

- Téléchargez et installez Git depuis [git-scm.com](https://git-scm.com/)
- Vérifiez l'installation avec :
  ```sh
  git --version
  ```

---

## 2. Installation des Frameworks CSS

### Bootstrap

Installation locale via npm :
```sh
npm install bootstrap
```

Utilisation via CDN :
Ajoutez cette ligne dans le `<head>` de votre fichier HTML :
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

### TailwindCSS

Installation locale via npm :
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Utilisation via CDN :
Ajoutez cette ligne dans le `<head>` de votre fichier HTML :
```html
<script src="https://cdn.tailwindcss.com"></script>
```

---

## 3. Installation de Vite

Vite est un bundler rapide pour les projets web modernes.

Installation avec npm :
```sh
npm create vite@latest my-project --template vanilla
cd my-project
npm install
npm run dev
```

---

## 4. Extensions VS Code recommandées

- **Python** : Support pour Python et Jupyter
- **HTML CSS Support** : Auto-complétion pour HTML et CSS
- **Bootstrap 4,5 Snippets** : Snippets pour Bootstrap
- **Tailwind CSS IntelliSense** : Auto-complétion et suggestions TailwindCSS
- **GitHub Copilot** : Assistance AI pour le code
- **Live Server** : Aperçu en direct du code HTML

Pour installer une extension sur VS Code :
1. Ouvrez VS Code
2. Accédez au Marketplace (`Ctrl + Shift + X` ou `Cmd + Shift + X` sur Mac)
3. Recherchez l’extension et cliquez sur "Installer"

---



# 1.Utilisation Git
## initialiser un depot git (si ce n'est pas deja fait)
```sh
git init
```
Ceci montrera que vous allez initié votre compte github à votre vs code 
```sh
git --global user.email "adresse email github" 
git --global user.name "votre nom ou votre nom d'utilisateur"
```
## 2.Vérifier l'état du fichier 
```sh 
git status 
```
ceci permet àvoir l'état de ton fichier ou de dossier 
## 3.Ajouter un fichier 
```sh
git add nom du fichier 
```
celui la permet d'ajouter un fichier spécifique 
## 4.Ajouter plusieurs fichiers 
```sh
git add .
```
celui la permet d'ajouter plusieurs fichiers dans le repertoire courant 
## 5. Enrengistrer les commit (enrengistre les modifications dans historiques)
```sh
git commit -m "Votre de message de commit 
c'est comme un commentaire de la raison d'enregistrement"
```
votre message est essentiel pour la comprehension des collaborateurs
## 6. voir l'historique des commits
```sh
git log
```
Permet de voir l'historique
## 6. Pousser les commit vers le depot (si vous avez un depot distant)
```sh
git push origin nom_de_la_branche
```
Remplacez *nom_de_la_branche* par le nom de la branche sur laquelle vous traillez.
Pour nous c'est *main* exemple: *git push origin main*
### 1. Configurer un depot distant (si n'est pas deja fait)
```sh
git remote add origin URL_du_depot
```
 Remplacez *URL_du_depot* par l'URL de votre dépôt Git distant (par exemple, sur GitHub).
## 7. Récupérer les modifications du dépôt distant :
   ```sh
   git pull origin nom_de_la_branche
   ```
## 8. Créer une nouvelle branche :
```sh
git checkout -b nom_de_la_nouvelle_branche
```
## 9. Fusionner une branche :
```sh
git merge nom_de_la_branche_a_fusionner
```
## 10. Annuler un commit local (avant de pousser) :
```sh
git reset HEAD~1
```
## 11. Annuler un commit déjà poussé :
```sh
git revert commit_hash
```
Remplacez *commit_hash* par l'identifiant du commit que vous souhaitez annuler.


## Conclusion
Avec ces outils et dépendances installés, vous êtes prêt à commencer le développement avec un environnement moderne et optimisé !GEEK-FIRE 🚀
