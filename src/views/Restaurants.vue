<template>
  <main>
    <RestaurantsDashboard />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RestaurantsDashboard from "@/components/restaurants/RestaurantsDashboard.vue";
@Component({
  components: {
    RestaurantsDashboard
  }
})
export default class Restaurants extends Vue {}
</script>
