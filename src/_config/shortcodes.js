import { imageKeysShortcode, imagePositionalShortcode } from './shortcodes/image.js';
import { svgKeysShortcode, svgPositionalShortcode } from './shortcodes/svg.js';

const explodedText = async (text) => {
  return text.split(' ').map(word => 
    `<span class="word">${
      word.split('').map(c => 
        `<span style="
          --char-rotation: ${(-10 + (20 * Math.random())).toFixed()}deg;
          ">
            ${c}
        </span>`
      ).join('')
    }</span>`
  ).join('');
};


export default {
  imagePositionalShortcode,
  imageKeysShortcode,
  svgPositionalShortcode,
  svgKeysShortcode,
  explodedText
};
