This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Deployment

The build is deployed on Github Pages and set to the **`master`** branch.

### Step 1: Config `homepage` in `package.json`

Create React App uses the `homepage` field to determine the root URL in the built HTML file.<br>
**This step is important!**<br>
**If you skip it, the app will not work correctly.**

Open `package.json` and set the `homepage` field:

```json
  "homepage": "https://andreipfeiffer.github.io/react-state-management/[folder]/example",
```

Where **`[folder]`** should be: `mobx`, `redux`, `unstated`, etc.

### Step 2: Create the build

`npm run build` creates a `build` directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

### Step 3: Move files from `/build` to `/example`

The build will be served from `/example` folder, because we have 2 different examples and the `build` folder content gets overwritten.

### Step 4: Commit & Push

... and wait a few minutes until the deploy finishes: https://andreipfeiffer.github.io/react-state-management/
