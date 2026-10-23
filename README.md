# Yukesh M — Portfolio Website

A responsive portfolio built with HTML, CSS, and vanilla JavaScript.

## Important: profile photo location

The HTML first loads `./yukesh-photo.jpeg`, because the repository screenshot shows that file beside `index.html`. If the image is instead inside an `assets` folder, `script.js` automatically tries `./assets/yukesh-photo.jpeg` as a fallback.

For GitHub Pages, keep the filename exactly `yukesh-photo.jpeg` (same capitalization and extension) and commit the image to the repository. The photo file itself is not included in this source-only ZIP because it was not among the uploaded files in this chat. Keep your existing `yukesh-photo.jpeg` from your repository.

## Files

- `index.html` — page structure and profile image reference
- `style.css` — responsive layout and styling
- `script.js` — mobile navigation, year, photo-path fallback, and contact form
- `yukesh-photo.jpeg` — your existing profile photo; copy/keep it beside `index.html`

## Run locally

Keep the files together and open `index.html` in a browser.

## Publish on GitHub Pages

Upload/replace `index.html`, `style.css`, `script.js`, and `README.md` in your repository. Do not delete your existing `yukesh-photo.jpeg`. Commit the changes, then refresh the live website with `Ctrl + Shift + R`.

## Contact form

The contact form validates the fields and opens the visitor's default email app with a prefilled message addressed to `yukeshyuva20@gmail.com`. It does not send or store messages on a server.
