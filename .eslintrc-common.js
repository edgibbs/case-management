module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jasmine/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['react', 'jsx-a11y', 'jest', 'prettier', 'standard', 'jasmine'],
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
    jasmine: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'jsx-a11y/label-has-for': [
      'error',
      {
        components: ['label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: true,
      },
    ],
    'jasmine/new-line-before-expect': 0,
    'jasmine/new-line-between-declarations': 2,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
};
