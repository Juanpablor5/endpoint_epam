# ENDPOINT Backend Coding Challenge

0. Install all the dependencies with `npm install`

1. Fill the file `data/input.txt` with the instructions. For example:
```
CREATE fruits
CREATE vegetables
CREATE grains
CREATE fruits/apples
CREATE fruits/apples/fuji
LIST
CREATE grains/squash
MOVE grains/squash vegetables
CREATE foods
MOVE grains foods
MOVE fruits foods
MOVE vegetables foods
LIST
DELETE fruits/apples
DELETE foods/fruits/apples
LIST
```

2. Run the program with the command `npm start`

3. Run the unit tests with the command `npm test`

## Explanation of the used Design Pattern
To solve this problem, it was decided to use the Factory Design pattern, since all the commands required similar parameters with small logic changes.