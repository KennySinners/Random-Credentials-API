## Person Random Generator

#### Randomly generates credentials about a made-up person

```js
const { information } = require("random-credentials-api")

information().then(person => {
      console.log(person);
}).catch(e => console.log(e));
```

<br><br>

#### Manual Example


##### Code
```js
information().then(person => {
      console.log(person);
}).catch(e => console.log(e));
```

##### What it returns
```json
{
    "Person": {
        "Name": "Nickholas",
        "Surname": "Renshaw",
        "Age": 27,
        "Family": "Has a family",
        "Sex": "Male",
        "Sexuality": "Heterosexual",
        "Email": "vavasoursbunglers2@aol.it",
        "ID": "550749512876691903"
    },
    "About_Family": {
        "Spouse": {
            "Name": "Andreea",
            "Surname": "Renshaw",
            "Age": 25,
            "Sex": "Male",
            "Sexuality": "Heterosexual",
            "Email": "cataclasmconstruer2@yahoo.com",
            "ID": "280587421554643703"
        },
        "Kids": {
            "Number_of_kids": 5,
            "About_Kids": [{
                    "name": "Esa",
                    "surname": "Renshaw",
                    "sex": "Female",
                    "age": 7
                },
                {
                    "name": "Mostafa",
                    "surname": "Renshaw",
                    "sex": "Male",
                    "age": 8
                },
                {
                    "name": "Lovel",
                    "surname": "Renshaw",
                    "sex": "Female",
                    "age": 10
                },
                {
                    "name": "Schuyler",
                    "surname": "Renshaw",
                    "sex": "Male",
                    "age": 2
                },
                {
                    "name": "Leopold",
                    "surname": "Renshaw",
                    "sex": "Female",
                    "age": 7
                }
            ]
        },
        "Pets": {
            "Number_of_pets": 2,
            "About_pets": [{
                    "name": "Brutus",
                    "age": 5,
                    "sex": "Female"
                },
                {
                    "name": "Josie",
                    "age": 5,
                    "sex": "Male"
                }
            ]
        }
    }
}
```