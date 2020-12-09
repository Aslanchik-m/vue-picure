<template>
  <div class="card">
    <div class="card-image">
      <img :src="item.img" :alt="item.name" />
    </div>
    <div class="card-content">
      <div class="card-title">{{ upperCaseify(item.name) }}</div>
      <div class="card-sub-title" v-if="item.chef">{{ item.chef }}</div>
      <p class="card-description" v-if="item.description">
        {{ item.description }}
      </p>
      <div class="card-bottom-section" v-if="item.price">
        <img v-if="item.icon" :src="item.icon" alt="icon" />
        <div class="price-section">
          <div class="line"></div>
          <div class="price-wrapper">
            <img src="/assets/icons/ils.svg" alt="new israeli shekel" />
            <span class="price">{{ item.price }}</span>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Dish } from "@/models/Dish";
import { Restaurant } from "@/models/Restaurant";
import { firstCharToUppercase } from "@/utils/pipes";
@Component
export default class Card extends Vue {
  @Prop() private item!: Restaurant | Dish;
  private upperCaseify(name: string) {
    return firstCharToUppercase(name);
  }
}
</script>
