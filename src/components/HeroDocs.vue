<template>
  <div class="of--hero-background xl:h-screen flex flex-col xl:flex-row">
    <div class="my-20 w-full flex flex-col justify-center items-center">
      <div class="of--three-wrapper flex flex-col">
        <div class="flex flex-col mb-6 justify-center items-center">
          <img class="of--logo-three" src="/images/word.svg" alt="" />
        </div>
        <div class="flex flex-row justify-center items-center">
          <img class="of--logo-three mr-6" src="/images/markdown.svg" alt="" />
          <img class="of--logo-three" src="/images/vuepress.png" alt="" />
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col justify-center items-center mb-20">
      <h1 class="of--text-green text-center font-bold text-3xl xl:text-5xl mb-6">
        BSc Computer Science <br />
        Final project
      </h1>
      <p class="xl:text-xl max-w-xl mb-16 mx-6 text-center">
        Along with the web application, we made a report documenting the design and production of
        the application. We set up a dedicated website for the report with interactive examples in
        an attempt to simplify the consumption of the report.
      </p>
      <a href="https://docs.openfolf.net/" class="button" role="button" target="_blank">
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
  };
</script>

<style scoped>
  div.of--hero-background {
    background-image: url("/images/hero-docs.png");
  }
  div.of--three-wrapper {
    height: 30vh;
  }
  img.of--logo-three {
    max-width: 15vh;
  }
  @media (min-width: 1280px) {
    img.of--logo-three {
      max-width: 20vh;
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
