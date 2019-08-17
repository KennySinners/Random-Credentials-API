import { maleNames } from "./assets/lib/long_arrays/male";
import { femaleNames } from "./assets/lib/long_arrays/female";
import { surnames } from "./assets/lib/long_arrays/surname";
import { gen } from "./gen";
import { dogs } from "./assets/lib/long_arrays/dogs";
import { rword } from "rword";
import { ems, emis } from "./assets/lib/long_arrays/emails";
const array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const information =
    async (person?: { name?: string, surname?: string, age?: number, sex?: string, sexuality?: string, family?: boolean }, spouse?: { name?: string, surname?: string, age?: number, sex?: string, sexuality?: string }, kids: Array<object> = [], pets: Array<object> = []) => {

        const words = rword.generate(2).toString().split(",").join("");
        const word = rword.generate(2).toString().split(",").join("");
        const nums = array[Math.floor(Math.random() * array.length)];
        const email = `${words}${nums}@${ems[Math.floor(Math.random() * ems.length)]}`;
        const secondEmail = `${word}${nums}@${emis[Math.floor(Math.random() * emis.length)]}`;
        const generated = gen(18);
        const anothergen = gen(18);
        const num = Math.floor(Math.random() * 7);
        const petNum = Math.floor(Math.random() * 7);
        let kid = {
            sex: ''
        }

        if (!person) {
            person = {
                name: maleNames[Math.floor(Math.random() * maleNames.length)],
                surname: surnames[Math.floor(Math.random() * surnames.length)],
                age: 27,
                sex: ["Male", "Female"][Math.floor(Math.random() * ["Male", "Female"].length)],
                family: true
            }
        }

        if (person.family === true) {
            if (!spouse) {
                spouse = {
                    name: femaleNames[Math.floor(Math.random() * femaleNames.length)],
                    surname: person.surname,
                    age: person.age - 3,
                    sex: ["Male", "Female"][Math.floor(Math.random() * ["Male", "Female"].length)]
                }
            }

            if (!kids.length) {

                for (let i = 0; i < num; i++) {
                    kids.push({
                        name: kid.sex.toLowerCase() === "female" ? femaleNames[Math.floor(Math.random() * femaleNames.length)] : maleNames[Math.floor(Math.random() * maleNames.length)],
                        surname: person.surname,
                        sex: ["Male", "Female"][Math.floor(Math.random() * ["Male", "Female"].length)],
                        age: person.age >= 27 && person.age <= 35 ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12][Math.floor(Math.random() * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].length)] : [13, 14, 15, 16, 17, 18, 19, 20][Math.floor(Math.random() * [13, 14, 15, 16, 17, 18, 19, 20].length)]
                    })
                }
            }

            if (!pets.length) {

                for (let i = 0; i < petNum; i++) {
                    pets.push({
                        name: dogs[Math.floor(Math.random() * dogs.length)],
                        age: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15][Math.floor(Math.random() * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].length)],
                        sex: ["Male", "Female"][Math.floor(Math.random() * ["Male", "Female"].length)]
                    })
                }

            }
        }

        if (person.sex === spouse.sex) {
            person.sexuality = "Homosexual";
            spouse.sexuality = "Homosexual";
        } else {
            person.sexuality = "Heterosexual";
            spouse.sexuality = "Heterosexual";
        }


        const object = {
            Person: {
                Name: person.name,
                Surname: person.surname,
                Age: person.age,
                Family: person.family === true ? "Has a family" : "Doesn't have a family",
                Sex: person.sex,
                Sexuality: person.sexuality,
                Email: email,
                ID: generated
            },
            About_Family: {
                Spouse: {
                    Name: spouse.name ? spouse.name : "No spouse",
                    Surname: spouse.surname,
                    Age: Number(person.age) - 2 || 25 - 2,
                    Sex: person.sex,
                    Sexuality: person.sexuality,
                    Email: secondEmail,
                    ID: anothergen
                },
                Kids: {
                    Number_of_kids: !kids.length ? "No kids" : kids.length,
                    About_Kids: kids

                },
                Pets: {
                    Number_of_pets: !pets.length ? "No pets" : pets.length,
                    About_pets: pets
                }
            }
        }

        return new Promise((res, rej) => {
            res(object);
            rej(object);
        })
    }

export { information };