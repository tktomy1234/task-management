
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "ecmaVersion": 2021,
                "sourceType": "module",
                "ecmaFeatures": {
                    "jsx": true
                }
            },
            "plugins": [
                "@typescript-eslint"
            ],
            "rules": {
                // Add any specific rules for TypeScript here
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // Add any specific rules for JavaScript here
    }
}
