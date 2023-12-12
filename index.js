const btnNode = document.querySelector('.js-btn');
const trafficLightNode = document.querySelector('.js-traffic-light');
const bttNode = document.querySelector('.js-btt');
const trafficLightNode2 = document.querySelector('.js-traffic-light2');
const btpNode = document.querySelector('.js-btp');
const trafficLightNode3 = document.querySelector('.js-traffic-light3');




initLight(trafficLightNode);

btnNode.addEventListener('click', function() {
    switchLight(trafficLightNode);
});
 

initLight(trafficLightNode2);

bttNode.addEventListener('click', function() {
    switchLight(trafficLightNode2);
});

initLight(trafficLightNode3);

btpNode.addEventListener('click', function() {
    switchLight(trafficLightNode3);
});
