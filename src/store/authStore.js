// src/store/authStore.js
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  userInfo: null,
  login: (user) => set({ isAuthenticated: true, userInfo: user }),
  logout: () => set({ isAuthenticated: false, userInfo: null }),
}));
