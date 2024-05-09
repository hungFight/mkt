/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly RENDERER_VITE_APP_NAME: string
  readonly RENDERER_VITE_APP_VERSION: string
  readonly RENDERER_VITE_APP_LAST_UPDATE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
