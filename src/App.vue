<script setup lang="ts">
import { ref } from 'vue';
import Layout from "@/components/layout.vue"
</script>

<template>
<Layout></Layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100%;
  
}
html,body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  background: rgb(241, 241, 241);
  /* overflow:hidden; */
 
}
ul,li,p,div,a,span {
  padding: 0;
  margin: 0;
}
p {
  text-align: left;
}
li {
  list-style: none;
}
</style>
