<template>
  <div class="main">
    <HeroSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeroSection from "@/components/main/HeroSection.vue";

@Component({
  components: {
    HeroSection
  }
})
export default class Main extends Vue {}
</script>
