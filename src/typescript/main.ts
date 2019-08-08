const { rword } = require("rword");
const { ems, emis } = require("./assets/lib/long_arrays/emails");
const { gen } = require("./gen");
const { names } = require("./assets/lib/long_arrays/names");
const { dogs } = require("./assets/lib/long_arrays/dogs");
const array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function Info(person: { name?: String, surname?: String, age?: Number }, jobs?: Array<string>, family?: Boolean, wife?: String, pets?: Array<Object>, objKids?: Array<Object>) {

      const words = rword.generate(2).join("");
      const nums = array[Math.floor(Math.random() * array.length)];
      const email = `${words}${nums}@${ems[Math.floor(Math.random() * ems.length)]}`;
      const secondEmail = `${words}${nums}@${emis[Math.floor(Math.random() * emis.length)]}`;
      const generated = gen(18);
      const anothergen = gen(18);
      const fam = family === true ? "This person has a family" : "This person does not have a family";

      for (let i = 0; i < objKids.length; i++) {
            const randomAge = Math.floor(Math.random() * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].length);
            objKids[i] = {
                  name: names[Math.floor(Math.random() * names.length)],
                  surname: person.surname || "Doe",
                  age: randomAge === 0 ? 5 : randomAge
            }
      }

      for (let y = 0; y < pets.length; y++) { 
            const randomAge = Math.floor(Math.random() * 16);
            pets[y] = { 
                  name: dogs[Math.floor(Math.random() * dogs.length)],
                  age: randomAge === 0 ? 1 : randomAge
            }
      }

      if (family === true) {

            return {
                  Person: {
                        Name: person.name === "" || person.name === undefined ? person.name = "Jon" : person.name,
                        Surname: person.surname === "" || person.surname === undefined ? person.surname = "Doe" : person.surname,
                        Age: person.age || 25,
                        Email: email,
                        ID: generated
                  }, Jobs: jobs, Family: fam, About_Family: {
                        Wife: {
                              Name: wife !== undefined ? wife : "No Wife",
                              Surname: person.surname,
                              Age: Number(person.age) - 2 || 25 - 2,
                              Email: secondEmail,
                              ID: anothergen
                        },
                        Kids: {
                              Number_of_kids: objKids.length,
                              About_Kids: objKids
                              
                        },
                        Pets: {
                              Number_of_pets: pets.length,
                              About_pets: pets
                        }
                  }
            };
      } else {
            return {
                  Person: {
                        Name: person.name === "" || person.name === undefined ? "Jon" : person.name,
                        Surname: person.surname === "" || person.surname === undefined ? "Doe" : person.surname,
                        Age: person.age,
                        Email: email,
                        ID: gen(18)
                  }, Jobs: jobs.join(", "), Family: "This person does not have a family"
            };
      };
};
