<template>
  <div>
    <div class="flex flex-col lg:flex-row-reverse">
      <img
        src="../../me.jpg"
        class="w-72 lg:m-6 mt-6 mx-auto rounded-lg shadow-lg"
        alt=""
      />
      <div class="lg:flex lg:flex-col lg:justify-center mx-6 lg:mx-8">
        <p class="text-4xl py-6 md:text-5xl font-bold">About me</p>
        <p class="text-xl font-normal text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi
          id ipsa. Quis, quam omnis atque laboriosam inventore architecto sequi
          repudiandae amet, possimus qui placeat perspiciatis voluptas a officia
          porro! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloremque natus laborum facilis sapiente doloribus hic quisquam.
          Nostrum officia ad illo, deleniti quis sint non explicabo veniam quae
          hic odio itaque!
        </p>
        <p class="text-2xl font-bold pt-6 lg:pt-20">Go to a section</p>
        <div class="md:flex grid grid-cols-1 gap-2 md:flex-row pt-4 lg:pt-8">
          <p
            class="text-xl font-semibold ml-6 cursor-pointer"
            @click="scroll('education')"
          >
            Education
          </p>
          <p
            class="text-xl font-semibold ml-6 cursor-pointer"
            @click="scroll('experience')"
          >
            Experience
          </p>
          <p
            class="text-xl font-semibold ml-6 cursor-pointer"
            @click="scroll('skills')"
          >
            Skills
          </p>
          <p
            class="text-xl font-semibold ml-6 cursor-pointer"
            @click="scroll('contact')"
          >
            Contact
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
* {
  position: relative;
}
</style>