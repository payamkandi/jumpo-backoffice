// src/store/authStore.js
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  userInfo: null,
  login: (navigate) => {
    set({ isAuthenticated: true });
    navigate("/home");
  },
  logout: () => set({ isAuthenticated: false, userInfo: null }),
}));
