<template>
  <div>
    <button @click="onSubmit">防抖动按钮</button>
  </div>
</template>

<script lang="ts" setup>
import { debounce } from "lodash-es";

const send = () => {
  console.log("send");
};
const onSubmit = () => {
  debounce(send, 250, { maxWait: 1000 });
};
</script>
