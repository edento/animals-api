# Animals API #
Deployed at https://api-animals.herokuapp.com/

## How to use ##
This API was written in order to allow student to practice http requests.
Base URL:  https://api-animals.herokuapp.com/api

### Fetch Animals ###
<b>Method</b>: GET

<b>route</b>: /animal

<b>Response</b>
```
{
    "animals": [
        {
            "id": "5d39c59f175108105e142638",
            "name": "Helen Grant",
            "age": 1,
            "type": "Rabbits"
        },
        {
            "id": "5d39c59f175108105e142639",
            "name": "Victoria Bennett",
            "age": 0,
            "type": "Rabbits"
        }
        // more animals here
    ]
```

#### Example ####
```
curl -X GET -H "Content-type: application/json" -H "Accept: application/json"  "https://api-animals.herokuapp.com/api/animal"
```

## TODO: ##
1. Add update request
2. add doc for reset request

