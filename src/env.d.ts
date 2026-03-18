/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_URL: string;
  readonly API_TOKEN: string;
  readonly VITE_API_MOCKED: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
