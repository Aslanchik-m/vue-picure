<template>
  <section class="chef-section-wrapper">
    <h4 class="section-title">CHEF OF THE WEEK :</h4>
    <div class="chef-main">
      <Card :item="composeForCard(chefs[0])" v-if="chefs.length" />
      <p class="chef-description" v-if="chefs.length">
        {{ chefs[0].description }}
      </p>
    </div>
    <ChefRestaurants
      :restaurants="chefs[0].restaurants"
      :chefName="chefs[0].name"
      v-if="chefs.length"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { fetchChefs } from "@/services/firebaseSer";
import Card from "@/components/shared/Card.vue";
import { Chef } from "@/models/Chef";
import ChefRestaurants from "@/components/main/ChefRestaurants.vue";

@Component({
  components: {
    Card,
    ChefRestaurants
  }
})
export default class ChefSection extends Vue {
  private chefs: Chef[] = [];
  created() {
    fetchChefs().then(snap => {
      const data = snap.docs.map(doc => {
        const chef = { ...doc.data(), id: doc.id };
        return chef;
      }) as Chef[];
      console.log(data);
      this.chefs = data;
    });
  }
  private composeForCard(chef: Chef) {
    const cardObj = {
      name: chef.name,
      img: chef.img
    };
    return cardObj;
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";

.chef-section-wrapper {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
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
    .card {
      width: 433px;
      height: 337px;
      margin-right: 69px;
      ::v-deep .card-image {
        height: 338px;
        img {
          width: 433px;
          object-fit: contain;
        }
      }
      ::v-deep .card-content {
        position: relative;
        .card-title {
          width: 433px;
          height: 78px;
          background-color: rgba(255, 255, 255, 0.8);
          position: absolute;
          top: -30px;
          z-index: 3;
          font-size: 40px;
          letter-spacing: 1.43px;
          color: $BLACK;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .chef-description {
      width: 540px;
      height: 292px;
      font-size: 25px;
      font-weight: 100;
      line-height: 1.2;
      margin-top: 0;
      letter-spacing: 1.08px;
      text-align: justify;
      color: $BLACK;
    }
  }
}
</style>
