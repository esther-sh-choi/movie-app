// const parent = () => {
//   const color = "blue";

//   child(color);
// };

// const child = (color) => {
//   console.log(`The color is ${color}.`);
// };

// parent();

/*****************************************************/

// const parent = () => {
//   console.log(`The color is ${color}.`);

//   child();
// };

// const child = () => {
//   const color = "blue";
// };

// parent();

/*****************************************************/

const parent = () => {
  let color = "";

  const getColor = (inputColor) => {
    color = inputColor;
  };

  child(getColor);
  console.log(`The color is ${color}.`);
};

const child = (getColorFn) => {
  return getColorFn("blue");
};

parent();
