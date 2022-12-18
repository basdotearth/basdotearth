const tsConfig = require('./tsconfig.json');
const tsPathAliases = Object.keys(tsConfig.compilerOptions.paths).map(key => {
  return { pattern: `${key}*`, group: 'internal' };
});

module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': ['.css$'],
  },
  rules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'brace-style': 2,
    'class-methods-use-this': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'consistent-return': 'off',
    curly: ['error'],
    'default-case': 'off',
    'dot-notation': 'error',
    'eol-last': ['error', 'always'],
    eqeqeq: ['error', 'smart'],
    'import/order': ['error', {
      pathGroups: [
        ...tsPathAliases,
        { pattern: 'react', group: 'external', position: 'before' },
      ],
      pathGroupsExcludedImportTypes: ['react'],
      groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index', 'object'],
      'newlines-between': 'always',
      alphabetize: { order: 'ignore', caseInsensitive: true },
      warnOnUnassignedImports: true,
    }],
    indent: 'off',
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: false,
        allowObjectStart: true,
        allowObjectEnd: false,
        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'no-alert': 'error',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'off',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-lone-blocks': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-native-reassign': 'error',
    'no-new': 'off',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': ['error'],
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'off',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-void': 'error',
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    radix: 'off',
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'react/prop-types': 'off',
    semi: ['error', 'always'],
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'single', 'multiple', 'all'],
      allowSeparatedGroups: true,
    }],
    'vars-on-top': 'error',
    'wrap-iife': 'off',
    yoda: 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
