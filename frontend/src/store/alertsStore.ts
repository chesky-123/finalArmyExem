import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export const useAlertStore = create()(
    persist(
        (set) => ({
            
        }),
        {
            name: 'alert-storage'
        }
    )
)
