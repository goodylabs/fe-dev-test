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
    "dependencies",
    "flowtype"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "extends": "airbnb",
  "rules": {
    "no-console": 0,
    "comma-dangle": ["off"],
    "no-unused-vars": [WARNING],
    "no-use-before-define": 0,
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
    "dependencies/no-unresolved": 0,
    "max-len": ["off"],
    "react/prop-types": 0, // flow is enough....
    "flowtype/boolean-style": [
      2,
      "boolean"
    ],
    "flowtype/define-flow-type": 1,
    "flowtype/delimiter-dangle": [
      2,
      "never"
    ],
    "flowtype/generic-spacing": [
      2,
      "never"
    ],
    "flowtype/no-primitive-constructor-types": 2,
    "flowtype/no-types-missing-file-annotation": 2,
    "flowtype/no-weak-types": 0,
    "flowtype/object-type-delimiter": [
      2,
      "comma"
    ],
    "flowtype/require-parameter-type": 2,
    "flowtype/require-return-type": [
      2,
      "always",
      {
        "annotateUndefined": "never"
      }
    ],
    "flowtype/require-valid-file-annotation": 2,
    "flowtype/semi": [
      2,
      "always"
    ],
    "flowtype/space-after-type-colon": [
      2,
      "always"
    ],
    "flowtype/space-before-generic-bracket": [
      2,
      "never"
    ],
    "flowtype/space-before-type-colon": [
      2,
      "never"
    ],
    "flowtype/type-id-match": [
      2,
      "^([A-Z][a-z0-9]+)+Type$"
    ],
    "flowtype/union-intersection-spacing": [
      2,
      "always"
    ],
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 1,
    "flowtype/delimiter-dangle": 0
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  }
}
