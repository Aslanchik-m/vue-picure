<template>
  <section class="popular-restaurants-wrapper">
    <div>
      <ul>
        <li :key="rest.id" v-for="rest in popularRestaurants">
          {{ rest.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Restaurant } from "@/models/Restaurant";
import { fetchRestaurants } from "@/services/firebaseSer";
@Component({})
export default class PopularRestaurants extends Vue {
  private popularRestaurants: Restaurant[] = [];
}
</script>

<style scoped lang="scss">
.popular-restaurants-wrapper {
}
</style>
