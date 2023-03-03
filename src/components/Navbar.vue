<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary row mb-10">
    <div class="container-fluid row mt-2">
      <div class="container">
        <a class="navbar-brand" href="#"><b-icon-house-door-fill></b-icon-house-door-fill> MealApp</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="d-flex flex-row-reverse" id="navbarSupportedContent row mb-10">
          <ul class="navbar-nav mr-auto mr-2 mr-lg-2">
            <li class="nav-item">
              <router-link class="nav-link" to="/HomeView">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Foods">Foods</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Ingredients">Ingredients</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/LocalCulinary">Local Culinary</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
</style>