import { create } from "zustand";
const initialState = {
  cards: [],
  setCardInfo: null,
};
export const useCardsStore = create((set) => ({
  ...initialState,
  setCards: (cards) => set({ cards }),
  reset: () => set(initialState),
  toggleCardStatus: (id) =>
    set((state) => ({
      cards: state.cards.map((card) =>
        card.cardId === id ? { ...card, isActive: !card.isActive } : card,
      ),
    })),
}));
