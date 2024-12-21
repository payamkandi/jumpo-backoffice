import { create } from "zustand";
const initialState = {
  branches: [],
  setBranchInfo: null,
};
export const useBranchesStore = create((set) => ({
  ...initialState,
  setBranches: (branches) => set({ branches }),
  reset: () => set(initialState),
  toggleArchiveStatus: (id) =>
    set((state) => ({
      branches: state.branches.map((branch) =>
        branch.branchId === id
          ? { ...branch, archived: !branch.archived }
          : branch,
      ),
    })),
  toggleBranchStatus: (id) =>
    set((state) => ({
      branches: state.branches.map((branch) =>
        branch.branchId === id ? { ...branch, status: !branch.status } : branch,
      ),
    })),
}));
