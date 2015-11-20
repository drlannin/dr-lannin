# Dr. Lannin's Website

## Installation

First install [Node.js](https://nodejs.org/). Then use npm to install [Harp](http://harpjs.com/), a static web server with built-in preprocessing.

    sudo npm install -g harp

Start up the development server.

    harp server

The application will now be running at [http://localhost:9000](http://localhost:9000). To make changes to the app, edit the files located in the `_harp` folder.

## Deployment

This site is deployed using [GitHub Pages](https://pages.github.com/), and it is served from the root of the repository. So we will want to compile the Harp app there.

    harp compile _harp ./

To deploy the app, add all the files, commit them, and push them to GitHub:

```
git add -A
git commit -m "Deploy"
git push origin master
```

The app will now be available at [drlannin.github.io](http://drlannin.github.io/).