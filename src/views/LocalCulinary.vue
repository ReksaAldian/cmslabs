<template>
  <div>
    <Navbar /> 
    <h2>Local Culinary</h2>
    <p>{{ item.strMeal }}</p>
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
  data(){
    return {
      item: {}
    }
  },
  methods: {
    async getData() {
      const res = await fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.$route.params.id}`);
      const finalRes = await res.json();
      console.log(finalRes.meals);
      this.item = finalRes.meals[0];
    }
  },
  mounted() {
    this.getData()
  },
};
</script>

<style>
</style>