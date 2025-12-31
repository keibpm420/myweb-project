import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
    // 1. 基本となる設定をそのまま並べる
    js.configs.recommended,
    ...tseslint.configs.recommended,

    // 2. 個別の詳細設定
    {
        ignores: ["dist"],
    },
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                parser: tseslint.parser,
            },
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { varsIgnorePattern: "^[A-Z_]" },
            ],
        },
    }
);
