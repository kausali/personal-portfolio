/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('hello',

{
  "particles": {
    "number": {
      "value": 90,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": "#fff" //bubble color
    },
    "shape": {
      "type": "circle", //shape of circle
      "stroke": {
        "width": 0,//border of the shape
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false, //if true random bubblw will be transparent
      "anim": {
        "enable": false, //true will make the bubble blink
        "speed": 1, //greater number faster blinking
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": false, //true will make random bubble bigger or smaller in size
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,//false will not link the bubble
      "distance": 190, //distance between the bubble
      "color": "#ffffff", //color of the line
      "opacity": 0.4,
      "width": 1 //width of the lines
    },
    "move": {
      "enable": true,
      "speed": 3, //speed of the bubble how fast they move
      "direction": "none", //top, top-right, none direction in which bubble flow
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse" //repulse will push the bubbles away

      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 1,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 2
      },
      "remove": {
        "particles_nb": 8
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}

);