import { describe, it, expect, beforeEach, test } from "vitest";

import { useCycleList } from "../src/composables/useCycleList";

describe("useCycleList", () => {
  test.todo(
    "returns the first item in the array as the state before prev or next",
    () => {},
  );
  test.todo("sets state to the next item in the array on next()", () => {});

  test.todo("sets state to the previous item in the array on prev()", () => {});

  test.todo("cycles to the end on prev if at beginning", () => {});

  test.todo("cycles to the beginning on next if at the end", () => {});

  test.todo("Bonus: works with refs", () => {});

  test.todo("Bonus: works when the provided ref changes value", () => {});

  test.todo(
    "Bonus: resets index to 0 if updated ref doesn't include the activeIndex",
    async () => {},
  );
});
