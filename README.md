## EZpays Test

EZPays Backend Test

Please finish the tasks specified below and send us the code as a '.zip' file afterwards. (or gh link)
Keep the following in mind while implementing the given tasks:
  The goal is to give you the chance to give us an impression of your coding style, coding skills and architectural knowledge.
  We do not only want to have the tasks solved, but solved in a beautiful way.
- Do it as you would do it in a real world project! Keep the app maintainable and extendable.
- When you've finished your work please delete the "node_modules" folders. We'll run `npm install` when we receive your test.
- Please send us the result as github link to sunil at ezpays.io .

Good Luck!

1. build a simple KOA API using typescript
2. API should have an endpoint where you can send a json file
3. Service will parse the file and make sure data follows a structure of an array of objects with keys: user (string) and amount (number)
  - tip: make sure your code is modular and follow SOLID principles
4. Bonus points: add unit tests

Example valid json file:
[{user: "test", amount: 434}, {...}]

There is not limit of time, just make it whenever you have free time, thanks! 🚀


This contains the solution to the problem above.

As this is written in typescript, you would need to install dependencies using `yarn` (preferred), but `npm` would also work.

Run

```bash
yarn # Or, npm install if you want to use npm
```

And compile using to javascript using `yarn build`

Run

```bash
yarn build
```

and run `yarn start` to intialize the project

Run

```bash
yarn start
```

The result would be should on the terminal. If an empty object is returned, then it means that there was no winner as no one's bid was above the reserve price.

The code runs on PORT 3000 as default. You could to run it on a different PORT by creating a `.env` file and assign `PORT` to whichever PORT number you decide e.g PORT=5050 would cause the project to run on PORT 5050.


## Testing

The test for this algorithm is written in the bids.ts file which is in the __tests__ folder.

To run the test, you would need to have installed dependencies using the step above.

then run `yarn test`

Run

```bash
yarn test
```
