<template>
  <section class="icon-meaning-wrapper">
    <h4 class="section-title">THE MEANING OF OUR ICONS :</h4>
    <div class="icons">
      <div class="icon-wrapper">
        <img src="@/assets/icons/spicy-icon.svg" alt="spicy" />
        <span class="icon-title">Spicy</span>
      </div>
      <div class="icon-wrapper">
        <img src="@/assets/icons/vegetarian-icon.svg" alt="vegetarian" />
        <span class="icon-title">Vegetarian</span>
      </div>
      <div class="icon-wrapper">
        <img src="@/assets/icons/vegan-icon.svg" alt="vegan" />
        <span class="icon-title">Vegan</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class IconMeaning extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";

.icon-meaning-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 265px;
  opacity: 0.9;
  background-color: #fafafa;
  .section-title {
    margin-top: 0;
    font-size: 30px;
    font-weight: 100;
    letter-spacing: 2.14px;
    text-align: center;
    color: $BLACK;
  }
  .icons {
    display: flex;
    .icon-wrapper {
      display: flex;
      flex-direction: column;
      img {
        height: 61px;
        margin-bottom: 29px;
      }
      .icon-title {
        font-size: 23.4px;
        font-weight: 100;
        letter-spacing: 1.8px;
        text-align: center;
        color: $BLACK;
      }
      &:not(:last-child) {
        margin-right: 104px;
      }
    }
  }
}
</style>
