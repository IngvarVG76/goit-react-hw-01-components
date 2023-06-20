const colors = [
  '#f95959',
  '#455d7a',
  '#ff6f3c',
  '#ffcab0',
  '#f96d00',
  '#f76b8a',
  '#7c73e6',
  '#97cba9',
  '#42b883',
  '#8dc6ff',
  '#e84a5f',
  '#f8b400',
];

// Randomly choose preset color
export function generateRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  return randomColor;
}

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Randomly generate color
// export function generateRandomColor() {
//   Generate random values for red, green, and blue components
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   const color = '#' + red.toString(16) + green.toString(16) + blue.toString(16);
//   return color;
// }
