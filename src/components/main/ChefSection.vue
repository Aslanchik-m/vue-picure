<template>
  <section class="chef-section-wrapper">
    <h4 class="section-title">CHEF OF THE WEEK :</h4>
    <div class="chef-main">
      <img src="/assets/img/yossi-shitrit.png" alt="chef yossi shitrit" />
      <p class="chef-description">
        Chef Yossi Shitrit has been living and breathing his culinary dreams for
        more than two decades, including running the kitchen in his first
        restaurant, the fondly-remembered Violet, located in Moshav Udim.
        Shitrit's creativity and culinary acumen born of long experience are
        expressed in the every detail of each and every dish.
      </p>
    </div>
    <div class="chef-restaurants-placeholder">
      Hi im chef-restaurants-placeholder
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ChefSection extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";

.chef-section-wrapper {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .section-title {
    font-size: 30px;
    font-weight: 100;
    letter-spacing: 2px;
    text-align: center;
    color: $BLACK;
  }
  .chef-main {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 433px;
      height: 337px;
      margin-right: 69px;
    }
    .chef-description {
      width: 540px;
      height: 292px;
      font-size: 25px;
      font-weight: 100;
      line-height: 1.2;
      letter-spacing: 1.08px;
      text-align: justify;
      color: $BLACK;
    }
  }
  .chef-restaurants-placeholder {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
}
</style>
