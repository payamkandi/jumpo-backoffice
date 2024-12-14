import { create } from "zustand";

const initialState = {
  sidebar: false,
};

export const useLayoutStore = create((set) => ({
  ...initialState,
  setSidebar: (value) => set({ sidebar: value }),
  toggleSideBar: () => set((state) => ({ sidebar: !state.sidebar })),
  reset: () => set(initialState),
}));
