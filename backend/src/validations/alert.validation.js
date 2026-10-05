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
    displayName: z.string(),
    priority: z.enum(['Low', 'Medium', 'High', 'Critical']),
    lat: z.number(),
    lng: z.number(),
    arena: z.string(),
    description: z.string(),
    status: z.enum(['open', 'in_progress', 'closed'])
})
