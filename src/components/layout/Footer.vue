<template>
  <footer>
    <div class="footer-links">
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
      <a href="#">Lalal</a>
    </div>
  </footer>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";

footer {
  width: 100%;
  bottom: 0;
  height: 94px;
  display: flex;
  justify-content: center;
  align-items: center;
  .footer-links {
    display: flex;
    a {
      text-decoration: none;
      color: $BLACK;
      &:hover {
        opacity: 0.8;
      }
      &:not(:last-child) {
        margin-right: 45px;
      }
    }
  }
}
</style>
