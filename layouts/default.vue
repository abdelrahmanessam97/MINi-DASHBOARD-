<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppSidebar from "~/components/AppSidebar.vue";
import SidebarProvider from "~/components/ui/sidebar/SidebarProvider.vue";
</script>

<template>
  <div class="flex min-h-screen w-full">
    <SidebarProvider style="--sidebar-width: 12rem; --sidebar-width-mobile: 10rem">
      <AppSidebar />
      <main class="flex flex-col flex-1 bg-bgColorLight dark:bg-bgMainDark">
        <AppHeader />
        <div class="p-6">
          <slot />
        </div>
      </main>
    </SidebarProvider>
  </div>
</template>
