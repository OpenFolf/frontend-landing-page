<template>
  <div class="openfolf--hero-1 h-screen flex flex-row">
    <div class="pl-20 w-6/12 flex flex-col justify-center items-center">
      <h1 class="text-white text-center font-bold text-5xl mb-6">
        Open...<br />
        открытый...<br />
        Opið...
      </h1>
      <p class="text-xl text-white max-w-xl mb-16 text-center">
        Short loin meatball turducken, meatloaf kielbasa filet mignon ribeye salami turkey capicola.
        Jowl burgdoggen shank meatball kevin tail spare ribs beef pig. Hamburger chicken pancetta
        pork belly kevin burgdoggen, chislic alcatra beef ribs ham turkey pig. Leberkas pork chop
        ribeye capicola pig tongue filet mignon ham hock shoulder beef sausage pastrami tenderloin.
        Ball tip filet mignon spare ribs beef, cow ham sirloin chicken. Leberkas shank beef ribs ham
        hock.
      </p>
      <a href="https://github.com/openfolf" class="button" role="button" target="_blank">
        <span class="font-bold text-xl">
          View Source on GitHub
        </span>
      </a>
    </div>
    <div class="pr-20 w-6/12 flex flex-col justify-center items-center">
      <img class="openfolf--logo-hero" src="/images/Octicons-mark-github.svg" alt="openfolf logo" />
      <span class="text-6xl text-white font-black mt-10">GitHub</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hero-source",
    data() {
      return {
        dummy: "value",
      };
    },
  };
</script>

<style scoped>
  div.openfolf--hero-1 {
    background-image: url("/images/hero7.png");
  }
  img.openfolf--logo-hero {
    max-height: 60vh;
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
