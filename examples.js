var all_objects = [
    {
      "radians": 0,
      "radius": 11,
      "speed": 1.4,
    },
    {
        "radians": 0,
        "radius": 15,
        "speed": 1.1,
    },
    {
        "radians": 0,
        "radius": 25,
        "speed": 0.9,
    },
    {
        "radians": 0,
        "radius": 35,
        "speed": 0.7,
    },
    {
        "radians": 0,
        "radius": 55,
        "speed": 0.4,
    },
    {
        "radians": 0,
        "radius": 70,
        "speed": 0.3,
    },
    {
        "radians": 0,
        "radius": 80,
        "speed": 0.2,
    },
    {
        "radians": 0,
        "radius": 90,
        "speed": 0.1,
    }
];


const terrestrial = document.querySelectorAll('.terrestrial');
const terrestrial_orbits = document.querySelectorAll('.terrestrial_orbit');

for (let i = 0; i < terrestrial_orbits.length; i++) {
    terrestrial_orbits[i].style.height = all_objects[i].radius * 10 + "px";
    terrestrial_orbits[i].style.width = all_objects[i].radius * 10 + "px";
}

function update_planet(){
    for (let i = 0; i < terrestrial.length; i++) {
        terrestrial[i].style.left = Math.cos((all_objects[i].radians)) * all_objects[i].radius * 10 + "px";
        terrestrial[i].style.top = Math.sin((all_objects[i].radians)) * all_objects[i].radius * 10 + "px";
        all_objects[i].radians += all_objects[i].speed * 0.01;
    }
}
setInterval(update_planet, 15)
