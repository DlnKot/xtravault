<script setup>
import Navbar from "./components/Navbar.vue";
import {ref} from "vue";

let siteName = ref("NewsHub");
let logoUrl = ref("./favicon.svg");

</script>

<template>

  <Navbar
      :site-name="siteName"
      :logo-url="logoUrl"
  />
  <RouterView/>


</template>

<style scoped>

</style>


