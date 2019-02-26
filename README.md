<p align="center">
  <img src="logo.svg" width="154" height="64" alt="Логотип">
</p>
<p align="center">
	<h3 align="center">Магазин мороженого Глейси</h3>
</p>

<!-- Used for the "back to top" links within the document -->
<div id="contents"></div>

# Содержание

- [Вступление](#вступление)
- [Ссылки](#ссылки)
- [Зависимости](#зависимости)
- [Начало работы с проектом](#начало-работы-с-проектом)
- [Команды](#команды)
- [Структура проекта](#структура-проекта)
- [Использованные технологии](#использованные-технологии)
- [Лицензия](#лицензия)
- [Автор](#автор)

## Вступление

Проект «Глейси» был выполнен в рамках пройденного онлайн‑курса «Базовый HTML и CSS» от HTML Academy.

За основу проекта был взят мой личный boilerplate. Для более детального ознакомления с инфраструктурой проекта тыкайте [сюда](https://github.com/RedEagleAP/light-boilerplate/#readme).

Техническое задание на вёрстку [Specification.md](Specification.md).

## Ссылки

<table>
  <tr>
  <th><a href="http://redeagleap.github.io/gllacy/dist/index.html">Главная страница</a></th>
  <th><a href="http://redeagleap.github.io/gllacy/dist/catalog.html">Страница каталога товаров</a></th>
  </tr>
  <tr valign="top">
    <td>
      <a href="https://cloud.githubusercontent.com/assets/8654155/23338925/f617bba2-fc27-11e6-8522-76e1d5d1fb25.jpg" target="_blank">
        <img src="https://cloud.githubusercontent.com/assets/8654155/23338925/f617bba2-fc27-11e6-8522-76e1d5d1fb25.jpg" width="250" alt="Главная страница 1200">
      </a>
    </td>
    <td>
      <a href="https://cloud.githubusercontent.com/assets/8654155/23338927/ff865b6c-fc27-11e6-8712-6f65891a1ef5.jpg" target="_blank"><img src="https://cloud.githubusercontent.com/assets/8654155/23338927/ff865b6c-fc27-11e6-8712-6f65891a1ef5.jpg" width="250" alt="Страница каталога товаров 1200"></a>
    </td>
  </tr>
</table>

<sub>[⇧ back to top](#contents)</sub>

## Зависимости

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) или [YARN](https://yarnpkg.com/lang/en/)

<sub>[⇧ back to top](#contents)</sub>

## Начало работы с проектом

### Клонируйте репозиторий:

Клонируйте репозиторий, чтобы получить все исходные файлы доступные на Github:

```bash
$ git clone https://github.com/redeagleap/gllacy.git

$ cd gllacy/
```

А затем установите NPM-модули через:

```bash
#Ностальжи
npm install

#Хипстер
yarn
```

Это установит необходимую папку __node_modules__.

<sub>[⇧ back to top](#contents)</sub>

## Команды

 _С Webpack вы можете использовать следующие NPM Script команды_

| Действие                                                                                    | Npm                  | Yarn              |
| :------------------------------------------------------------------------------------------ | :------------------: | :---------------: |
| Инициализация проекта и документации Sass(/sassdocs/)                                      | `npm run init`       | `yarn run init`   |
| Основная команда для разработки с BrowserSync и Webpack                                     | `npm run dev`        | `yarn dev`        |
| Сжимает JS, Images, CSS. Предназначен для автоматизированной сборки, после Gulp Init.       | `npm run build`      | `yarn build`      |
| Перестройте все файлы JS, за исключением файла приложения JS.                               | `npm run scripts`    | `yarn scripts`    |
| Перестройте все файлы изображений для CSS, создайте растровые и векторные спрайты.          | `npm run uiimages`   | `yarn uiimages`   |
| Скопируйте все файлы изображений для Documentusage.                                         | `npm run htmlassets` | `yarn htmlassets` |
| Сгенерируйте Favicons и фрагмент HTML(сгенерированные файлы вы найдете в `src/ .system/`)   | `npm run favicon`    | `yarn favicon`    |

<sub>[⇧ back to top](#contents)</sub>

## Структура проекта

Папка `dist/` создается после инициализации (`npm run init`) проекта. Все скомпилированные и скопированные файлы папок `src/` находятся там.

**SRC Folderstructure:**

```
src/
├── .system/                          => Internal System Files
├── fonts/                            => Font Files
├── framework/                        => Sass Framework
├── images/                           => All Images
|   ├── bitmapSingle-assets           => Single Bitmap Images
|   ├── bitmapSprite-assets           => Images for Bitmap Sprites
|   ├── htmlimages                    => Content Images (`<img>`)
|   ├── vectorSingle-assets           => Single Vector Images
|   └── vectorSprite-assets           => Vector Images for Vector Sprites
├── js/                               => JS Files (e.g. main.js)
├── scripts/                          => Script files that are not installed
├── structure/                        => Source Files for Copy (e.g. Template Files for a WP Theme)
└── style/                            => Styling Source Files
```

**Dist Folderstructure:**

```
dist/
├── assets/                 => All Assets
|   ├── css/                => CSS Files
|   ├── fonts/              => Font Directory
|   ├── js/                 => Javascript Files
|   └── img/                => Background Image Assets
|       ├── system/         => Images like Favicons
|       ├── bitmaps/        => Bitmap Images
|       └── svgfiles/       => Vector Images
└── images/                 => Content Images
```

<sub>[⇧ back to top](#contents)</sub>

## Использованные технологии

**Скрипты**

- [ES2017](https://medium.com/komenco/what-to-expect-from-javascript-es2017-the-async-edition-618e28819711) - поддержка через компилятор [Babel](https://babeljs.io/).

- [Node](https://nodejs.org/) - это кросс-платформенная среда выполнения JavaScript с открытым исходным кодом, которая выполняет код JavaScript вне браузера.

**Стили**

- [Sass](https://sass-lang.com/) - является самым зрелым, стабильным и мощным языком расширения CSS профессионального уровня в мире.

- [Sassdoc](http://sassdoc.com/) - это система документации для создания красивых и мощных документов в мгновение ока.

- [PostCSS](https://postcss.org/) - это инструмент для преобразования CSS с помощью JavaScript

- [Critical](https://github.com/addyosmani/critical) - извлекает CSS наиболее важный, для как можно более скорого отображения начального экрана сайта.

**Автоматизация**

- [Gulp](https://gulpjs.com/) - представляет собой инструментарий для автоматизации болезненных или трудоемких задач в процессе разработки.

- [Webpack](https://webpack.js.org/) - это пакет для JavaScript модулей.

**Оптимизация**

- [Imagemin](https://github.com/imagemin/imagemin) - минимизирует изображения в формате PNG, JPEG, JPG, GIF и SVG.

- [Uglify](https://github.com/mishoo/UglifyJS2) - инструментарий синтаксического анализатора, минификатора, компрессора и улучшения JavaScript.

**Сервер**

- [BrowserSync](http://www.browsersync.io/) - синхронизированное тестирование в браузере.

**Проверка синтаксиса**

- [ESlint](http://eslint.org/) - линтер для JavaScript.

- [HTMLHint](https://htmlhint.io/) - инструмент анализа статического кода для HTML.

- [Stylelint](https://stylelint.io/) - это мощный, современный линтер, который помогает избежать ошибок и применять соглашения в стилях.

- [Prettier](https://prettier.io/) - для форматирования кода.

**Управление кодом**

- [Editorconfig](http://editorconfig.org/) - помогает разработчикам определять и поддерживать согласованные стили кодирования между различными редакторами и IDE.

- [Git](https://git-scm.com/) - является распределенной системой контроля версий, предназначенной для обработки всего, от небольших до очень больших проектов.

<sub>[⇧ back to top](#contents)</sub>

## Лицензия

Этот проект лицензирован по лицензии MIT - подробности см. В файле [LICENSE](LICENSE).

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

<sub>[⇧ back to top](#contents)</sub>

## Автор

```txt
Глейси сделано с любовью.
---------------------------------------
Автор : Александр Присяжнюк

Почта : insightinyourmind@gmail.com

Github : https://github.com/redeagleap/gllacy.git
```

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

<sub>[⇧ back to top](#contents)</sub>
