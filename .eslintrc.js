module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
  overrides: [
    {
      files: [],
      env: {
        jest: true,
        'jest/globals': true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
    {
      files: ['app/**/*.{ts,tsx}'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['warn'],
        '@typescript-eslint/explicit-member-accessibility': ['warn'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-unnecessary-condition': ['warn'],
      },
    },
    {
      files: ['storybook/**/*.story.{ts,tsx,js,jsx}'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'react-native/no-inline-styles': 'off',
      },
    },
    {
      files: ['app/sagas/*.ts', 'app/navigations/**/*.{ts,tsx}'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
    {
      files: ['app/components/loader/loaderKit/*.{ts,tsx}'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
};
