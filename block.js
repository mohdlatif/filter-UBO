/// block.js
document.addEventListener('DOMContentLoaded', function(event) {
let video = document.querySelector('[x-for*="video"]'); video.parentNode.parentElement.remove();
console.log("Hello I'm running via scriptlet injection.");
});


