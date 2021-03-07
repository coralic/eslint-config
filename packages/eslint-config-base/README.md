# `@coralic/eslint-config-base`

ESLint configuration for non-typescript projects

If you need Typescript & React, see [@coralic/eslint-config](https://npmjs.com/@coralic/eslint-config).

## Usage

### Install packages

Install the correct versions of each package, which are listed by the command:

```sh
yarn info "@coralic/eslint-config-base@latest" peerDependencies
```

Then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

If using **npm 5+**, use also this shortcut

```sh
npx install-peerdeps --dev @coralic/eslint-config-base
```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.

### Configure ESLint

Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

```json
{
  "extends": ["@coralic/eslint-config-base"]
}
```

### Configure Prettier

Create `.prettierrc.js` and add the following:

```javascript
module.exports = require('@coralic/eslint-config-base/lib/prettier-config')
```
