<template>
  <div class="main">
    <HeroSection />
    <PopularRestaurants />
    <SignatureDishes />
    <IconMeaning />
    <ChefSection />
    <AboutUs />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeroSection from "@/components/main/HeroSection.vue";
import PopularRestaurants from "@/components/main/PopularRestaurants.vue";
import IconMeaning from "@/components/main/IconMeaning.vue";
import ChefSection from "@/components/main/ChefSection.vue";
import AboutUs from "@/components/main/AboutUs.vue";
import SignatureDishes from "@/components/main/SignatureDishes.vue";

@Component({
  components: {
    HeroSection,
    PopularRestaurants,
    IconMeaning,
    ChefSection,
    AboutUs,
    SignatureDishes
  }
})
export default class Main extends Vue {}
</script>
