<template>
  <div class="home">
    <router-link to="/">Prev</router-link>
    <div style="height: 100px;"></div>
    <div v-gsap-flip-id="'hoge'" style="border: blue 1px solid; width: 200px; height: 200px;">
      <span style="font-size: 20pt;">あいうえお</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Next',
});
</script>

<style>
.home {
  border: gray 5px solid;
  padding: 10px;
}
</style>
