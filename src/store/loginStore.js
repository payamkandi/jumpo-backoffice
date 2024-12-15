import { create } from "zustand";

export const useLoginStore = create((set) => ({
  step: "login",
  isOTPCalled: false,
  username: "",
  password: "",
  captcha: "",
  setCaptcha: (payload) => set({ captcha: payload }),
  setPassword: (payload) => set({ password: payload }),
  setUsername: (payload) => set({ username: payload }),
  setStep: (payload) => set({ step: payload }),
  setIsOTPCalled: (payload) => set({ isOTPCalled: payload }),
  onBack: () => set({ step: "login" }),
}));
