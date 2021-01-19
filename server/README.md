<h2 align="center">_Profiler server</h2>

<p align="center">NestJS server app for _Profiler application.</p>

## Description

[Profiler](https://github.com/gelugu/profiler) is a personal web application for store persanal data about people you know.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
For start server You need src/config.js file like this:
```js
export default {
  SERVER: {
    HOST: "Your_host",
    PORT: "Your_hosts_port",
  },
  TGBOT: {
    TOKEN: "Your_bot_tokken",
    CHATID: "chat_id_from_bot",
  },
  JWTSECRET:
    "any_random_string",
  PASSWORD_RELOAD_TIME: time_in_milliseconds_before_password_die, // <= Number
  MAX_LOGIN_TRYING: max_login_inputs_before_block, // <= Number
};

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Kraev Mikhail](https://github/gelugu)
- Telegram - [@gelugu](https://tg.me/gelugu)
- VK - [Kraev Mikhail](https://vk.com/gelugu)

## License

[LICENSE](suck).
