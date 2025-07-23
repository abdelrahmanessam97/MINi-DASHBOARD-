<script setup lang="ts">
import { ref } from "vue";
import { Bell, Mail, ShoppingCart, Users } from "lucide-vue-next";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const activities = ref([
  {
    id: 1,
    title: "New order received",
    description: "Order #1234 from John Doe",
    time: "5 minutes ago",
    icon: ShoppingCart,
    iconBg: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    id: 2,
    title: "New user registered",
    description: "welcome@example.com joined",
    time: "10 minutes ago",
    icon: Users,
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: 3,
    title: "System notification",
    description: "Server maintenance scheduled",
    time: "1 hour ago",
    icon: Bell,
    iconBg: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    id: 4,
    title: "Email campaign sent",
    description: "Monthly newsletter delivered",
    time: "2 hours ago",
    icon: Mail,
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: 5,
    title: "New order received",
    description: "Order #1844 from John Doe",
    time: "5 minutes ago",
    icon: ShoppingCart,
    iconBg: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
  },
]);
</script>

<template>
  <Card class="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
    <CardHeader>
      <h2 class="text-lg font-semibold text-foreground">Recent Activity</h2>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        <div v-for="activity in activities" :key="activity.id" class="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
          <div :class="`p-2 rounded-full ${activity.iconBg}`">
            <component :is="activity.icon" :class="`h-4 w-4 ${activity.iconColor}`" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-foreground">
              {{ activity.title }}
            </p>
            <p class="text-sm text-muted-foreground mt-1">
              {{ activity.description }}
            </p>
            <p class="text-xs text-muted-foreground mt-1">
              {{ activity.time }}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
