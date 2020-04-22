<template>
  <div class="openfolf--hero-1 h-screen flex flex-row">
    <div class="openfolf--hero-left pl-20 w-6/12 flex flex-col justify-center items-center">
      <img class="openfolf--logo-hero" src="/images/docs2.svg" alt="openfolf logo" />
      <span class="text-6xl font-bold">openFOLF</span>
    </div>
    <div class="openfolf--hero-right pr-20 w-6/12 flex flex-col justify-center items-center">
      <h1 class="openfolf--text-green text-center font-bold text-5xl mb-6">
        Real-time<br />
        Disc Golf Tracking
      </h1>
      <p class="text-xl max-w-xl mb-10 text-center">
        With <span class="openfolf--text-green font-bold text-2xl">openFOLF</span> our users can
        keep track their matches in real time. All users that are together in a single match recieve
        real time updates to any changes on the comunal scorecard. The application is made for
        mobile devices.
      </p>
      <p class="text-xl max-w-xl mb-10 text-center">
        It's completly Free!!
      </p>
      <button class="text-xl text-white font-bold py-4 px-6 rounded">
        Launch Application
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hero-docs",
    data() {
      return {
        dummy: "value",
      };
    },
  };
</script>

<style scoped>
  div.openfolf--hero-1 {
    background-image: url("/images/hero6.png");
  }
  img.openfolf--logo-hero {
    max-height: 60vh;
  }
  button.openfolf--btn {
    background-color: #005737;
  }
  .openfolf--text-green {
    color: #005737;
  }
  /* div.openfolf--hero-left {
    background-image: url("/images/openfolfgreen.svg");
  } */
  /* div.openfolf--hero-right {
    background-color: purple;
  } */
</style>
