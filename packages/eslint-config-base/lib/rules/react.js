module.exports = {
  plugins: ['react'],

  rules: {
    'react/destructuring-assignment': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',

    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
  },
}
