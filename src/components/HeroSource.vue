<template>
  <div
    class="of--hero-background xl:h-screen flex flex-col-reverse xl:flex-row justify-center items-center"
  >
    <div class="w-full flex flex-col justify-center items-center mb-20">
      <h1 class="text-white text-center font-bold text-3xl xl:text-5xl mb-6">
        Open... открытый...<br />
        Opið...
      </h1>
      <p class="xl:text-xl text-white max-w-xl mb-10 mx-6 text-center">
        On GitHub, we have the source code for all our repositories. Check out our code, review it,
        fork it, clone it or send us a pull request.
        <span class="text-xl font-bold">openFOLF</span> is free and open to all.
      </p>
      <a href="https://github.com/openfolf" class="button" role="button" target="_blank">
        <span class="font-bold text-xl">
          openFOLF on GitHub
        </span>
      </a>
    </div>
    <div class="w-full mt-16 mb-8 flex flex-col justify-center items-center">
      <img class="of--logo-hero" src="/images/github.svg" alt="github logo" />
      <span class="text-4xl xl:text-6xl text-white font-black mt-6">GitHub</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hero-source",
  };
</script>

<style scoped>
  div.of--hero-background {
    background-image: url("/images/hero-source.png");
  }
  img.of--logo-hero {
    max-height: 20vh;
  }
  @media (min-width: 1280px) {
    img.of--logo-hero {
      max-height: 60vh;
    }
  }
  .button {
    background-color: #fff;
    border-radius: 5px;
    color: #005737;
    padding: 1rem;
    text-decoration: none;
  }
  .button:focus,
  .button:hover {
    background-color: darkgrey;
    color: #005737;
  }
</style>
