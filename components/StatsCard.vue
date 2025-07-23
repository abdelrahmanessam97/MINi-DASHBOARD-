<script setup lang="ts">
import { Card, CardHeader } from "@/components/ui/card";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-vue-next";
import { ref } from "vue";

const stats = ref([
  {
    title: "Total Revenue",
    value: "$45,231",
    change: "+20.1% from last month",
    changeColor: "text-green-600 dark:text-green-400",
    icon: DollarSign,
    iconBg: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180.1% from last month",
    changeColor: "text-green-600 dark:text-green-400",
    icon: Users,
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19% from last month",
    changeColor: "text-green-600 dark:text-green-400",
    icon: ShoppingCart,
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Growth",
    value: "+573",
    change: "+201 since last hour",
    changeColor: "text-green-600 dark:text-green-400",
    icon: TrendingUp,
    iconBg: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
]);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <Card v-for="stat in stats" :key="stat.title" class="hover:shadow-md transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm text-muted-foreground font-medium">
              {{ stat.title }}
            </p>
            <p class="text-2xl font-bold mt-1 text-foreground">
              {{ stat.value }}
            </p>
            <p class="text-sm mt-1" :class="stat.changeColor">
              {{ stat.change }}
            </p>
          </div>
          <div class="p-2 rounded-md" :class="stat.iconBg">
            <component :is="stat.icon" :class="`h-6 w-6 ${stat.iconColor}`" />
          </div>
        </div>
      </CardHeader>
    </Card>
  </div>
</template>
