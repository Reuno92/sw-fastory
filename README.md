# Preconfigured project
for nodejs with ts-node
 
## Installation
```bash
git clone https://gitlab.com/renaudQwest/ts-node-configured.git
```

## Start
```bash
yarn install
```

## Utilization

### Before commit 
```bash
yarn commit
```
It uses eslint and prettier in this order.

ESLint is configuring in file `.eslintrc` with different plugins such as:
```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "no-console": 0,
    "prettier/prettier": 1
  }
}
```

 As for it, prettier perform some rules from file called `.prettierrc` on all files in directory `src/**/*.ts`.
 
```json
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": false,
  "printWidth": 80
}
``` 
 
### Start in development
```bash
yarn start:dev
```

### Start in production
```bash
yarn start
```

### Testing
```bash
yarn test
```

Unit test based with two modules `Mocha` and `Chai` for more flexibility.
  

### Coming soon

* Installation Husky (Scripting lint and testing before commit and before push )

