<template>
    <div>
      <Navbar /> 
      <h2>Ingredients</h2>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navbar from "@/components/Navbar.vue";
  
  export default {
    name: "Ingredients",
    components: {
      Navbar,
    },
  };
  </script>
  
  <style>
  </style>