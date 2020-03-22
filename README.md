# Next Starter

> Have not written code for 4 months now, am rusty. VSCode is being a butt with eslint and autoformatting acting wonky, just wanted to get something going for use later.

- [Next Starter](#next-starter)
  - [Install](#install)
  - [Develop](#develop)
  - [Production](#production)
  - [Secrets](#secrets)
    - [Store a Secret](#store-a-secret)
    - [Remove a Secret](#remove-a-secret)
    - [Rename a Secret](#rename-a-secret)

## Install

```sh
yarn && yarn build
```

## Develop

```sh
yarn dev
```

Visit: http://localhost:3000

## Production

```sh
yarn start
```

## Secrets

### Store a Secret

```sh
now secrets add <secret-name> <secret-value>
```

### Remove a Secret

```sh
now secrets rm <secret-name>
```

### Rename a Secret

```sh
now secrets rename <secret-name> <new-name>
```

---

Open Source MIT (C) Jesse Boyer 2020
