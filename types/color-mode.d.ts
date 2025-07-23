declare module "#app" {
  interface NuxtApp {
    $colorMode: {
      preference: "light" | "dark" | "system";
      value: "light" | "dark";
      unknown: boolean;
    };
  }
}

export {};
