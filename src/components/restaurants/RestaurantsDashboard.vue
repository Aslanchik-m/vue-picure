<template>
  <section class="restaurants-dashboard-wrapper">
    <ul class="filters">
      <li
        @click="filterParam = 'all'"
        :class="{ active: filterParam === 'all' }"
      >
        All
      </li>
      <li
        @click="filterParam = 'new'"
        :class="{ active: filterParam === 'new' }"
      >
        New
      </li>
      <li
        @click="filterParam = 'popular'"
        :class="{ active: filterParam === 'popular' }"
      >
        Popular
      </li>
      <li
        @click="filterParam = 'open'"
        :class="{ active: filterParam === 'open' }"
      >
        Open Now
      </li>
    </ul>
    <div class="cards-wrapper" v-if="restaurants.length">
      <Card :key="rest.id" v-for="rest in filteredRestaurants" :item="rest" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Card from "@/components/shared/Card.vue";
import { Restaurant } from "@/models/Restaurant";
import { compareTime, compareDate } from "@/utils/pipes";

const restaurantsNamespace = namespace("Restaurants");

@Component({
  components: { Card }
})
export default class RestaurantsDashboard extends Vue {
  private filterParam: "all" | "new" | "popular" | "open" = "all";

  created() {
    this.fetchAllRestaurants();
  }

  @restaurantsNamespace.State
  public restaurants!: Restaurant[];

  @restaurantsNamespace.Action
  public fetchAllRestaurants!: () => void;

  // Computed restaurants property that filters based on filterParam
  get filteredRestaurants() {
    if (this.filterParam === "new") {
      return this.restaurants.filter((rest: Restaurant) =>
        compareDate(rest.dateAdded)
      );
    } else if (this.filterParam === "popular") {
      return this.restaurants.sort(
        (a: Restaurant, b: Restaurant) => b.favorites - a.favorites
      );
    } else if (this.filterParam === "open") {
      return this.restaurants.filter((rest: Restaurant) =>
        compareTime(rest.openTime, rest.closeTime)
      );
    } else return this.restaurants;
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";
.restaurants-dashboard-wrapper {
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .filters {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      font-size: 18px;
      font-weight: 100;
      letter-spacing: 1.92px;
      color: $BLACK;
      list-style-type: none;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
      &:not(:last-child) {
        margin-right: 36.3px;
      }
    }
    .active {
      font-size: 20px;
    }
  }
  .cards-wrapper {
    margin: 35px 169px 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    .card {
      margin-bottom: 38px;
      /* Give each card a margin except each third and last */
      &:not(:nth-child(3n + 3) + :last-child) {
        margin-right: 38px;
      }
      &:hover {
        cursor: pointer;
      }
      ::v-deep .card-image {
        height: 212.2px;
        img {
          width: 342px;
          height: 212.2px;
          object-fit: cover;
        }
      }
      ::v-deep .card-content {
        height: 126.8px;
        width: 342px;
        background-color: $ORANGE;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .card-title {
          font-size: 38px;
          letter-spacing: 2.53px;
          text-align: center;
          color: $BLACK;
        }
        .card-sub-title {
          font-size: 23.8px;
          font-weight: 100;
          letter-spacing: 1.58px;
          text-align: center;
          color: $BLACK;
        }
      }
    }
  }
}
</style>
