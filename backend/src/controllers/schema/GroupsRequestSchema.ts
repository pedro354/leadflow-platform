import z from "zod";

const LeadsStatusSchema = z.enum([
    "New",
    "Contacted",
    "Qualified",
    "Converted",
    "Unresponsive",
    "Disqualified",
    "Archived",
]);


export const CreateGroupRequestSchema = z.object({
    name: z.string(),
    description: z.string()
})

export const UpdateGroupRequestSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional()
})

export const GetGroupLeadsRequestSchema = z.object({
    page: z.string().optional(),
    pageSize: z.string().optional(),
    name: z.string().optional(),
    status: LeadsStatusSchema.optional(),
    sortBy: z.enum(["name", "email"]).optional(),
    order: z.enum(["asc", "desc"]).optional()
})

export const AddGroupLeadsRequestSchema = z.object({
    leadId: z.number()
})