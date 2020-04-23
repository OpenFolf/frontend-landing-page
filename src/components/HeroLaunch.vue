<template>
  <div class="of--hero h-screen flex flex-row">
    <div class="of--hero-left pl-20 w-6/12 flex flex-col justify-center items-center">
      <img class="of--logo-hero" src="/images/openfolfgreen.svg" alt="openfolf logo" />
      <span class="text-6xl font-bold">openFOLF</span>
    </div>
    <div class="of--hero-right pr-20 w-6/12 flex flex-col justify-center items-center">
      <h1 class="of--text-green text-center font-bold text-5xl mb-6">
        Real-time<br />
        Disc Golf Tracking
      </h1>
      <p class="text-xl max-w-xl mb-10 text-center">
        With <span class="of--text-green font-bold text-2xl">openFOLF</span> you can easily keep
        track of your game as you play it with a real-time comunal scorecard. The comunal scorecard
        is shared between all players in your party, giving everyone a chance to log their own score
        and keep track of the other players with real-time updates. <br /><br />
        <em>The application is designed for mobile devices.</em>
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
  div.of--hero {
    background-image: url("/images/hero-launch.png");
  }
  img.of--logo-hero {
    max-height: 60vh;
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
