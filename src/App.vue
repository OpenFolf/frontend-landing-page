<template>
  <div>
    <hero-launch />
    <hero-source />
    <hero-docs />
    <hero-footer />
  </div>
</template>

<script>
  import HeroLaunch from "@/components/HeroLaunch.vue";
  import HeroSource from "@/components/HeroSource.vue";
  import HeroDocs from "@/components/HeroDocs.vue";
  import HeroFooter from "@/components/HeroFooter.vue";
  export default {
    name: "App",
    components: {
      HeroLaunch,
      HeroSource,
      HeroDocs,
      HeroFooter,
    },
    data() {
      return {
        dummy: "value",
      };
    },
  };
</script>

<style></style>
