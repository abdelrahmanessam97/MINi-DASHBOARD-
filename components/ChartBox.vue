<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BarChart from "./ui/chart-bar/BarChart.vue";
import Select from "./ui/select/Select.vue";
import SelectTrigger from "./ui/select/SelectTrigger.vue";
import SelectValue from "./ui/select/SelectValue.vue";
import SelectContent from "./ui/select/SelectContent.vue";
import SelectItem from "./ui/select/SelectItem.vue";
import { Skeleton } from "@/components/ui/skeleton";

const isDark = ref(false);
const loading = ref(true);
const selectedPeriod = ref("7d");

const data = ref<{ name: string; total: number; predicted: number }[]>([]);

onMounted(() => {
  const updateTheme = () => {
    isDark.value = document.documentElement.classList.contains("dark");
  };
  updateTheme();
  const observer = new MutationObserver(updateTheme);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  setTimeout(() => {
    data.value = [
      { name: "Jan", total: 1450, predicted: 1620 },
      { name: "Feb", total: 1730, predicted: 1850 },
      { name: "Mar", total: 1580, predicted: 1680 },
      { name: "Apr", total: 1890, predicted: 1920 },
      { name: "May", total: 2100, predicted: 2200 },
      { name: "Jun", total: 1980, predicted: 2050 },
      { name: "Jul", total: 2200, predicted: 2300 },
    ];
    loading.value = false;
  }, 1000);
});
</script>

<template>
  <div class="lg:col-span-2">
    <Card class="hover:shadow-md transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle class="text-lg font-semibold">Revenue Overview</CardTitle>
        <Select v-model="selectedPeriod">
          <SelectTrigger
            class="w-[120px] h-8 outline-none border-none ring-0 focus:ring-0 focus:outline-none bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent class="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent>
        <div class="text-sm text-gray-600 dark:text-gray-400 min-h-[220px] flex items-center justify-center">
          <BarChart
            v-if="!loading"
            index="name"
            :colors="['blue', 'blue-600']"
            :data="data"
            :categories="['total', 'predicted']"
            :y-formatter="(tick) => (typeof tick === 'number' ? `$ ${new Intl.NumberFormat('us').format(tick)}` : '')"
            :type="'stacked'"
          />
          <Skeleton v-else class="w-full h-[200px] rounded-md bg-gray-200 dark:bg-gray-700" />
        </div>
      </CardContent>
    </Card>
  </div>
</template>
