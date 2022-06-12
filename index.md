# Шаблон для проектов HTML CSS JS only
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

