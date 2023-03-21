module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks'
  ],
  rules: {
    indent: [2, 2],
    'react/jsx-indent': [2, 2],
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'linebreak-style': 0,
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'eol-last': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true, ignoreAttribute: ['data-testid', 'to']
    }],
    'object-curly-spacing': ['error', 'always'],
    'max-len': 'off',
    'comma-dangle': 'off',
    'arrow-body-style': 'off',
    'no-trailing-spaces': 'off',
    'padded-blocks': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-multiple-empty-lines': 'off',
    'no-param-reassign': 'off'
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ]
};
