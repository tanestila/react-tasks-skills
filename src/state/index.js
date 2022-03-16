import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "All",
});

export const categoryListState = atom({
  key: "categoryListState",
  default: [],
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.complete);
      case "Show Uncompleted":
        return list.filter((item) => !item.complete);
      default:
        return list;
    }
  },
});
