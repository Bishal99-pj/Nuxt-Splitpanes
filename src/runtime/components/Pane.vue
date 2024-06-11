<template>
  <Pane v-bind="{ ...$props, ...$attrs }">
    <slot></slot>
  </Pane>
</template>

<script setup lang="ts">
import { Pane } from "splitpanes";

defineProps({
  size: { type: [Number, String], default: null },
  minSize: { type: [Number, String], default: 0 },
  maxSize: { type: [Number, String], default: 100 },
});
</script>
