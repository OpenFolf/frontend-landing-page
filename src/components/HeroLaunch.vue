<template>
  <div class="of--hero-background xl:h-screen flex flex-col xl:flex-row">
    <div class="mt-16 mb-10 w-full flex flex-col justify-center items-center">
      <img class="of--logo-hero" src="/images/openfolfgreen.svg" alt="openfolf logo" />
      <span class="text-3xl xl:text-6xl mt-6 font-bold">openFOLF</span>
    </div>
    <div class="mb-20 w-full flex flex-col justify-center items-center xl:mr-10">
      <h1 class="of--text-green text-center font-bold text-2xl xl:text-5xl mb-6">
        Real-time Disc Golf Tracking
      </h1>
      <p class="max-w-xl mb-10 mx-6 xl:text-xl text-center">
        With <span class="of--text-green font-bold text-xl">openFOLF</span> you can easily keep
        track of your game as you play it with a real-time communal scorecard. The communal
        scorecard is shared between all players in your party, giving everyone a chance to log their
        own score and keep track of the other players with real-time updates. <br /><br />
        <em>Designed for mobile devices as a Progressive Web App.</em>
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
  };
</script>

<style scoped>
  div.of--hero-background {
    background-image: url("/images/hero-launch.png");
  }
  img.of--logo-hero {
    max-height: 20vh;
  }

  @media (min-width: 1280px) {
    img.of--logo-hero {
      max-height: 60vh;
    }
  }
  .of--text-green {
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
