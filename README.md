## EZpays Test

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
