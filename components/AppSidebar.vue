<script setup lang="ts">
import { ref } from "vue";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { LayoutDashboardIcon, ListChecksIcon, Settings } from "lucide-vue-next";
import SettingsModal from "@/components/SettingsModal.vue";

const showSettings = ref(false);
const selectedItem = ref("Dashboard"); // default active item

const items = [
  { title: "Dashboard", url: "#", icon: LayoutDashboardIcon, value: "Dashboard" },
  { title: "Reports", url: "#", icon: ListChecksIcon, value: "Reports" },
];
</script>

<template>
  <div>
    <Sidebar>
      <SidebarContent class="dark:border-gray-700 dark:bg-bgColorDark bg-bgColorLight">
        <SidebarGroup>
          <SidebarGroupContent class="mt-14 text-lg font-semibold">
            <SidebarMenu>
              <SidebarMenuItem v-for="item in items" :key="item.title" class="p-2" :class="{ 'bg-gray-100  text-skyBlue': selectedItem === item.value }">
                <SidebarMenuButton as-child class="hover:text-skyBlue hover:bg-gray-100" @click="selectedItem = item.value">
                  <a :href="item.url">
                    <component :is="item.icon" class="text-skyBlue" />
                    <span>{{ item.title }}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <!-- Settings item -->
              <SidebarMenuItem class="p-2" :class="{ 'bg-gray-100  text-skyBlue': selectedItem === 'Settings' }">
                <SidebarMenuButton
                  class="hover:text-skyBlue hover:bg-gray-100"
                  @click="
                    () => {
                      showSettings = true;
                      selectedItem = 'Settings';
                    }
                  "
                >
                  <Settings class="text-skyBlue" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>

    <SettingsModal :open="showSettings" @close="showSettings = false" />
  </div>
</template>
