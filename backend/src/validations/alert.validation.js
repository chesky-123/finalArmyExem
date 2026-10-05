import { z } from 'zod'

export const alertSchema = z.object({
    displayName: z.string().min(1),
    priority: z.enum(['Low', 'Medium', 'High', 'Critical']),
    lat: z.number().min(1),
    lng: z.number().min(1),
    arena: z.string().min(1),
    description: z.string().min(1),
    status: z.enum(['open', 'in_progress', 'closed']).default('open')
})


export const updateAlertSchema = z.object({
    displayName: z.string().optional(),
    priority: z.enum(['Low', 'Medium', 'High', 'Critical']).optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    arena: z.string().optional(),
    description: z.string().optional(),
    status: z.enum(['open', 'in_progress', 'closed']).optional()
})
