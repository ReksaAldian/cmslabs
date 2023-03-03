<template>
  <div class="Hero">
    <!-- Desktop -->
    <div class="d.flex align-content-center flex-wrap">
        
    </div>
    <div class="d-none d-md-block">
      <div class="row mt-8">
        <div class="co-md-6">
          <div class="d-flek h-100">
            <div class="justify-content-center align-center">
              <h2>
                <strong>Delicious Food Menu,</strong><br />In Your Website
              </h2>
              <p>Lets Enjoy the Website</p>
              <button class="btn btn-lg btn-success">Let's Started</button>
            </div>
          </div>
        </div>
        <div class="col">
          <img src="../assets/images/Hero.png" width="700px" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4 d-sm-block d-md-none">
        <div class="co-md-6 mb-3">
          <div class="d-flek h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu,</strong><br />In Your Website
              </h2>
              <p>Lets Enjoy the Website</p>
              <button class="btn btn-lg btn-success">Let's Started</button>
            </div>
          </div>
        </div>
        <div class="col">
          <img src="../assets/images/Hero.png" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>