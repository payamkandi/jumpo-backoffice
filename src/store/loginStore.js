import { create } from "zustand";

export const useLoginStore = create((set) => ({
  step: "login",
  isOTPCalled: false,
  setStep: (payload) => set({ step: payload }),
  setIsOTPCalled: (payload) => set({ isOTPCalled: payload }),
}));
