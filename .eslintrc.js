module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: 'latest'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 8
  },
  ignorePatterns: [
    'node_modules/*',
    '.next/*',
    '.out/*',
    '!.prettierrc.js',
    'next.config.js',
    'next-i18next.config.js'
  ],
  plugins: [
    '@typescript-eslint',
    'unused-imports'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    'indent': ['warn', 2, { SwitchCase: 1 }],
    'quotes': ['error', 'single'],
    'arrow-parens': ['warn', 'always'],
    'comma-dangle': ['warn', 'never'],
    'no-var': 'error',
    'no-dupe-class-members': 'off',
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': ['warn', 'beside'],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 1 }],
    'function-call-argument-newline': ['warn', 'consistent'],
    'function-paren-newline': ['warn', 'consistent'],
    'array-element-newline': ['warn', 'consistent'],
    'array-bracket-newline': ['warn', { multiline: true }],
    '@typescript-eslint/no-use-before-define': ['warn', { variables: false }],
    '@typescript-eslint/lines-between-class-members': ['warn', { exceptAfterSingleLine: true }],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-inferrable-types': ['warn', { ignoreParameters: true }],
    '@typescript-eslint/explicit-module-boundary-types': ['warn', { allowArgumentsExplicitlyTypedAsAny: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'warn', {
        accessibility: 'explicit',
        overrides: { constructors: 'no-public' }
      }
    ],
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/array-type': ['warn', { default: 'generic', readonly: 'generic' }],
    'unused-imports/no-unused-imports-ts': 'warn',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', argsIgnorePattern: '^_', ignoreRestSiblings: true }
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-boolean-value': 'off',
    'react/self-closing-comp': ['warn', { 'component': true, 'html': true }],
    'react/jsx-max-props-per-line': [1, { 'maximum': 1 }],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/media-has-caption': 'off'
  },
  overrides: [
    {
      'files': ['*actions.ts'],
      'rules': {
        'function-call-argument-newline': ['warn', 'always'],
        'function-paren-newline': ['warn', 'always']
      }
    },
    {
      'files': ['*reducer.ts'],
      'rules': {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    },
    {
      'files': ['*selectors.ts'],
      'rules': {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'function-call-argument-newline': ['warn', 'always'],
        'function-paren-newline': ['warn', 'multiline']
      }
    }
  ]
};
