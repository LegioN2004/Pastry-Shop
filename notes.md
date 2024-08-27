# notes for myself

## Error with vite not recoginizing tailwind css

sometimes there may be error with the tailwind css config file so fix that with the sane defaults and sometimes there is some error with the vite.config.ts file as well and to fix that copy paste the following

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'


export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})
```

## learn the way he has setup the assets with exports and all, that way it is easier to map all the assets and use them with ease.