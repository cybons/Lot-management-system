/**
 * Export all allocation hooks (v2.2 - Phase E updated)
 */

// Legacy hooks
export { useOrderSelection } from "./useOrderSelection";
export { useAutoSelection } from "./useAutoSelection";
export { useAllocationMutation } from "./useAllocationMutation";
export { useSnackbar } from "./useSnackbar";
export { useOrderCards } from "./useOrderCards";

// New hooks (v2.2.1)
export { useAllocationCandidates, allocationCandidatesKeys } from "./useAllocationCandidates";
export {
  useCreateManualAllocationSuggestion,
  useCreateFefoAllocationSuggestion,
  useCommitAllocation,
  useCancelAllocation,
} from "./useAllocationSuggestions";
