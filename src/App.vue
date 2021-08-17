<template>
<div class="">
  <Header/>
  <Education/>
  <Experience/>
  <Skills/>
  <Contact/>

</div>
  
</template>

<script>
import Header from './components/Header.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue';
import Contact from './components/Contact.vue'
export default {
  name : 'App',
  components : {
    Header,
    Education,
    Skills,
    Experience,
    Contact,
    
  }
}
</script>