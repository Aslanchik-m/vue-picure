<template>
  <section class="about-us-wrapper">
    <div class="about-us">
      <h4 class="section-title">ABOUT US :</h4>
      <p class="about-us-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
        justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget
        blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta.
        Vivamus elit urna, dignissim a vestibulum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
        eu ipsum. Cras porta malesuada eros.
      </p>
      <div class="download-buttons">
        <div class="button">
          <img src="/assets/icons/apple-icon.svg" alt="apple icon" />
          <div class="button-text">
            <span>Download on the</span>
            <span class="main-text">App Store</span>
          </div>
        </div>
        <div class="button">
          <img
            class="google"
            src="/assets/icons/play-icon.svg"
            alt="google play icon"
          />
          <div class="button-text">
            <span>Get it on</span>
            <span class="main-text">Google Play</span>
          </div>
        </div>
      </div>
    </div>
    <img class="logo" src="/assets/img/about-logo.png" alt="epicure logo" />
  </section>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/theme.scss";

.about-us-wrapper {
  width: 100%;
  height: 526px;
  opacity: 0.9;
  background-color: #fafafa;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .about-us {
    .section-title {
      font-size: 30px;
      font-weight: 100;
      letter-spacing: 1.89px;
      color: $BLACK;
    }
    .about-us-description {
      width: 567px;
      height: 269px;
      font-size: 22px;
      font-weight: 100;
      letter-spacing: 1.69px;
      text-align: justify;
      color: $BLACK;
    }
    .download-buttons {
      display: flex;
      .button {
        width: 181.4px;
        height: 52.8px;
        border-radius: 9.6px;
        border: solid 0.6px $BLACK;
        display: flex;
        justify-content: space-between;
        &:not(:last-child) {
          margin-right: 15.1px;
        }
        &:hover {
          cursor: pointer;
        }
        img {
          height: 29.6px;
          object-fit: contain;
          margin-left: 10.9px;
          margin-top: 10px;
        }
        .google {
          margin-left: 15px;
        }
        .button-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 13.2px;
          letter-spacing: 1.29px;
          text-align: center;
          color: $BLACK;
          margin-right: 17.7px;
          .main-text {
            font-size: 16.8px;
          }
        }
      }
    }
  }
  .logo {
    width: 178px;
    height: 166px;
    object-fit: contain;
  }
}
</style>
