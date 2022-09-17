import { defineStore } from "pinia";
import type ChangelogEntry from "../ChangelogEntry";

export type ChangelogItem = {
  id: number;
  entry: ChangelogEntry;
};

export const useAppStore = defineStore("changelog", {
  state: () => ({
    items: [] as ChangelogItem[],
    lastId: 0,
    username: undefined as undefined | string,
  }),
  actions: {
    getEntry(id: number): ChangelogEntry | undefined {
      return this.items.find((e) => e.id === id)?.entry;
    },
    addEntry(entry: ChangelogEntry) {
      this.items.push({
        id: this.getNewId(),
        entry,
      });
    },
    removeEntry(id: number) {
      this.items.splice(
        this.items.findIndex((e) => e.id === id),
        1
      );
    },
    getNewId(): number {
      this.lastId += 1;

      return this.lastId;
    },
  },
  getters: {},
});
