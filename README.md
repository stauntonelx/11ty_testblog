# 11ty test repo

## setup project

### 1. node.js

meer informatie voor installeren vind je hier: https://github.com/nodesource/distributions

installeer nu de lts versie met:

    curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - &&apt-get install -y nodejs
 
### 2. Github

Maak een repo voor je project en clone de inhoud naar je locale mappenstructuur.

### 3. installeer 11ty in project

Open de terminal in de git repo die je net gecloned hebt.

    npm init -y
    npm install @11ty/eleventy --save-dev

### 4 package.json

Pas het script aan met volgende regels

    "scripts": {
      "start": "eleventy --serve",
      "build": "eleventy"
    },

Je start nu de website met:

    npm start

En build de website met

    npm build

### 5 configbestand

maak een congigbestand aan eleventy.config.js

    module.exports = function(eleventyConfig) {
    return {
        dir: {
        input: "src",
        output: "public"
        }
    }
    };

De source gaat in ./src, de output komt in de public map.

## 11ty

maak index

    echo '# Page header' > index.md

run eleventy

    npm build

run webserver

    npm start

Open http://localhost:8080/ in je webbrowser
