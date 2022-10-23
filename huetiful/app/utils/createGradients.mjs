import { gradients } from '../js/gradients.mjs';

//Take a data object containing key:value[] of the colors needed to make the gradient.
export default function createGradients() {
    const gradientsContainer = document.getElementById('gradients');



    gradients.forEach((node) => {
        const rotation = 60;
        const gradientItem = document.createElement('div');

        gradientItem
            .append(document.createElement('p')
                .textContent = `${node.name} <br>${node.colors}`);


        gradientItem
            .classList
            .add('gradient-item');

        gradientItem
            .style.
            setProperty('background', `linear-gradient(${rotation}deg,${node.colors})`);
        gradientsContainer.appendChild(gradientItem);

    });

}

