module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-caller': 1,
    'no-catch-shadow': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-constant-condition': 2,
    'no-continue': 0,
    'no-control-regex': 2,
    'no-delete-var': 2,
    'no-div-regex': 1,
    'no-dupe-keys': 2,
    'no-dupe-args': 2,
    'no-duplicate-case': 2,
    'no-else-return': 0,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-eq-null': 2,
    'no-eval': 1,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-fallthrough': 1,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implicit-coercion': 1,
    'no-implied-eval': 2,
    'no-inline-comments': 0,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 0,
    'no-loop-func': 1,
    'no-mixed-requires': [0, false],
    'no-mixed-spaces-and-tabs': [2, false],
    'linebreak-style': [0, 'windows'],
    'no-multi-spaces': 1,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [
      1,
      {
        max: 2
      }
    ],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 0,
    'no-new': 1,
    'no-new-func': 1,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 0,
    'no-plusplus': 0,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-restricted-modules': 0,
    'no-return-assign': 1,
    'no-script-url': 0,
    'no-self-compare': 2,
    'no-sequences': 0,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 1,
    'no-this-before-super': 0,
    'no-throw-literal': 2,
    'no-undef': 1,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-underscore-dangle': 1,
    'no-unneeded-ternary': 2,
    'no-unreachable': 2,
    'no-unused-expressions': 0,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used'
      }
    ],
    'no-use-before-define': 2,
    'no-useless-call': 2,
    'no-void': 2,
    'no-var': 0,
    'no-warning-comments': [
      1,
      {
        terms: ['todo', 'fixme', 'xxx'],
        location: 'start'
      }
    ],
    'no-with': 2,

    'array-bracket-spacing': [2, 'never'],
    'brace-style': [1, '1tbs'],
    'callback-return': 1,
    'comma-dangle': [2, 'never'],
    'comma-spacing': 0,
    'comma-style': [2, 'last'],
    complexity: [0, 11],
    'computed-property-spacing': [0, 'never'],
    'constructor-super': 0,
    curly: [2, 'all'],
    'default-case': 2,
    'dot-location': 0,
    'dot-notation': [
      0,
      {
        allowKeywords: true
      }
    ],
    'eol-last': 0,
    'func-names': 0,
    'func-style': [0, 'declaration'],
    'generator-star-spacing': 0,
    'guard-for-in': 0,
    'handle-callback-err': 0,
    'id-length': 0,
    'init-declarations': 0,
    'key-spacing': [
      0,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'lines-around-comment': 0,
    'max-depth': [0, 4],
    'max-len': [0, 80, 4],
    'max-nested-callbacks': [0, 2],
    'max-params': [0, 3],
    'max-statements': [0, 10],
    'new-parens': 2,
    'newline-after-var': 2,
    'object-curly-spacing': [0, 'never'],
    'operator-assignment': [0, 'always'],
    'padded-blocks': 0,
    'prefer-const': 0,
    'prefer-spread': 0,
    'prefer-reflect': 0,
    quotes: [1, 'single'],
    'id-match': 0,
    'require-yield': 0,
    semi: [2, 'always'],
    'semi-spacing': [
      0,
      {
        before: false,
        after: true
      }
    ],
    'sort-vars': 0,
    'space-after-keywords': [0, 'always'],
    'space-before-blocks': [0, 'always'],
    'space-before-function-paren': [0, 'always'],
    'space-in-parens': [0, 'never'],
    'space-infix-ops': 0,
    'space-unary-ops': [
      0,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': 0,
    strict: 2,
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'inside'],
    'wrap-regex': 0,
    yoda: [2, 'never']
  }
};
