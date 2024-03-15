# Directory Service Manager App

## 👷 Установка

Проект успешно запускается в следующем окружении: node **v18.16.0**, yarn **v1.22.19**

Установка yarn: `npm install --global yarn`

Для установки зависимостей необхоимо создать файл  .npmrc в /frontend

Пример содержимого .npmrc:
```
registry=https://nexus.inno.tech/repository/dbp-group-npm-development
@inno-core:registry=https://nexus.inno.tech/repository/dbp-group-npm-development
strict-ssl=false
//nexus.inno.tech/repository/:_auth=СТРОКА_АВТОРИЗАЦИИ
```
Есть два варианта указания значения в последней строке:
1. Взять строку `LOGIN:PASSWORD` со своими данными и получить её base64-кодировку (например, через www.base64encode.org). Подставить полученную строку в качестве значения ключа.
2. Указать свои данные напрямую в файле: `//nexus.inno.tech/repository/:_auth=base64Encode(LOGIN:PASSWORD)`

Установка зависимостей - команду запускать из /frontend

```
yarn
```

## 🚀 Запуск

Запуск проекта в development режиме

```
yarn local
```

При необходимости можно поднять каждый сервис отдельно:

* `yarn local` - Запуск веб-приложения и MOCK сервера
* `yarn start` - Запуск веб-приложения
* `yarn start:server` - Запуск MOCK сервера
* `yarn test` - Запуск юнит тестов
* `yarn lint` - Запуск eslint с автоматическим исправлением

Однако стоит учитывать что prettier, linter и тесты запускаются автоматически на прекоммит хук.

## 🏗 Запуск бэкенда
* Для Windows запустить docker desktop
* Установить зависимости для мок сервера из директории `/server` командой `yarn install`
1. В файле dsm/gradle.properties добавить креды для нексуса
   ```
   systemProp.inno.nexus.user=
   systemProp.inno.nexus.password=
   ```
   (либо в файле c/users/.gradle/gradle.properties)
2. Перейти в папку /docker и запустить docker-compose командой `make dsm/up`
3. Задать пароль для администратора
   samba `docker exec samba-dc samba-tool user setpassword Administrator --newpassword=12345678Aa`
4. Остановка контейнера осуществляется командой `make dsm/down`
5. В файле /frontend/vite.config.js сменить адрес прокси с http://localhost:8080 на адрес бэкенда
6. Сборка бэка `./gradlew :backend:build -x :backend:test` из корня фасада (удобнее запускать через intellij idea)
7. Запуск бэка `./gradlew :backend:bootRun` из корня фасада
## 🏗 Сборка

```
yarn build
```

## ⚙️ Разработка

- [Workflow разработки](documentation/docs/workflow.md)
- [Правила наименования](documentation/docs/name-rules.md)
- [Feature toggle](documentation/docs/feature-toggle.md)

## 📑 Заметки

- [Типовая структура проектов](documentation/docs/structure.md)
- [Паттерны написания кода](documentation/docs/code-style.md)
- [Правила для стилевых файлов](documentation/docs/css-code-style.md)
- [Eslint в наших проектах](documentation/docs/eslint.md)
- [Code review](documentation/docs/code-review.md)
- [Тестирование](documentation/docs/testing.md)

Для проверки наличия ошибок в коде а так же автоматическое исправление его визуальных конструкций в проекте
используется [husky](https://typicode.github.io/husky/#/).
Данный пакет предустановлен при клонировании репозитория, в случае его некорректной работы в проекте имеется следующий
скрипт для его установки:

```
yarn postinstall
```

В случае появления ошибок связанных с тем что файл husky не является исполняемым (pre-commit hook not executable), в
таком случае можно сделать его исполняемым при помощи следующих команд:

```
chmod ug+x .husky/pre-commit # make file executable
git config core.filemode false # to ignore file mode changes
```

### Работа с моками

В проекте есть папка `server`, собственно это и есть mock server
Он написан на node.js

