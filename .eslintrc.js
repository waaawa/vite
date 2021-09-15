module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
      alias: {
        map: [
          ['@', './src/'],
          ['@common', './src/common/'],
          ['@types', './src/types/'],
          ['@components', './src/components/'],
          ['@icons', './src/components/_icons/'],
          ['@animations', './src/components/_animations/'],
          ['@style', './src/style/'],
          ['@views', './src/views/'],
          ['@router', './src/router/'],
          ['@store', './src/store/'],
          ['@assets', './src/assets/'],
          ['@state', './src/state/'],
          ['@utils', './src/utils/'],
        ],
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.vue'],
      },
    },
  },
  globals: {
    JSX: true,
    HTMLElementTagNameMap: true,
    SVGElementTagNameMap: true,
  },
};
