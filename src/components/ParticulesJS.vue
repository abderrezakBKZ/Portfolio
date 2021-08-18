<template>
  <div>
    <div id='particles-js' class="relative min-h-full">
  </div>
  <div class="absolute inset-0">
      <Header />
      <Education  />
      <Skills  />
      <Contact />
  </div>
  </div>
</template>

<script>
 import Header from './Header.vue'
 import Education from './Education.vue'
 import Skills from './Skills.vue'
 import Contact from './Contact.vue'
export default {
  name: 'ParticlesJS',
  components : {
     Header,
     Education,
     Skills,
     Contact,
  },

  mounted () {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },

  methods: {
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js', {
        'particles': {
          'number': {
            'value': 80,
            'density': {
              'enable': true,
              'value_area': 800
            }
          },
          'color': {
            'value': '#0A6EAB'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#DCEF1B'
            },
            'polygon': {
              'nb_sides': 5
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 200
            }
          },
          'opacity': {
            'value': 0.25,
            'random': false,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.1,
              'sync': false
            }
          },
          'size': {
            'value': 10,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 60,
              'size_min': 0.1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': true,
            'distance': 300,
            'color': '#EF1BEF',
            'opacity': 0.2,
            'width': 2
          },
          'move': {
            'enable': true,
            'speed': 12,
            'direction': 'none',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': false,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': false,
              'mode': 'repulse'
            },
            'onclick': {
              'enable': true,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 800,
              'line_linked': {
                'opacity': 1
              }
            },
            'bubble': {
              'distance': 800,
              'size': 80,
              'duration': 2,
              'opacity': 0.8,
              'speed': 3
            },
            'repulse': {
              'distance': 400,
              'duration': 0.4
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      })
    }
  }

}
</script>

<style>
/* Your styles */
</style>
