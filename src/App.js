{
  "name": "grassland-verein",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://chifru19.github.io/grassland-verein",
  "author": {
    "name": "Frank Fru",
    "url": "https://frankfru.com",
    "github": "https://github.com/chifru19",
    "linkedin": "https://www.linkedin.com/in/frankfru/",
    "email": "contact@frankfru.com"
  },
  "dependencies": {
    "@testing-library/dom": "^10.4.1",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^13.5.0",
    "gh-pages": "^6.1.1",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    "rules": {
      "no-unused-vars": "warn",
      "no-console": "off",
      "react-hooks/rules-of-hooks": "error"
    }
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "jest": {
    "roots": [
      "<rootDir>/src"
    ],
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/index.js",
      "!src/reportWebVitals.js"
    ],
    "setupFiles": [
      "react-app-polyfill/jsdom"
    ],
    "setupFilesAfterEnv": [
      "<rootDir>/src/setupTests.js"
    ],
    "testMatch": [
      "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
      "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    "testEnvironment": "jsdom",
    "transform": {
      "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/node_modules/react-scripts/config/jest/babelTransform.js",
      "^.+\\.css$": "<rootDir>/node_modules/react-scripts/config/jest/cssTransform.js",
      "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/node_modules/react-scripts/config/jest/fileTransform.js"
    },
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$"
    ],
    "modulePaths": [],
    "moduleNameMapper": {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
    },
    "moduleFileExtensions": [
      "web.js",
      "js",
      "web.ts",
      "ts",
      "web.jsx",
      "jsx",
      "json",
      "web.tsx",
      "tsx",
      "node"
    ],
    "watchPlugins": [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname"
    ],
    "resetMocks": true,
    "verbose": true,
    "notify": true,
    "clearMocks": true,
    "errorOnDeprecated": true,
    "maxWorkers": "50%",
    "testRunner": "jest-circus/runner"
  },
  "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      "@babel/plugin-syntax-jsx",
      "@babel/plugin-proposal-private-property-in-object"
    ]
  },
  "postcss": {
    "plugins": {
      "tailwindcss": {
        "config": "./tailwind.config.js"
      },
      "autoprefixer": {
        "flexbox": "no-2009",
        "grid": "autoplace"
      },
      "postcss-flexbugs-fixes": {},
      "postcss-preset-env": {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3
      },
      "postcss-import": {},
      "postcss-nested": {}
    }
  },
  "description": "Digital platform for Deutsch-Kamerunischer Kulturverein Grassland e.V. Berlin.",
  "license": "MIT",
  "keywords": [
    "Culture",
    "Verein",
    "Cameroon",
    "Berlin",
    "Grassland"
  ]
}