<template>
  <div class="main">
    <HeroSection />
    <PopularRestaurants />
    <IconMeaning />
    <ChefSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeroSection from "@/components/main/HeroSection.vue";
import PopularRestaurants from "@/components/main/PopularRestaurants.vue";
import IconMeaning from "@/components/main/IconMeaning.vue";
import ChefSection from "@/components/main/ChefSection.vue";

@Component({
  components: {
    HeroSection,
    PopularRestaurants,
    IconMeaning,
    ChefSection
  }
})
export default class Main extends Vue {}
</script>
