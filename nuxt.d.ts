// nuxt.d.ts
export interface ColorModeConfig {
  preference?: string;
  fallback?: string;
  classSuffix?: string;
}

declare module "nuxt/schema" {
  interface NuxtConfig {
    colorMode?: ColorModeConfig;
  }
}
