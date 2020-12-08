<template>
  <div :class="isNav ? 'search-nav-wrapper' : 'search-hero-wrapper'">
    <input
      type="text"
      name="search"
      class="search-input"
      placeholder="Search for restaurant cuisine, chef"
    />
    <img
      class="search-icon"
      src="@/assets/icons/search-icon.svg"
      alt="search"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Search extends Vue {
  @Prop() private isNav!: boolean;
}
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";
.search-hero-wrapper {
  width: 511px;
  height: 38px;
  padding: 6px 4px 4px 10px;
  margin-right: 28px;
  border-radius: 4px;
  border: solid 0.5px $BLACK;
  background-color: rgba(255, 255, 255, 0.11);
  display: flex;
  flex-direction: row-reverse;
  transition: all 0.5s ease-in-out;
  .search-input {
    opacity: 0.53;
    font-size: 22px;
    font-weight: 100;
    letter-spacing: 1.57px;
    color: $BLACK;
    border: none;
    position: relative;
    width: 100%;
    height: 34px;
    &:focus {
      outline: none;
    }
  }
  .search-icon {
    width: 31px;
    height: 31px;
    margin: 0 20px 0 0;
    object-fit: contain;
  }
}
.search-nav-wrapper {
  width: 415px;
  padding: 1px 4px 1px 16px;
  margin-right: 28px;
  border-radius: 4px;
  border: solid 0.5px $BLACK;
  background-color: rgba(255, 255, 255, 0.11);
  display: flex;
  transition: all 0.5s ease-in-out;
  .search-input {
    opacity: 0.8;
    font-size: 18px;
    letter-spacing: 1.29px;
    border: none;
    position: relative;
    width: 100%;
    height: 29px;
    &:focus {
      outline: none;
    }
  }
  .search-icon {
    margin-right: 7px;
  }
}
</style>
