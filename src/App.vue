<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/layout/navigation/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/theme.scss";

body {
  margin: 0;
  padding: 0;
  background-color: $WHITE;
  font-family: HelveticaNeue;
}
</style>
