<template>
  <div>
    <div class="flex flex-col lg:flex-row-reverse">
      <img src="../../sérine.jpg" class=" w-72 lg:m-6 mt-6 mx-auto rounded-lg shadow-lg" alt="" />
      <div class="lg:flex lg:flex-col lg:justify-center mx-6 lg:mx-8">
        <p class="text-4xl font-bold py-6 font-sans">About me</p>
        <p class="text-xl font-normal font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi
          id ipsa. Quis, quam omnis atque laboriosam inventore architecto sequi
          repudiandae amet, possimus qui placeat perspiciatis voluptas a officia
          porro!
        </p>
        <p class="text-2xl font-bold pt-6 lg:pt-20">Go to a section</p>
        <div class="flex flex-row pt-4 lg:pt-8">
            <p class="text-xl font-semibold ml-6">Education</p>
            <p class="text-xl font-semibold ml-6">Experience</p>
            <p class="text-xl font-semibold ml-6">Skills</p>
            <p class="text-xl font-semibold ml-6">Contact</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>