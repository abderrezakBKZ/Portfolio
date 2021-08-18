<template>
  <div>
    <div class="mx-6 md:mx-8 font-sans mt-6">
      <p class="text-4xl md:text-5xl font-bold pt-6 pb-3">Skills</p>
    </div>

<div class="mx-4">
      <div
      class="
        mx-auto
        text-center
        grid grid-cols-3
        gap-6
        py-6
        lg:flex
        lg:max-w-4xl
        lg:flex-row
        lg:justify-center
        lg:mx-auto
        bg-gradient-to-r
        from-purpoleLine
        to-blueDots
        rounded-xl
        lg:rounded-full

      "
    >
      <span class="text-center">
          <i class="fab fa-java fa-4x transition duration-450 transform hover:-translate-y-8"></i>
          <p class="text-lg font-bold">Java</p>
      </span>
      <span>
          <i class="fab fa-js-square fa-4x transition duration-450 transform hover:-translate-y-8"></i>
          <p class="text-lg font-bold">JavaScript</p>
      </span>
      <span>
          <i class="fab fa-python fa-4x transition duration-450 transform hover:-translate-y-8"></i>
          <p class="text-lg font-bold">Python</p>
      </span>
      <span>
          <i class="fas fa-database fa-4x transition duration-450 transform hover:-translate-y-8"></i>
          <p class="text-lg font-bold">MongoDB</p>
      </span>
      <span>
          <i class="fab fa-node fa-4x transition duration-450 transform hover:-translate-y-8"></i>
          <p class="text-lg font-bold">NodeJS</p>
      </span>
      <span>
          <i class="fab fa-vuejs fa-4x transition duration-450 transform hover:-translate-y-8"></i>
          <p class="text-lg font-bold">VueJS</p>
      </span>
      
      <span>
          <i class="fab fa-php fa-4x transition duration-450 transform hover:-translate-y-8"></i>
          <p class="text-lg font-bold">PHP</p>
      </span>
      <span>
          <i class="fas fa-database fa-4x transition duration-450 transform hover:-translate-y-8"></i>
          <p class="text-lg font-bold">MySQL</p>
      </span>
      <span>
          <i class="fab fa-laravel fa-4x transition duration-450 transform hover:-translate-y-8"></i>
          <p class="text-lg font-bold">Laravel</p>
      </span>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>