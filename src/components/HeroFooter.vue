<template>
  <footer class="h-36 ma-0 flex flex-row justify-center items-center">
    <div class="w-1/6 mt-6 ml-6 flex flex-row items-start">
      <img class="of--logo-small mr-4" src="/images/openfolfwhite.svg" alt="" />
      <span class="text-white text-3xl">openFOLF</span>
    </div>
    <div class="w-5/6">
      <ul class="flex flex-row justify-around">
        <li class="text-white text-2xl">Home</li>
        <li class="text-white text-2xl">Application</li>
        <li class="text-white text-2xl">Source Code Repository</li>
        <li class="text-white text-2xl">Documentation</li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "hero-footer",
    data() {
      return {
        dummy: "value",
      };
    },
  };
</script>

<style scoped>
  footer {
    background-color: #005737;
  }
  .of--logo-small {
    height: 3rem;
  }
</style>
