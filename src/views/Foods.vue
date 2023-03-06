<template>
  <div>
    <Navbar /> 
    <div class="container">
      <div class="row mt-4 mb-4">
        <div class="col">
          <h2> Foods <strong>List</strong></h2>
        </div>
      </div>
      <div class="row mb-3">
        <div>
  <b-card-group deck>
    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>
</div>
        <div class="col-md-3 mt-4">
          <div v-for= "item in listItems">
            <router-link :to="'Ingredients/'+ item.strIngredient.toLowerCase()">{{item.strIngredient}}</router-link>
          </div>
          <CardProduct />
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
  name: "Foods",
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
  }
};
</script>

<style>
</style>