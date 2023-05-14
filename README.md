# 11ty test repo

## setup

### 1. node.js

meer informatie voor installeren vind je hier: https://github.com/nodesource/distributions

installeer nu de lts versie met:

    curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - &&apt-get install -y nodejs
 
### 2. Github

Maak een repo voor je project en clone de inhoud naar je locale mappenstructuur.

### 3. installeer 11ty in project

In de terminal:


## 11ty

maak index

    echo '# Page header' > index.md

run eleventy

    npx @11ty/eleventy

run webserver

    npx @11ty/eleventy --serve

Open http://localhost:8080/ in je webbrowser
