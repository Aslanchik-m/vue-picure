<template>
  <div class="suggestion-box">
    <p class="sub-title">Restaurants:</p>
    <a
      href="#"
      class="search-result"
      v-for="rest in restaurants"
      :key="rest.id"
      >{{ upperCaseify(rest.name) }}</a
    >
  </div>
</template>

<script lang="ts">
import { Restaurant } from "@/models/Restaurant";
import { firstCharToUppercase } from "@/utils/pipes";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Suggestions extends Vue {
  @Prop() private restaurants!: Restaurant[];

  private upperCaseify(name: string) {
    return firstCharToUppercase(name);
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";

.suggestion-box {
  position: absolute;
  top: 3.1rem;
  left: 0.3rem;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: white;
  padding-bottom: 15px;
  .sub-title {
    opacity: 0.5;
    font-family: HelveticaNeue;
    font-size: 15px;
    font-weight: 100;
    letter-spacing: 1.07px;
    color: $BLACK;
    margin-left: 57px;
  }
  .search-result {
    margin-left: 57px;
    font-size: 15px;
    font-weight: 100;
    letter-spacing: 1.07px;
    color: $BLACK;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
