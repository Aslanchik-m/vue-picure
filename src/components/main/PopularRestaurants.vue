<template>
  <section class="popular-restaurants-wrapper">
    <h4 class="section-title">THE POPULAR RESTAURANTS IN EPICURE :</h4>
    <div class="popular-restaurant-cards">
      <Card
        :key="restaurant.id"
        v-for="restaurant in popularRestaurants"
        :item="restaurant"
      />
    </div>
    <a href="#" class="all-restaurants-link">All Restaurants >></a>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "vue-class-component/hooks";

import { Restaurant } from "@/models/Restaurant";
import { fetchPopularRestaurants } from "@/services/firebaseSer";
import Card from "@/components/shared/Card.vue";

@Component({
  components: { Card }
})
export default class PopularRestaurants extends Vue {
  private popularRestaurants: Restaurant[] = [];

  created() {
    fetchPopularRestaurants().then(snap => {
      const data = snap.docs.map(doc => {
        const restaurant = { ...doc.data(), id: doc.id };
        return restaurant;
      }) as Restaurant[];
      this.popularRestaurants = data;
    });
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";

.popular-restaurants-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 140px;
  .section-title {
    font-size: 30px;
    font-weight: 100;
    line-height: 1.33;
    letter-spacing: 1.25px;
    text-align: center;
    color: $BLACK;
  }
  .popular-restaurant-cards {
    display: flex;
    justify-content: center;
    align-items: center;
    .card {
      &:not(:last-child) {
        margin-right: 11px;
      }
      &:hover {
        cursor: pointer;
      }
      ::v-deep .card-image {
        height: 223px;
        img {
          width: 360px;
          object-fit: contain;
        }
      }
      ::v-deep .card-content {
        height: 134px;
        background-color: $ORANGE;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .card-title {
          font-size: 40px;
          letter-spacing: 2.67px;
          text-align: center;
          color: $BLACK;
        }
        .card-sub-title {
          font-size: 25px;
          font-weight: 100;
          letter-spacing: 1.67px;
          text-align: center;
          color: $BLACK;
        }
      }
    }
  }
  .all-restaurants-link {
    margin-right: 10%;
    margin-top: 31px;
    font-size: 30px;
    letter-spacing: 2px;
    text-align: right;
    color: $BLACK;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
