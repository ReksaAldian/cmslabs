<template>
  <div>
    <Navbar /> 
    <h2>Ingredients</h2>
    <div v-for="item in listItems">
      <router-link :to="{ name: 'LocalCulinary', params: { id: item.idMeal }}">
        <p>
          {{item.strMeal}}
        </p>
        <p>
          {{ item.idMeal }}
        </p>
      </router-link>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Ingredients",
  data () {
  return {
    listItems: []
  }
  },
  methods: {
    async getData() {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.$route.params.title}`);
      const finalRes = await res.json();
      console.log(finalRes.meals);
      this.listItems = finalRes.meals;
    }
  },
  mounted() {
    this.getData()
  },
  components: {
    Navbar,
  },
  
};
</script>

<style>
</style>