# vue-elevator-emulator

## Приложение эмулятора лифта

## Ссылка на хостинг с проектом: http://81.163.26.156:5000

## Описание проекта
В данном проекте реализован эмулятор лифта(ов). На начальном экране находится окно конфигурации, которое позволяет настроить кол-во этажей, кол-во лифтов и время стоянки на этаже. После выставления настроек пользователь переходит в окно лифтов, которое генерируется в соответствии с данными, которые ввёл пользователь в окне конфигурации.

Отдельные детали реализации:(Лифт, сборщик лифтов) вынесены в отдельные классы в дирректории "core", тем самым позволяя делать приложение масштабируемым для новых фич и функций.

После первостепенно решённой технической задачи были написаны unit тесты для главных узлов системы, позволяющие упростить процесс отлова ошибок во время рефакторинга.

## Стек: Vue(Vue-cli) + Typescript(class-style-components) + Jest
## Контакты:
```
Telegram: @nzweb
Email: nzweb@vk.com 
```


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
````

## Файловая структура
```
├── babel.config.js
├── dist
│   ├── css
│   │   └── app.b2e58c21.css
│   ├── favicon.ico
│   ├── index.html
│   └── js
│       ├── app.dbeb2e1e.js
│       ├── app.dbeb2e1e.js.map
│       ├── chunk-vendors.f0e15b12.js
│       └── chunk-vendors.f0e15b12.js.map
├── jest.config.js
├── lint-staged.config.js
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── AppElevator
│   │   │   ├── AppElevator.scss
│   │   │   ├── AppElevator.ts
│   │   │   └── AppElevator.vue
│   │   └── AppTouchButton
│   │       ├── AppTouchButton.scss
│   │       ├── AppTouchButton.ts
│   │       └── AppTouchButton.vue
│   ├── core
│   │   ├── elevators.builder.ts
│   │   └── elevator.ts
│   ├── layouts
│   │   ├── MainLayout
│   │   │   ├── MainLayout.scss
│   │   │   ├── MainLayout.ts
│   │   │   └── MainLayout.vue
│   │   └── QuestionsLayout
│   │       ├── QuestionsLayout.scss
│   │       ├── QuestionsLayout.ts
│   │       └── QuestionsLayout.vue
│   ├── main.ts
│   ├── shims-vue.d.ts
│   └── types
│       ├── config.interface.ts
│       └── status.enum.ts
├── tests
│   └── unit
│       ├── AppElevator.spec.ts
│       └── AppTouchButton.spec.ts
├── tsconfig.json
├── vue.config.js
└── yarn.lock

