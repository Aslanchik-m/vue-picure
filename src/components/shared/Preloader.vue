<template>
  <div class="preloader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Preloader extends Vue {}
</script>

<style scoped lang="scss">
.preloader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    top: 13px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: black;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: preloader1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: preloader2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: preloader2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: preloader3 0.6s infinite;
  }
  @keyframes preloader1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes preloader3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes preloader2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
}
</style>
