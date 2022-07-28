import create from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
    theme: string
    changeTheme: (newTheme: string) => void
}

export const useThemeStore = create(
    persist<ThemeState>(
        (set) => ({
            theme: 'light',
            changeTheme: (newTheme: string) => set({ theme: newTheme }),
        }),
        { name: 'theme' }
    )
)
