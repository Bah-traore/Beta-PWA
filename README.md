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

## Conclusion
Avec ces outils et dépendances installés, vous êtes prêt à commencer le développement avec un environnement moderne et optimisé ! 🚀
