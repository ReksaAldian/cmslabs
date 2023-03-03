<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      articles: []
    }
  },

  async mounted(){
    const respons = await axios.get('http://www.themealdb.com/api/json/v1/1/list.php?i=list')
    this.articles = respons.data
  }


}
</script>