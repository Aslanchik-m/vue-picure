<template>
  <nav>
    <div class="left-nav">
      <img class="hamburger" src="@/assets/icons/hamburger.svg" alt="menu" />
      <div class="epicure-logo">
        <img src="@/assets/img/logo@2x.png" alt="epicure logo" />
        <span class="logo-text">EPICURE</span>
      </div>
      <div class="main-links">
        <a href="#">Restaurants</a>
        <a href="#">Chefs</a>
      </div>
    </div>
    <div class="right-nav">
      <Search :isNav="true" />
      <img class="user-icon" src="@/assets/icons/user-icon.svg" alt="user" />
      <img class="bag-icon" src="@/assets/icons/bag-icon.svg" alt="bag" />
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Search from "@/components/shared/Search.vue";
@Component({
  components: {
    Search
  }
})
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";
nav {
  width: 100vw;
  border-bottom: 0.2px solid #979797;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-nav {
    display: flex;
    justify-content: center;
    margin-left: 123px;
    .hamburger {
      display: none;
    }
    .epicure-logo {
      display: flex;
      align-items: center;
      img {
        width: 33px;
        height: 33px;
        object-fit: contain;
      }
      .logo-text {
        margin: 1px 31px 1px 15px;
        font-size: 27px;
        letter-spacing: 1.35px;
        color: $BLACK;
      }
    }
    .main-links {
      display: flex;
      align-items: center;
      a {
        font-size: 18px;
        font-weight: 100;
        letter-spacing: 1.92px;
        color: $BLACK;
        text-decoration: none;
        &:hover {
          opacity: 0.8;
        }
        &:not(:last-child) {
          margin-right: 28px;
        }
      }
    }
  }
  .right-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 123px;
    .user-icon {
      width: 23px;
      height: 23px;
      margin-right: 28px;
      object-fit: contain;
    }
    .bag-icon {
      width: 22px;
      height: 22px;
      object-fit: contain;
    }
  }
}
</style>
