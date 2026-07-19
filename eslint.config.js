import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import globals from 'globals';

export default [
  // Базовые правила для всего
  js.configs.recommended,
  // Рекомендованные правила для Svelte
  ...svelte.configs['flat/recommended'],
  // Наши личные правила
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        parser: {
          js: '@typescript-eslint/parser',
          ts: '@typescript-eslint/parser',
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Стиль: отступы 2 пробела, одинарные кавычки
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      // Убираем лишние пробелы
      'no-multi-spaces': 'error',
      'space-infix-ops': 'error',
      'object-curly-spacing': ['error', 'always'],
      // Убираем лишние пустые строки
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
      'padded-blocks': ['error', 'never'],
      // Предупреждения вместо ошибок для мелочей
      'no-unused-vars': ['warn', { 'varsIgnorePattern': '^\\$\\$|^_', 'argsIgnorePattern': '^_' }],
      'no-console': 'warn',
      'space-before-blocks': ['error', 'always'],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs', { 'allowSingleLine': false }], // Запрещаем одно-строчные блоки
    },
  },
  // Правила для JS/TS файлов
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      parser: tsParser, // <-- используем TS парсер
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json', // если нужен strict type checking
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-multi-spaces': 'error',
      'space-infix-ops': 'error',
      'object-curly-spacing': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
      'padded-blocks': ['error', 'never'],
    },
  },
  // Игнорируем ненужные папки
  {
    ignores: ['node_modules', 'dist', 'build', '*.d.ts'],
  },
];