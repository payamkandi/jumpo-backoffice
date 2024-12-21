import { create } from "zustand";

export const useBranchRequestsStore = create((set) => ({
  requests: [],
  setRequests: (requests) => set({ requests }),
}));
