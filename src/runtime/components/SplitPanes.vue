<template>
  <Splitpanes v-bind="{ ...$props, ...$attrs }">
    <slot></slot>
  </Splitpanes>
</template>

<script setup lang="ts">
import { Splitpanes } from "splitpanes";

const emit = defineEmits([
  "ready",
  "resize",
  "resized",
  "pane-click",
  "pane-maximize",
  "pane-add",
  "pane-remove",
  "splitter-click",
]);

defineProps({
  horizontal: { type: Boolean },
  pushOtherPanes: { type: Boolean, default: !0 },
  dblClickSplitter: { type: Boolean, default: !0 },
  rtl: { type: Boolean, default: !1 },
  firstSplitter: { type: Boolean },
});
</script>
