import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default [
  {
    ignores: ['dist'], // 무시할 디렉토리
    files: ['**/*.{ts,tsx}'], // TypeScript 및 TSX 파일 대상
    languageOptions: {
      parser: tsParser, // TypeScript 파서 설정
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        React: 'readonly', // React를 전역으로 읽기 전용으로 설정
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: '18.2', // React 버전 명시
        runtime: 'automatic', // React 17+ JSX 변환 사용 시 자동 런타임 설정
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin, // TypeScript ESLint 플러그인 추가
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      react,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      tailwindcss,
    },
    rules: {
      ...js.configs.recommended.rules, // 기본 JavaScript 권장 규칙
      ...reactHooks.configs.recommended.rules, // React Hooks 권장 규칙

      // 규칙 설정
      'react/react-in-jsx-scope': 'off', // React 17+에서는 필요 없음
      'prettier/prettier': 'error', // Prettier 규칙 적용
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      eqeqeq: ['error', 'always'], // 항상 === 사용

      // TypeScript 규칙
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_', // _로 시작하는 변수 무시
          argsIgnorePattern: '^_', // _로 시작하는 함수 매개변수 무시
          ignoreRestSiblings: true, // 구조 분해 할당의 나머지 속성 무시
        },
      ],

      // TailwindCSS 규칙
      'tailwindcss/classnames-order': 'warn', // TailwindCSS 클래스 순서 경고
      'tailwindcss/no-custom-classname': 'off', // 사용자 정의 클래스 이름 허용

      // 기타 규칙 비활성화
      'no-unused-vars': 'off', // 기본 no-unused-vars 비활성화 (TS 규칙 사용)
    },
  },
];