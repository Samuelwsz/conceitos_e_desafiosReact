npm i -D @testing-library/jest-dom @testing-library/react @testing-library/user-event jsdom vitest

vite.config.ts

```
/// <reference types="vitest" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ["./setupFile.ts"],
    environment: "jsdom",
  },
})
```

setupFile.ts

```
  // jest-dom adds custom jest matchers for asserting on DOM nodes.
  // allows you to do things like:
  // expect(element).toHaveTextContent(/react/i)
  // learn more: https://github.com/testing-library/jest-dom
  import '@testing-library/jest-dom';
```

tsconfig.json

```
"include": ["src", "setupFile.ts"],
```

package.json

```
  "scripts": {
    "teste": "vitest"
  },
```

```
npm run teste
```

https://codingpr.com/test-your-react-app-with-vitest-and-react-testing-library/