<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
}

defineProps<Props>();
defineEmits(["close"]);

const username = ref("");
const email = ref("");
const notifications = ref(true);

function saveSettings() {
  console.log("Username:", username.value);
  console.log("Email:", email.value);
  console.log("Notifications:", notifications.value);
}
</script>

<template>
  <Dialog :open="open" @update:open="$emit('close')">
    <DialogContent class="sm:max-w-md bg-bgColorLight dark:bg-bgColorDark text-mainColorDark dark:text-mainColorLight border border-gray-300 dark:border-gray-700">
      <DialogHeader>
        <DialogTitle>Settings</DialogTitle>
      </DialogHeader>

      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="username" class="text-right">Username</Label>
          <Input id="username" v-model="username" class="col-span-3 bg-bgColorLight dark:bg-bgMainDark text-mainColorDark dark:text-mainColorLight" />
        </div>

        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="email" class="text-right">Email</Label>
          <Input id="email" v-model="email" type="email" class="col-span-3 bg-bgColorLight dark:bg-bgMainDark text-mainColorDark dark:text-mainColorLight" />
        </div>

        <div class="grid grid-cols-4 items-center gap-4">
          <Label class="text-right">Notifications</Label>
          <Switch v-model:checked="notifications" class="col-span-3 data-[state=checked]:bg-sky-500 [&>span]:bg-mainColorLight" />
        </div>
      </div>

      <DialogFooter>
        <DialogClose as-child>
          <Button class="mt-6 sm:mt-0 bg-red-600 hover:bg-red-700 text-white">Cancel</Button>
        </DialogClose>
        <Button @click="saveSettings">Save</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
