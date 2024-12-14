import { create } from "zustand";
import { useLayoutStore } from "./layoutStore";
import { useUsersStore } from "./usersStore";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  userInfo: null,
  login: (navigate) => {
    set({ isAuthenticated: true });
    navigate("/manage-users");
  },
  logout: () => {
    useLayoutStore.getState().reset();
    useUsersStore.getState().reset();
    set({ isAuthenticated: false, userInfo: null });
  },
}));
