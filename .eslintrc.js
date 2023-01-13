module.exports = {
    root: true,
    env: {
        'browser': true,
        // 'es2020': true,
        'node': true,
    },
    extends: [
        // 'plugin:react/recommended',
        './slint-config-mt-react.js',
        './eslintrc.typescript-react.js',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 11,
        'sourceType': 'module',
    },
    // plugins: [
    //     'react',
    //     '@typescript-eslint',
    // ],
    rules: {
        // 因为我在windows上开发的，到时候用到mac时再改吧
        'linebreak-style': ['off', 'unix'],
        // 单行允许无限字
        'max-len': ['off'],
        // 不用的warn就好，不然会很难受
        'no-unused-vars': ['warn'],
        // 我个人还是觉得对象最好还是有空格比较清晰
        'object-curly-spacing': ['error', 'always'],
        // 函数的括号前要有空格
        'space-before-function-paren': 0,
    },
    settings: {
        'import/resolver': {
            alias: {
              map: [
                ['@src/*', './app/src'],
                ['@coomon/*', './app/src/coomon'],
                ['@renderer/*', './app/renderer'],
              ],
              extensions: ['.ts', '.js', '.jsx', '.tsx', '.json', '.d.ts'],
            },
          },
    },
};

