<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { useColorMode } from "#imports";

const colorMode = useColorMode();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" class="relative w-10 h-10 rounded-full dark:border-gray-700 dark:bg-bgColorDark bg-bgColorLight text-mainColorDark dark:text-yellow">
        <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="dark:border-gray-700 dark:bg-bgColorDark bg-bgColorLight">
      <DropdownMenuItem @click="colorMode.preference = 'light'">Light</DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'dark'">Dark</DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'system'">System</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
