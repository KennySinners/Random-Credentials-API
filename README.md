## Person Random Generator

#### Randomly generates credentials about a made-up person

```js
/**
 * @typedef {Object} person
 * @property {string} name [n]
 * @property {string} surname [n]
 */

const { Info } = require("person-random-gen");

console.log(Info({ name: "", surname: "" })) // Person: { Name: "Jon", Surname: "Doe", Age: 25, Email: "...", ID: "..." }
```

```js
/**
 * @param {Number} [n]
 */

const { Info } = require("person-random-gen");

console.log(Info({...}, 25)) // Person: { (...), Age: 25 }
```

```js
/**
 * @param {string[]} [n]
 */

const { Info } = require("person-random-gen");

console.log(Info({...}, (...), ["Software Engineer"])) // Person: { ... }, Jobs: ['Software Engineer']
```

```js
/**
 * @param {boolean} [n]
 */

const { Info } = require("person-random-gen");

console.log(Info({...}, (...), [...], true)) // Person: {...}, Jobs: [...], "This Person has a family"
```

```js
/**
 * @param {string} [n]
 */

const { Info } = require("person-random-gen");

console.log(Info({...}, (...), [...], boolean, "Karen")) // Person: {...}, Jobs: [...], "...", Wife: { Name: "Karen", Surname: "Doe", Age: 23, Email: "...", ID: "..."} 
```

```js
/**
 * @typedef {object[]} [n]
 * @property {string} name
 * @property {number} age
 */

const { Info } = require("person-random-gen");

console.log(Info(..., "Karen", [{ name: "", age: 0 }])) //..., Wife: {...}, Pets: { Number_of_pets: 1, About_pets: [ { name: "Fido", age: 5 }]}
```

```js
/**
 * @typedef {object[]} [n]
 * @property {string} name
 * @property {string} surname
 * @property {number} age
 */

const { Info } = require("person-random-gen");

console.log(Info(..., [{...}], [ { name: "Danny", surname: "Doe", age: 5 }])) //..., Pets: {...}, Kids: { Number_of_kids: 1, About_Kids: [ { name: "Danny", surname: "Doe", age: 5 }]}
```

<br><br>

#### Manual Example


##### Code
```js
Info({ name: "Johnny", surname: "Depp", age: 25} , ["Software Engineer", "Chef"], true, "Karen", [ { name: "", age: 0 }], [ { name: "", surname: "", age: 0}])
```

##### What it returns
```json
{
      "Person": {
            "Name": "Johnny",
            "Surname": "Depp",
            "Age": 25,
            "Email": "caliberedmythicise2@globo.com",
            "ID": "629386460374631443"
      },
      "Jobs": [
            "Software Engineer",
            "Chef"
      ],
      "Family": "This person has a family",
      "About_Family": {
            "Wife": {
                  "Name": "Karen",
                  "Surname": "Depp",
                  "Age": 23,
                  "Email": "caliberedmythicise2@charter.net",
                  "ID": "163855868260278880"
            },
            "Kids": {
                  "Number_of_kids": 1,
                  "About_Kids": [{
                        "name": "Riccardo",
                        "surname": "Depp",
                        "age": 16
                  }]
            },
            "Pets": {
                  "Number_of_pets": 1,
                  "About_pets": [{
                        "name": "Benji",
                        "age": 12
                  }]
            }
      }
}
```