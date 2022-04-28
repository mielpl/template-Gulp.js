# Шаблон для проектов HTML CSS JS only [To english](#template-for-projects-html-css-js-only)
  ## Как воспроизводить?
 Загрузите файлы через GitHub или [по ссылке](https://github.com/mielpl/template-Gulp.js)
 В командную строку пишите:
 `npm install`
Зайдите на этот [сайт](https://tinypng.com/), регистрируйтесь и получите API. Вставьте API на файл `gulp/tasks/img.js` на строку 8. За тем пишите:
 `npm start`
 Перед публикации:
 `npm run product`
 При изменении файлов настройки сайта `(src/)` браузер перезагружается.

## Как это работает?

Папка `src` содержит файлы `Pug`, `Stylus` и `JS`, которые необходимо скомпилировать.

А папкa `public` содержит cкомпилированные файлы `HTML`, `CSS` и `JS`.

Папкa `media` содержит `фонты`, `картинки` и `SVG файлы`.

Папкa `gulp` содержит все задачи и конфигурации для задач.

Когда вы создаете подпапки в папке `src/pug` в папке `public` тaкже создаются подпапки. Затем в браузере вы можете увидеть файлы подпапок в следующем порядке `localhost:3000/<имя подпапки>/файл`.

### Компиляция проходит следующие этапы:

Диспетчер задач `gulp` параллельно компилирует файлы Pug Stylus и JS:

- Задача `pug` получает макет от файла `src/pug/base/layout.pug`, вставляет его в указанные блока (например: `block main` ) и помешает в папку `public`

- Задача `stylus` получает стили от папки `src/stylus/`, компилирует, соединяет по указанному параметру, префиксирует по версии, убирает ненужные линии и коды и т.д, загружает исходную карту стилей и помешает в папку `public/css`

- Задача `scripts` получает скрипты от папки `src/js/`, соединяет, минифицирует и помешает в папку public/js

- Задача `img:build` получает картинки от папки `media/`, минифицирует их с помошью `gulp-tinypng`, и помешает в папку `public/`.

- Задача `serve` синхронизирует указанные файлы с браузером. При изминении файла браузер перезагружается.

- Задача `watch` . Запускает задачу при изменении. Задачи обрабатываются одинаково с остальной частью системы задач.

- Еще есть задачи `fonts`, `img:dev`, `svg`, они просто копируют файлы от `media/fonts (img, svg)`
 и выкладывают их в `public`.

## По подробнее:
[browser-sync](https://www.npmjs.com/package/browser-sync)

[del](https://www.npmjs.com/package/del)

[gulp](https://www.npmjs.com/package/gulp)

[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)

[gulp-concat](https://www.npmjs.com/package/gulp-concat)

[gulp-csso](https://www.npmjs.com/package/gulp-csso)

[gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins)

[gulp-order](https://www.npmjs.com/package/gulp-order)

[gulp-pug](https://www.npmjs.com/package/gulp-pug)

[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)

[gulp-stylus](https://www.npmjs.com/package/gulp-stylus)

[gulp-tinypng](https://www.npmjs.com/package/gulp-tinypng)

[gulp-uglify](https://www.npmjs.com/package/gulp-uglify)



# Template for projects HTML CSS JS only
  ## How to play?
 Download files via GitHub or [link](https://github.com/mielpl/template-Gulp.js)
 On the command line write:
 `npm install`
Go to this [website](https://tinypng.com/), register and get the API. Paste the API in `gulp/tasks/img.js` on line 8. Then write:
 `npm start`
 Before posting:
 `npm run product`
 When changing site configuration files `(src/)` the browser is reloaded.

## How it works?

The `src` folder contains the `Pug`, `Stylus` and `JS` files that need to be compiled.

And the `public` folder contains the compiled `HTML`, `CSS` and `JS` files.

The `media` folder contains `fonts`, `images` and `SVG files`.

The `gulp` folder contains all tasks and configurations for tasks.

When you create subfolders in the `src/pug` folder, subfolders are also created in the `public` folder. You can then see the files in the subfolders in the browser in the following order `localhost:3000/<subfolder name>/file`.

### Compilation goes through the following steps:

The `gulp` task manager compiles the Pug Stylus and JS files in parallel:

- The `pug` task gets the layout from the `src/pug/base/layout.pug` file, inserts it into the specified blocks (for example: `block main` ) and puts it in the `public` folder

- The `stylus` task gets styles from the `src/stylus/` folder, compiles, merges by the specified parameter, prefixes by version, removes unnecessary lines and codes, etc., loads the source stylemap and puts it in the `public/css` folder

- `scripts` task gets scripts from `src/js/` folder, merges, minifies and puts into public/js folder

- The `img:build` task takes pictures from the `media/` folder, minifies them with `gulp-tinypng`, and puts them in the `public/` folder.

- The `serve` task synchronizes the specified files with the browser. When the file is changed, the browser is reloaded.

- The `watch` task. Runs a task on change. Tasks are treated the same as the rest of the task system.

- There are also tasks `fonts`, `img:dev`, `svg`, they just copy files from `media/fonts (img, svg)`
 and put them in `public`.

## For details:
[browser-sync](https://www.npmjs.com/package/browser-sync)

[del](https://www.npmjs.com/package/del)

[gulp](https://www.npmjs.com/package/gulp)

[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)

[gulp-concat](https://www.npmjs.com/package/gulp-concat)

[gulp-csso](https://www.npmjs.com/package/gulp-csso)

[gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins)

[gulp-order](https://www.npmjs.com/package/gulp-order)

[gulp-pug](https://www.npmjs.com/package/gulp-pug)

[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)

[gulp-stylus](https://www.npmjs.com/package/gulp-stylus)

[gulp-tinypng](https://www.npmjs.com/package/gulp-tinypng)

[gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
