<template>
  <div class="openfolf--hero-1 h-screen flex flex-row">
    <div class="openfolf--hero-left pl-20 w-6/12 flex flex-col justify-center items-center">
      <img class="openfolf--logo-hero" src="/images/openfolfgreen.svg" alt="openfolf logo" />
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
      <p class="text-xl max-w-xl mb-10 font-bold text-center">
        It's completly Free!!
      </p>
      <a href="https://app.openfolf.net/" class="button" role="button" target="_blank">
        <span class="font-bold text-xl">
          Launch Application
        </span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hero-launch",
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
  .openfolf--text-green {
    color: #005737;
  }
  .button {
    background-color: #005737;
    border-radius: 5px;
    color: #fff;
    padding: 1rem;
    text-decoration: none;
  }
  .button:focus,
  .button:hover {
    background-color: darkgrey;
    color: #005737;
  }
</style>
