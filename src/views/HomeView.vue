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

      </div>
      <div v-for="item in listItems">
        <router-link :to="'Ingredients/'+ item.strIngredient.toLowerCase()">{{item.strIngredient}}</router-link>
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
  
  components: {
    Navbar,
    Hero,
    CardProduct
  },
};
</script>

<style>
</style>