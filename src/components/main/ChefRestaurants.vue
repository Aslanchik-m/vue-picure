<template>
  <div class="chef-restaurants-wrapper">
    <h6 class="chef-restaurants-title">
      {{ splitChefName(chefName) }}'s restaurants :
    </h6>
    <div class="restaurant-cards">
      <Card
        :key="rest"
        v-for="rest in restaurants"
        :item="composeForCard(rest)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Card from "@/components/shared/Card.vue";

@Component({
  components: {
    Card
  }
})
export default class ChefRestaurants extends Vue {
  @Prop() private restaurants!: string[];
  @Prop() private chefName!: string;

  private composeForCard(rest: string) {
    const cardObj = {
      name: rest,
      img: `/assets/img/${this.squishString(rest)}.png`
    };
    return cardObj;
  }

  private splitChefName(name: string) {
    return name.split(" ", 2)[0];
  }

  private squishString(string: string) {
    return string.replace(/\s/g, "");
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";

.chef-restaurants-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  margin-left: 13%;
  .chef-restaurants-title {
    font-size: 30px;
    font-weight: 100;
    line-height: 1;
    letter-spacing: 1.29px;
    color: $BLACK;
    margin-bottom: 23px;
  }
  .restaurant-cards {
    display: flex;
    align-items: center;
    .card {
      &:not(:last-child) {
        margin-right: 20px;
      }
      ::v-deep .card-image {
        height: 223px;
        img {
          width: 231px;
        }
      }
      ::v-deep .card-content {
        height: 133px;
        background-color: $ORANGE;
        display: flex;
        justify-content: center;
        .card-title {
          margin-top: 19.2px;
          font-size: 30px;
          letter-spacing: 2px;
          text-align: center;
          color: $BLACK;
          width: 116px;
        }
      }
    }
  }
}
</style>
