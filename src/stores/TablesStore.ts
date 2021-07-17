import { writable } from "svelte/store";
import type { Table } from "../domains/Table";

interface ITableStore {
  loading: boolean;
  success: boolean;
  tables: Table[];
}

function createStore() {
  const state: ITableStore = {
    loading: false,
    success: false,
    tables: [],
  };
  const { subscribe, update } = writable(state);

  return {
    subscribe,
    loading: () => {
      update((state) => {
        state.loading = true;
        state.success = false;
        state.tables = [];
        return state;
      });
    },
    success: (tables: Table[]) => {
      update((state) => {
        state.loading = false;
        state.success = true;
        state.tables = tables;
        return state;
      });
    },
  };
}

export const store = createStore();
