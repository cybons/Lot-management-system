import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "@/lib/api-client"
import type { LotCreate, LotUpdate } from "@/types"

export function useLots() {
  return useQuery({
    queryKey: ["lots"],
    queryFn: api.lots.list,
  })
}

export function useLot(id: number) {
  return useQuery({
    queryKey: ["lots", id],
    queryFn: () => api.lots.get(id),
    enabled: !!id,
  })
}

export function useCreateLot() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: LotCreate) => api.lots.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lots"] })
    },
  })
}

export function useUpdateLot() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: LotUpdate }) =>
      api.lots.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lots"] })
    },
  })
}

export function useDeleteLot() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => api.lots.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lots"] })
    },
  })
}
