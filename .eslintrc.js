module.exports = {
  "parser": "babel-eslint", // I want to use babel-eslint for parsing!
  "rules": {
    "comma-dangle": 0, // dangling commas are ok
    "indent": [2, 2, {
      "SwitchCase": 1
    }],
    "jsx-quotes": 1,
    "linebreak-style": [2, "unix"],
    "quotes": [2, "single"],
    "react/display-name": 1,
    "react/forbid-prop-types": 1,
    "react/jsx-boolean-value": 1,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-curly-spacing": 1,
    "react/jsx-indent-props": [2, 2],
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-literals": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-multi-comp": 1,
    "react/no-set-state": 1,
    "react/no-unknown-property": 1,
    "react/prefer-es6-class": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "semi": [2, "always"]
  },
  "env": {
    "es6": true,
    "browser": true,
    "mocha": true,
  },
  // "extends": "eslint:recommended",
  "ecmaFeatures": {
    "jsx": true,
    "experimentalObjectRestSpread": true
  },
  "plugins": [
    "react"
  ]
}