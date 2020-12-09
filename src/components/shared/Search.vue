<template>
  <form
    autoComplete="off"
    :class="isNav ? 'search-nav-wrapper' : 'search-hero-wrapper'"
  >
    <img
      class="x-button"
      src="/assets/icons/black-x.svg"
      alt="clear input"
      v-if="searchParam.length"
      @click="clearInput"
    />
    <input
      type="text"
      name="search"
      class="search-input"
      placeholder="Search for restaurant cuisine, chef"
      v-model="searchParam"
    />
    <img class="search-icon" src="/assets/icons/search-icon.svg" alt="search" />
    <Suggestions
      v-if="searchResults.length && searchParam.length"
      :restaurants="searchResults"
    />
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import _ from "lodash";

import { searchRestaurants } from "@/services/firebaseSer";
import { Restaurant } from "@/models/Restaurant";
import Suggestions from "./Suggestions.vue";

@Component({
  components: {
    Suggestions
  }
})
export default class Search extends Vue {
  @Prop() private isNav!: boolean;
  private searchResults: Restaurant[] = [];
  private searchParam = "";

  // Search method
  private handleSearch() {
    // Check if search param is not empty send an api call to search db
    if (this.searchParam.length) {
      searchRestaurants(this.searchParam).then(snap => {
        const data = snap.docs.map(doc => {
          const restaurant = { ...doc.data(), id: doc.id };
          return restaurant;
        }) as Restaurant[];
        this.searchResults = data;
      });
    }
  }
  // Clear input
  private clearInput() {
    this.searchParam = "";
  }

  // Set up a watcher that fires a debounce on the search function every time searchParam changes
  @Watch("searchParam")
  public debounceSearch = _.debounce(this.handleSearch, 500);
}
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";
.search-hero-wrapper {
  width: 511px;
  height: 38px;
  padding: 6px 4px 4px 10px;
  border-radius: 4px;
  border: solid 0.5px $BLACK;
  display: flex;
  flex-direction: row-reverse;
  transition: all 0.5s ease-in-out;
  position: relative;
  .x-button {
    height: 18px;
    object-fit: contain;
    margin-right: 10px;
    margin-top: 9px;
    &:hover{
      cursor:pointer;
      
    }
  }
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
    background: none;
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
  .suggestion-box {
    width: 515px;
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
  position: relative;
  .x-button {
    height: 14px;
    object-fit: contain;
    margin-right: 10px;
    margin-top: 9px;
    &:hover{
      cursor:pointer;
      
    }
  }
  .search-input {
    opacity: 0.8;
    font-size: 18px !important;
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
  .suggestion-box {
    width: 420px;
    top: 2.1rem;
  }
}
</style>
