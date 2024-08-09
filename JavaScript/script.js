// // scripts.js

// document.addEventListener('DOMContentLoaded', function() {
//     // Select the element with the class "animated-background"
//     var animatedBackground = document.querySelector('.animated-background');
  
//     // Initialize particles.js on the element with the ID "animated-background"
//     particlesJS('animated-background', {
//       particles: {
//         number: {
//           value: 50, // Number of particles
//           density: {
//             enable: true, // Enable density calculation
//             value_area: 800 // Area for density
//           }
//         },
//         color: {
//           value: '#ffffff' // Particle color
//         },
//         shape: {
//           type: 'circle', // Shape of particles
//           stroke: {
//             width: 0, // No stroke width
//             color: '#000000' // Stroke color (not used here)
//           },
//           polygon: {
//             nb_sides: 5 // Number of polygon sides (not used here)
//           }
//         },
//         opacity: {
//           value: 0.5, // Opacity of particles
//           random: false, // No random opacity
//           anim: {
//             enable: false // No animation for opacity
//           }
//         },
//         size: {
//           value: 3, // Size of particles
//           random: true, // Randomize size
//           anim: {
//             enable: true // No animation for size
//           }
//         },
//         line_linked: {
//           enable: true, // Enable lines between particles
//           distance: 150, // Distance to draw lines
//           color: '#ffffff', // Color of lines
//           opacity: 0.4, // Opacity of lines
//           width: 1 // Width of lines
//         },
//         move: {
//           enable: true, // Enable particle movement
//           speed: 6, // Speed of movement
//           direction: 'none', // Movement direction
//           random: false, // No random movement direction
//           straight: false, // No straight-line movement
//           out_mode: 'out', // Mode for particles leaving canvas
//           bounce: false, // No bouncing off edges
//           attract: {
//             enable: false // No attraction between particles
//           }
//         }
//       },
//       interactivity: {
//         detect_on: 'canvas', // Interactivity detection on canvas
//         events: {
//           onhover: {
//             enable: true, // Enable hover effects
//             mode: 'repulse' // Repel particles on hover
//           },
//           onclick: {
//             enable: true, // Enable click effects
//             mode: 'push' // Add particles on click
//           },
//           resize: true // Enable resize detection
//         },
//         modes: {
//           grab: {
//             distance: 400, // Distance for grabbing effect
//             line_linked: {
//               opacity: 1 // Opacity of lines in grab mode
//             }
//           },
//           bubble: {
//             distance: 400, // Distance for bubble effect
//             size: 40, // Size of bubbles
//             duration: 2, // Duration of bubble effect
//             opacity: 8, // Opacity of bubbles
//             speed: 3 // Speed of bubble effect
//           },
//           repulse: {
//             distance: 200, // Distance for repulsion effect
//             duration: 0.4 // Duration of repulsion effect
//           },
//           push: {
//             particles_nb: 4 // Number of particles to push
//           },
//           remove: {
//             particles_nb: 2 // Number of particles to remove
//           }
//         }
//       },
//       retina_detect: true // Enable retina display support
//     });
// });
  
console.log("Hello World")

document.addEventListener('DOMContentLoaded', function(){
    particlesJS('animated-background', {
        particles: {
            number : {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity : {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1 
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
            
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 1
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 3
                }
            }
        },
        retina_detect: true
    });
});