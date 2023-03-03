<template>
    <div>
      <Navbar /> 
      <h2>Local Culinary</h2>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navbar from "@/components/Navbar.vue";
  
  export default {
    name: "LocalCulinary",
    components: {
      Navbar,
    },
  };
  </script>
  
  <style>
  </style>