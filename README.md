# eslint-config-spx-tsn

Shareable ESlint and Prettier configuration files for Typescript using prettier-standard, sonarjs

## Usage

Install ESlint and Prettier in the project.

``` bash
$ yarn add --save-dev eslint
$ yarn add --save-dev --save-exact prettier
```

Create ESlint and Prettier configurations in the root directory

``` json
// .eslintrc.json
{
  "extends": [
    "spx-tsn"
  ]
}
```

``` js
// .prettierrc.js
module.exports = require('eslint-config-spx-tsn/lib/prettier')
```
