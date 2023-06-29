module.exports = {
  env: { browser: true, es2020: true,  commonjs: true},
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin-react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-indent': ['warn', 'tab'],
    'react/jsx-max-props-per-line': ['warn', { 'when': 'multiline'}],
    'react/jsx-curly-spacing': ['warn', { 'children': true  }],
    'react-refresh/only-export-components': 'warn',
    'react/jsx-wrap-multilines': ['warn', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'ignore',
      'logical': 'ignore',
      'prop': 'ignore'
    }],
    'react/jsx-indent-props': ['warn', 'tab'],
    'react/jsx-one-expression-per-line': ['warn', { 'allow': 'single-child' }],
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": false
    }],
    'react/jsx-closing-bracket-location': [1, 'line-aligned']
  },
}
