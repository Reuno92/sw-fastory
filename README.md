# Preconfigured project
for nodejs with ts-node
 
## Installation
```git
git clone https://gitlab.com/renaudQwest/ts-node-configured.git
```

## Start
```git
yarn install
```

## Utilization

### Before commit 
```git
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
```git
yarn start:dev
```

### Start in production
```git
yarn start
```

### Coming soon

* Installation Unit testing
* Installation Husky (Scripting lint and testing before commit and before push )

