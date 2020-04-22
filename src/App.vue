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
  };
</script>

<style></style>
