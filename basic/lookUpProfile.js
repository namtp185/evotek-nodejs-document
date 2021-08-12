// Setup
const contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  const profile = contacts.find(el => {
    return el["firstName"] === name;
  });
  if(!profile) {
      return "No such contact";
  }
  const value = profile[prop];
  if(!value) {
      return "No such property";
  }
  return value;
  // Only change code above this line
}

const value = lookUpProfile("Kristian", "lastName")
console.log(value);