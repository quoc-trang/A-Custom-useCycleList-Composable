---
difficulty: 1
training: true
chapter: "Chapter 7: Challenge Roundup"
tags: vue
---

# A Custom useCycleList Composable

In this challenge, you're tasked with creating a custom `useCycleList` composable.

## Requirements

The `useCycleList` composable should take in an array and return:

1. A reactive `state` property that exposes a single item in the list at a time
2. A `next` function which sets the `state` to the next sequential item in the list
   1. If already at the end cycle back to the beginning
3. A `prev` function which sets the `state` to the previous sequential item in the list
   1. If already at the beginning, go to the end

> 💡 HINT: [you can find a more advanced version of this in the VueUse docs.](https://vueuse.org/core/useCycleList/) You'll be re-creating the core features of it in this exercise

Finally, you should unit test your composable.

> 💡 HINT: write your unit test in `tests/useCycleList.test.ts` and run them with `yarn test:unit`

> 💪 BONUS: Take your composable to the next level by using TypeScript to make it type safe.

> 💪 BONUS 2: support the taking in an array, a reactive array (defined with ref), a getter function that returns an array.

![screenshot of solution](https://images.certificates.dev/csvd-training-code-challenge-23.gif)
