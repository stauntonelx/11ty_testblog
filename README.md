# web_dev
playground for static websites

## node.js for debian

https://github.com/nodesource/distributions

    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - &&apt-get install -y nodejs
 
## 11ty

maak index

    echo '# Page header' > index.md

run eleventy

    npx @11ty/eleventy

run webserver

    npx @11ty/eleventy --serve

Open http://localhost:8080/ in je webbrowser
