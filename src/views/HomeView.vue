<template>
  <div class="HomeView">
    <Navbar /> 
    <div class="container">
      <Hero />
      <div class="row mt-6">
        <div class="col">
          <h2> Recomendations <strong>Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="/Foods" class="btn btn-success float-right">See More</router-link>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-4 mt-d">
          <h2> Foods </h2>
        </div>
        <div class="col-md-4 mt-d">
          <h2> Foods </h2>
        </div>
        <div class="col-md-4 mt-d">
          <h2> Foods </h2>
          <CardProduct />
        </div>

      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "HomeView",
  data () {
    return {
      listItems: []
    }
  },
  methods: {
    async getData() {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
      console.log(res)
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
    Hero,
    CardProduct
  },
};
</script>

<style>
</style>