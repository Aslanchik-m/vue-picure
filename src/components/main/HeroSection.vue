<template>
  <section class="hero-wrapper">
    <div class="search-box">
      <h2>
        Epicure works with the top
        <br />
        chef restaurants in Tel Aviv
      </h2>
      <Search :isNav="false" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Search from "@/components/shared/Search.vue";
@Component({
  components: {
    Search
  }
})
export default class Main extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";

.hero-wrapper {
  height: 696px;
  width: 100%;
  background-image: url("../../assets/img/hero-picture@2x.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .search-box {
    width: 781px;
    height: 222px;
    background-color: rgba(255, 255, 255, 0.88);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin: 0 36px 18px 38px;
      font-family: HelveticaNeue;
      font-size: 35px;
      font-weight: 100;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: 1.97px;
      text-align: center;
      color: $BLACK;
    }
  }
}
</style>
