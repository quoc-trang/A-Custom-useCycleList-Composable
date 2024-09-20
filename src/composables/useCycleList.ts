import {
  ref,
  toRef,
  toValue,
  watch,
  type MaybeRef,
  type MaybeRefOrGetter,
  type Ref,
} from "vue";

export function useCycleList<T>(
  list: MaybeRefOrGetter<T[]>,
  options?: useCycleListOptions<T>,
): useCycleListReturn<T> {
  const state = ref(getInitialValue()) as Ref<T>;
  const index = ref<number>(toValue(list).indexOf(state.value));
  const targetList = toRef(list);
  const lastIndex = targetList.value.length - 1;

  function getInitialValue() {
    return toValue(options?.initialValue ?? toValue(list)[0]);
  }

  function prev() {
    if (index.value === 0) {
      index.value = lastIndex;
      return;
    }
    index.value--;
  }

  function next() {
    if (index.value === lastIndex) {
      index.value = 0;
      return;
    }
    index.value++;
  }

  watch(index, (newValue) => {
    state.value = targetList.value[newValue] as T;
  });

  return {
    prev,
    next,
    state,
  };
}

export interface useCycleListReturn<T> {
  state: Ref<T>;
  next: () => void;
  prev: () => void;
}

export interface useCycleListOptions<T> {
  initialValue?: MaybeRef<T>;
}
