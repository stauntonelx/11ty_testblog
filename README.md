# 11ty test repo

## setup project

### 1. node.js

meer informatie voor installeren vind je hier: https://github.com/nodesource/distributions
In debian installeer je nu de lts versie van node.js met:

    curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - &&apt-get install -y nodejs
 
### 2. Git

Clone de repo

    git clone https://github.com/stauntonelx/11ty_testblog.git

### 3. installeer 11ty in project

Open de terminal in de git repo die je net gecloned hebt.

    npm install @11ty/eleventy --save-dev

### 4. start webserver

run webserver

    npm start

Open http://localhost:8080/ in je webbrowser
