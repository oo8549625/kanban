- [Express + TailwindCSS + Pug](#express--tailwindcss--pug)
  - [TailwindCSS](#tailwindcss)
    - [installation](#installation)

# Express + TailwindCSS + Pug

## TailwindCSS

### installation

* Install Tailwind CSS
```
$ npm install tailwindcss postcss autoprefixer
$ npx tailwindcss init
```

* Add Tailwind to your PostCSS configuration

Add tailwindcss and autoprefixer to your **postcss.config.js** file, or wherever PostCSS is configured in your project.
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

* Configure your template paths

Add the paths to all of your template files in your **tailwind.config.js** file.
```
module.exports = {
  content: ["./views/*.pug"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

* Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
/public/stylesheets/**tailwind.css**
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

* Write a build script in **package.json** and run it

```
"build:css": "npx tailwindcss -i ./public/stylesheets/tailwind.css -o ./public/stylesheets/style.css"
npm run build:css
```

* Start using Tailwind in your HTML

Add your compiled CSS file to the **head** and start using Tailwind’s utility classes to style your content.

```
link(rel='stylesheet' href='/stylesheets/style.css')
link(rel='stylesheet' href='/stylesheets/tailwind.css')
```