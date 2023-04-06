module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    ignorePatterns: ['**/*.js'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        'react-hooks',
        'import-newlines',
        '@typescript-eslint',
        'sort-imports-es6-autofix',
        'autofix'
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 2,
        'react/jsx-sort-props': 'error',
        'import-newlines/enforce': 'error',
        'no-debugger': 1,
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-sort-props': [
            2,
            {
                callbacksLast: true,
                shorthandFirst: false,
                shorthandLast: true,
                ignoreCase: true,
                noSortAlphabetically: false
            }
        ],
        'sort-imports-es6-autofix/sort-imports-es6': [
            2,
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
            }
        ],
        'prettier/prettier': 'error'
    },
    settings: {
        react: {
            version: 'detect' // React version. "detect" automatically picks the version you have installed.
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

                // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

                // use <root>/path/to/folder/tsconfig.json
                project: 'path/to/folder',

                // Multiple tsconfigs (Useful for monorepos)

                // use a glob pattern
                project: 'packages/*/tsconfig.json',

                // use an array
                project: [
                    'packages/module-a/tsconfig.json',
                    'packages/module-b/tsconfig.json'
                ],

                // use an array of glob patterns
                project: [
                    'packages/*/tsconfig.json',
                    'other-packages/*/tsconfig.json'
                ]
            }
        }
    }
};
