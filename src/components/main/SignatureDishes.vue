<template>
  <section class="signature-dishes-wrapper">
    <h4 class="section-title">SIGNATURE DISH OF :</h4>
    <div class="cards-wrapper">
      <div class="signature-dish" v-for="dish in dishes" :key="dish.id">
        <h6 class="restaurant-title">{{ upperCaseify(dish.restName) }}</h6>
        <Card :item="dish" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/shared/Card.vue";
import { namespace } from "vuex-class";
import { Dish } from "@/models/Dish";
import { firstCharToUppercase } from "@/utils/pipes";

const dishesNamespace = namespace("Dishes");

@Component({
  components: {
    Card
  }
})
export default class SignatureDishes extends Vue {
  created() {
    this.getDishes();
  }

  @dishesNamespace.State
  public dishes!: Dish[];

  @dishesNamespace.Action
  public getDishes!: () => void;

  private upperCaseify(name: string) {
    return firstCharToUppercase(name);
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";

.signature-dishes-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 87px;
  .section-title {
    font-size: 30px;
    font-weight: 100;
    line-height: 1;
    letter-spacing: 1.25px;
    text-align: center;
    color: $BLACK;
  }
  .cards-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    .signature-dish {
      &:not(:last-child) {
        margin-right: 11px;
      }
      .restaurant-title {
        font-size: 30px;
        letter-spacing: 1.77px;
        text-align: center;
        margin-bottom: 23px;
        margin-top: 30px;
        color: $BLACK;
      }
      .card {
        ::v-deep .card-image {
          height: 290px;
          img {
            width: 360px;
            object-fit: contain;
          }
        }
        ::v-deep .card-content {
          width: 360px;
          height: 364px;
          background-color: $ORANGE;
          display: flex;
          flex-direction: column;
          align-items: center;
          .card-title {
            margin-top: 10px;
            width: 201px;
            font-size: 38.4px;
            line-height: 1.23;
            letter-spacing: 2.56px;
            text-align: center;
            color: $BLACK;
          }
          .card-description {
            width: 291.5px;
            font-size: 18px;
            line-height: 1.2;
            margin-top: 8px;
            letter-spacing: 1.6px;
            text-align: center;
            color: $BLACK;
          }
          .card-bottom-section {
            margin-top: auto;
            margin-bottom: 11px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon {
              width: 39px;
              object-fit: contain;
              margin-bottom: 10px;
            }
            .price-section {
              display: flex;
              justify-content: center;
              align-items: center;
              .line {
                width: 112px;
                height: 1px;
                border-bottom: solid 0.5px #979797;
              }
              .price-wrapper {
                margin-right: 11px;
                margin-left: 11px;
                img {
                  width: 13px;
                  margin-right: 2px;
                }
                .price {
                  font-size: 24.9px;
                  font-weight: 100;
                  letter-spacing: 1.66px;
                  color: $BLACK;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
