// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "npm_package_name",
    message: "What's the name of your package? Ex: (My service api)"
  },
  {
    type: "input",
    name: "npm_package_description",
    message: "New service description: "
  }
];
