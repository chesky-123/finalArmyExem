import { z } from 'zod'

export const alertSchema = z.object({
    displayName: z.string().min(1),
    priority: z.enum(['Low', 'Medium', 'High', 'Critical']),
    lat: z.number().min(1),
    lon: z.number().min(1),
    arena: z.enum(['North', 'South', 'Center']),
    description: z.string().min(1),
    status: z.enum(['active', 'handled']).default('open')
})


export const updateAlertSchema = z.object({
    displayName: z.string().optional(),
    priority: z.enum(['Low', 'Medium', 'High', 'Critical']).optional(),
    lat: z.number().optional(),
    lon: z.number().optional(),
    arena: z.enum(['North', 'South', 'Center']).optional(),
    description: z.string().optional(),
    status: z.enum(['active', 'handled']).optional()
})
