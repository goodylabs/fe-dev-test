function isTruthy(value) {
  if (!value) return false;
  return ['1', 'true'].indexOf(value.toLowerCase()) >= 0;
}

// Warnings are errors in CI
var OFF = 'off';
var ERROR = 'error';
var WARNING = isTruthy(process.env.GIT_ENV) ? ERROR : 'warn';

module.exports = {
  "plugins": [
    "dependencies"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "extends": "airbnb",
  "rules": {
    "comma-dangle": ["off"],
    "no-unused-vars": [WARNING],
    "object-curly-spacing": ["off"],
    "padded-blocks": ["off"],
    "react/jsx-closing-bracket-location": ["off"],
    "react/jsx-space-before-closing": ["off"],
    "react/prefer-stateless-function": ["off"],
    "no-underscore-dangle": [ "error", { "allowAfterThis": true }],
    "space-before-function-paren": ["error", {
        "anonymous": "ignore",
        "named": "ignore",
        "asyncArrow": "ignore"
    }],
    "import/no-unresolved": ["error", {
        "ignore": [
          "config",
          "components/",
          "stores/",
          "actions/",
          "sources/",
          "styles/",
          "images/"
        ]
    }],
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": "off",
    "react/no-danger": "off",
    "react/style-prop-object": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "dependencies/case-sensitive": 1,
    // "dependencies/no-cycles": 1,
    "dependencies/no-unresolved": 1,
    "max-len": ["off"],
  },
}
