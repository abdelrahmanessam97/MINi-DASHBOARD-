<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard } from "lucide-vue-next";
import SidebarTrigger from "./ui/sidebar/SidebarTrigger.vue";
import ToggleTheme from "./ToggleTheme.vue";

const user = {
  name: "Admin",
  avatar: "https://tse4.mm.bing.net/th/id/OIP._oHjxcDbPRe0HSQA1B4SygHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
};
</script>

<template>
  <header class="w-full h-16 flex items-center px-6 border-b dark:border-gray-700 dark:bg-bgColorDark bg-bgColorLight">
    <SidebarTrigger class="me-10 flex items-center justify-center text-mainColorDark dark:text-mainColorLight" />
    <div class="w-full flex justify-between items-center">
      <!-- Left: Icon logo + text -->
      <div class="flex items-center gap-2">
        <LayoutDashboard class="w-8 h-8 text-skyBlue font-extrabold" />
        <span class="text-lg font-semibold hidden sm:block">Dashboard</span>
      </div>

      <!-- Right: User info -->
      <div class="flex items-center gap-3">
        <span class="text-md font-semibold text-skyBlue">{{ user.name }}</span>
        <!-- <Avatar /> -->
        <Avatar>
          <AvatarImage :src="user.avatar" class="w-8 h-8" alt="@admin" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ToggleTheme />
      </div>
    </div>
  </header>
</template>
