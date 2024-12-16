import { create } from "zustand";
const initialState = {
  cards: [],
  setCardInfo: null,
};
export const useSellCardsStore = create((set) => ({
  ...initialState,
  setCards: (cards) => set({ cards }),
  reset: () => set(initialState),
}));
