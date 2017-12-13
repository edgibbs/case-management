module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['react', 'jsx-a11y', 'jest', 'prettier', 'standard'],
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
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
  },
  parserOptions: {
    sourceType: 'module',
  },
};
