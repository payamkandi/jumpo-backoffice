import { create } from "zustand";
const initialState = {
  scores: [],
  setScoreInfo: null,
};
export const useScoreStore = create((set) => ({
  ...initialState,
  setScores: (scores) => set({ scores }),
  reset: () => set(initialState),
}));
