<template>
  <div>
    <hero-launch />
    <hero-source />
    <hero-docs />
  </div>
</template>

<script>
  import HeroLaunch from "@/components/HeroLaunch.vue";
  import HeroSource from "@/components/HeroSource.vue";
  import HeroDocs from "@/components/HeroDocs.vue";
  export default {
    name: "App",
    components: {
      HeroLaunch,
      HeroSource,
      HeroDocs,
    },
    data() {
      return {
        dummy: "value",
      };
    },
    metaInfo: {
      meta: [
        {
          name: "description",
          content:
            "With openFOLF you can easily keep track of your game as you play it with a real-time communal scorecard.",
        },
        { property: "og:title", content: "openFOLF | Real-Time Disc Golf Tracking" },
        { property: "og:site_name", content: "openFOLF" },
        { property: "og:type", content: "Progressive Web App" },
        { property: "og:url", content: "https://www.openfolf.net" },
        { property: "og:image", content: "https://www.openfolf.net/images/openfolfgreen.svg" },
        {
          property: "og:description",
          content:
            "With openFOLF you can easily keep track of your game as you play it with a real-time communal scorecard. The communal scorecard is shared between all players in your party, giving everyone a chance to log their own score and keep track of the other players with real-time updates. Designed for mobile devices as a Progressive Web App.",
        },

        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "https://www.openfolf.net/" },
        { name: "twitter:title", content: "openFOLF | Real-Time Disc Golf Tracking" },
        {
          name: "twitter:description",
          content:
            "With openFOLF you can easily keep track of your game as you play it with a real-time communal scorecard.",
        },
        { name: "twitter:creator", content: "openFOLF Team" },
        { name: "twitter:image:src", content: "https://www.openfolf.net/images/openfolfgreen.svg" },

        { itemprop: "name", content: "openFOLF | Real-Time Disc Golf Tracking" },
        {
          itemprop: "description",
          content:
            "With openFOLF you can easily keep track of your game as you play it with a real-time communal scorecard.",
        },
        { itemprop: "image", content: "https://www.openfolf.net/images/openfolfgreen.svg" },
      ],
      link: [{ rel: "canonical", href: "https://www.openfolf.net/" }],
    },
  };
</script>

<style></style>
