<template>
  <div class="mx-6 md:mx-8 my-12">
    <p class="text-4xl md:text-5xl font-bold">education</p>
    <!-- liste des elements -->
    <div
      class="
        flex flex-col
        lg:grid lg:grid-cols-2
        flex-wrap
        background
        p-4
        rounded-xl
        border-2
        shadow-lg
        mt-8
      "
    >
      <!-- premier element -->
      <div class="flex flex-col mx-auto md:max-w-xl mt-6 p-4">
        <div class="flex flex-row items-center">
          <span
            class="
              p-3
              rounded-xl
              shadow-lg
              bg-gradient-to-tr
              from-purpoleLine
              to-blueDots
            "
          >
            <img
              class="w-40 lg:w-48 rounded-full shadow-2xl"
              src="../../rennes.jpeg"
              alt=""
            />
          </span>
          <div class="grid grid-cols-1 mt-10 ml-6">
            <p class="text-2xl font-semibold">Master in computer science</p>
            <p class="text-xl font-semibold text-gray-700">
              University Rennes 1 ISTIC
            </p>
            <p class="text-xl font-normal text-gray-600">2020-2022</p>
          </div>
        </div>
        <p class="text-lg font-normal pt-8 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          velit ea numquam autem sunt quo pariatur voluptates quos! Dicta
          distinctio ipsam voluptatem veniam vel ea, aliquid optio porro numquam
          itaque.
        </p>
      </div>
      <!-- fin premier element -->
      <!-- deuxieme element -->
      <div class="flex flex-col mx-auto md:max-w-xl mt-6 p-4">
        <div class="flex flex-row items-center">
          <span
            class="
              p-3
              rounded-xl
              shadow-lg
              min-w-0 min-h-0
              bg-gradient-to-tr
              from-blueDots
              to-purpoleLine
            "
          >
            <img
              class="w-40 lg:w-48 rounded-full shadow-2xl"
              src="../../saclay.jpeg"
              alt=""
            />
          </span>
          <div class="grid grid-cols-1 mt-10 ml-6">
            <p class="text-2xl font-semibold">Master in computer science</p>
            <p class="text-xl font-semibold text-gray-700">
              University Rennes 1 ISTIC
            </p>
            <p class="text-xl font-normal text-gray-600">2020-2022</p>
          </div>
        </div>
        <p class="text-lg font-normal pt-8 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          velit ea numquam autem sunt quo pariatur voluptates quos! Dicta
          distinctio ipsam voluptatem veniam vel ea, aliquid optio porro numquam
          itaque.
        </p>
      </div>
      <!-- fin deuxieme element -->
      <!-- troisieme element -->
      <div class="flex flex-col mx-auto md:max-w-xl mt-6 p-4">
        <div class="flex flex-row items-center">
          <span
            class="
              p-3
              rounded-xl
              shadow-lg
              min-w-0 min-h-0
              bg-gradient-to-tr
              from-purpoleLine
              to-blueDots
            "
          >
            <img
              class="w-40 lg:w-48 rounded-full shadow-2xl"
              src="../../polytech.png"
              alt=""
            />
          </span>
          <div class="grid grid-cols-1 ml-6">
            <p class="text-2xl font-semibold">Master in computer science</p>
            <p class="text-xl font-semibold">University Rennes 1 ISTIC</p>
            <p class="text-xl font-normal">2020-2022</p>
          </div>
        </div>
        <p class="text-lg font-normal pt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          velit ea numquam autem sunt quo pariatur voluptates quos! Dicta
          distinctio ipsam voluptatem veniam vel ea, aliquid optio porro numquam
          itaque.
        </p>
      </div>

      <!-- fin des elements -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
};
</script>

<style scoped>
.background {
  background: rgb(194, 194, 194);
  background: linear-gradient(
    135deg,
    rgb(237, 241, 245, 0.7) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgb(242, 236, 245, 0.7) 100%
  );
}
</style>