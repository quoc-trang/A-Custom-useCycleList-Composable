import { describe, it, expect, beforeEach, test } from "vitest";

import { useCycleList } from "../src/composables/useCycleList";
import { nextTick, ref, toRef } from "vue";
const list = ["a", "b", "c"];

describe("useCycleList", () => {
  test("returns the first item in the array as the state before prev or next", () => {
    const { state } = useCycleList(list, { initialValue: "a" });

    expect(state.value).toBe(list[0]);
  });

  test("sets state to the next item in the array on next()", async () => {
    const { state, next } = useCycleList(list, { initialValue: "b" });
    expect(state.value).toBe(list[1]);

    next();
    await nextTick();

    expect(state.value).toBe("c");
  });

  test("sets state to the previous item in the array on prev()", async () => {
    const { state, prev } = useCycleList(list, { initialValue: "b" });

    expect(state.value).toBe(list[1]);

    prev();
    await nextTick();

    expect(state.value).toBe("a");
  });

  test("cycles to the end on prev if at beginning", async () => {
    const { state, prev } = useCycleList(list, { initialValue: "a" });
    prev();
    await nextTick();
    expect(state.value).toBe("c");
  });

  test("cycles to the beginning on next if at the end", async () => {
    const { state, next } = useCycleList(list, { initialValue: "c" });
    next();
    await nextTick();
    expect(state.value).toBe("a");
  });

  test("Bonus: works with refs", async () => {
    const listRef = toRef(list);
    const initialValueRef = ref("c");
    const { state, next } = useCycleList(list, {
      initialValue: initialValueRef,
    });

    expect(state.value).toBe(listRef.value[2]);

    next();
    await nextTick();

    expect(state.value).toBe("a");
  });

  test.todo("Bonus: works when the provided ref changes value", () => {});

  test.todo(
    "Bonus: resets index to 0 if updated ref doesn't include the activeIndex",
    async () => {},
  );
});
