<script setup lang="ts"></script>

<template>
  <div class="">
    <StatsCard />
    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <ClientOnly>
        <ChartBox />
        <RecentActivity />
      </ClientOnly>
    </div>
  </div>
</template>
