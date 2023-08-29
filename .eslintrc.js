module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    // ... Add more ESLint rules based on your project's requirements

    // Prettier-related rules
    'prettier/prettier': 'error', // Enforce Prettier formatting
    // Customize Prettier options
    'prettier/tabWidth': [2, { useTabs: true }],
    'prettier/singleQuote': ['error', true],
    'prettier/trailingComma': ['error', 'es5'],
    'prettier/bracketSpacing': ['error', true],
    'prettier/jsxSingleQuote': ['error', true],
    'prettier/bracketSameLine': ['error', true],
    'prettier/singleAttributePerLine': ['error', true]
  },
  settings: {
    react: {
      version: 'detect' // Detect the installed React version
    }
  }
};
