

export interface User {
    _id: string
    email: string
    username: string
    role: 'viewer' | 'editor' | 'admin'
    assignedArena: 'All' | 'Center' | 'South' | 'North'
}

export interface AuthState {
    token: string | null
    user: User | null
    setAuth: (token: string, user: User) => void
    logout: () => void
}
