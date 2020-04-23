<template>
  <div class="of--hero-1 h-screen flex flex-row">
    <div class="of--hero-left pl-20 w-6/12 flex flex-col justify-center items-center">
      <div class="of--three-wrapper flex flex-row">
        <div class="w-1/3 h-full flex flex-col justify-end">
          <img class="of--logo-three pb-5" src="/images/markdown.svg" alt="" />
        </div>
        <div class="w-1/3 h-full flex flex-col justify-start">
          <img class="of--logo-three" src="/images/word.svg" alt="" />
        </div>
        <div class="w-1/3 h-full flex flex-col justify-end">
          <img class="of--logo-three" src="/images/vuepress.png" alt="" />
        </div>
      </div>
    </div>
    <div class="of--hero-right pr-20 w-6/12 flex flex-col justify-center items-center">
      <h1 class="of--text-green text-center font-bold text-5xl mb-6">
        BSc Computer Science <br />
        Final project
      </h1>
      <p class="text-xl max-w-xl mb-16 text-center">
        Along with the web application we are required to hand in a report. We set up a dedicated
        website for the report, any accompanying data and other relevant documentation.
      </p>
      <a href="#" class="button" role="button" target="_blank">
        <span class="font-bold text-xl">
          Go To Documentation
        </span>
      </a>
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
  div.of--hero-1 {
    background-image: url("/images/hero-docs.png");
  }
  div.of--three-wrapper {
    height: 35vh;
    /* max-height: 60vh; */
  }
  img.of--logo-three {
    max-height: 30vh;
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
