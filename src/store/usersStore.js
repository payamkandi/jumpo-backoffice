import { create } from "zustand";
const initialState = {
  users: [],
};
export const useUsersStore = create((set) => ({
  ...initialState,
  setUsers: (users) => set({ users }),
  reset: () => set(initialState),
}));
