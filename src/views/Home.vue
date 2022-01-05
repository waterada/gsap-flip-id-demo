<template>
  <div class="home">
    <router-link to="/next">Next</router-link>
    <div v-gsap-flip-id="'hoge'" style="border: blue 1px solid; width: 100px; height: 100px;">
      <span style="font-size: 10pt;">あいうえお</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style>
.home {
  border: gray 5px solid;
  padding: 10px;
}
</style>
