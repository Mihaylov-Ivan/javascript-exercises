const findTheOldest = function(people) {
    const dateObject = new Date();
    let date = dateObject.getFullYear();
    let name = "";
    let oldestAge = 0;

    people.forEach(person => {
        if (person.yearOfDeath){
            age = person.yearOfDeath - person.yearOfBirth;
            if (age > oldestAge){
                oldestAge = age;
                name = person.name;
            }
        }
        else{
            age = date - person.yearOfBirth;
            if (age > oldestAge){
                oldestAge = age;
                name = person.name;
            }
        }
    });

    return {name: name, age: oldestAge};
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
