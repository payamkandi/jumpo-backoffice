import { create } from "zustand";

const initialState = {
  discounts: [],
  setDiscountInfo: null,
};
export const useDiscountsStore = create((set) => ({
  ...initialState,
  setDiscounts: (discounts) => set({ discounts }),
  reset: () => set(initialState),
  toggleDiscountStatus: (id) =>
    set((state) => ({
      discounts: state.discounts.map((discount) =>
        discount.discountId === id
          ? { ...discount, codeStatus: !discount.codeStatus }
          : discount,
      ),
    })),
}));
