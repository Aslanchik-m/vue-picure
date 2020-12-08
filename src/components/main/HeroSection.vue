<template>
  <div class="hero-wrapper">
      <div class="search-box">
          <h2>Epicure works with the top
                        <br/>
chef restaurants in Tel Aviv</h2>
        <Search :isNav="false" />
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Search from "@/components/shared/Search.vue";
@Component({
    components:{
        Search
    }
})
export default class Main extends Vue {}
</script>

<style scoped lang="scss">

</style>