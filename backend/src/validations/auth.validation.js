import { z } from 'zod'

export const authSchema = z.object({
    userName: z.string().min(1),
    password: z.string().min(6),
    assignedArena: z.enum(['North', 'South', 'Center', 'All']),
    email: z.email().min(1),
    role: z.enum(['admin', 'arena_user', 'general_user'])
})


export const updateAuthSchema = z.object({
    userName: z.string().optional(),
    password: z.string().min(6).optional(),
    assignedArena: z.enum(['North', 'South', 'Center', 'All']).optional(),
    email: z.email().optional(),
    role: z.enum(['admin', 'arena_user', 'general_user']).optional()
})



export const loginSchema = z.object({
    password: z.string().min(6),
    email: z.email(),
})


