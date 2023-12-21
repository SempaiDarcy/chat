module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',//в конец массива
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: [
        'react-refresh',
        'prettier',
        'import'
    ],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        'prettier/prettier': 'error',
        'semi': ['error', 'never'],
        'import/order': ['error', {
            'groups': ['builtin', 'external', 'internal', ['sibling', 'parent']],
            'newlines-between': 'always',
            'alphabetize': {
                order: 'asc',
                caseInsensitive: true,
            },
        }],
    },
    settings: {
        'import/resolver': {
            // Указываем ESLint использовать TypeScript для разрешения алиасов
            typescript: {},
        },
    },
};
