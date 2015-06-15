# Dr. Lannin's Website

## Installation

First install [Node.js](https://nodejs.org/). Then use npm to install [Harp](http://harpjs.com/), a static web server with built-in preprocessing.

    sudo npm install -g harp

Start up the development server.

    harp server

The application will now be running at [http://localhost:9000](http://localhost:9000).

## Deployment

This site is deployed using [GitHub Pages](https://pages.github.com/). To begin, checkout the `gh-pages` branch, which will contain the compiled HTML, CSS, and JavaScript generated from the Harp app. 

    git checkout gh-pages

In order to re-generate the site, clear out all the existing files.

    git rm -rf .

Clone the master branch of the app into a folder named `_harp` so that it can be used to generate the site.

    git clone https://github.com/mlannin23/dr-lannin _harp

Compile the Harp app into the root of the repository, where it will be served by GitHub Pages.

    harp compile _harp ./

To finish the deployment, add all the files, commit them, and push them to GitHub:

```
git add -A
git commit -m "Deploy Harp app"
git push origin gh-pages
```

The app will now be available at [mlannin23.github.io/dr-lannin](http://mlannin23.github.io/dr-lannin/).