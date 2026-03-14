import z from "zod";

export const CreateCampaignRequestSchema = z.object({
    name: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date() //a menos q no banco mencione opcional, o zod não aceita mais. Na aula se pede optional() 
});

export const UpdateCampaignRequestSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional()
});

const LeadCampaignStatusSchema = z.enum ([
  "New",
  "Engaged", // Lead Engagado
  "Folloup_Scheduled", // Status mais detalhado
  "Contacted",
  "Qualified",
  "Converted",
  "Unresponsive",
  "Disqualified",
  "Re_Engaged",
  "Opted_Out",
])
export const GetCampaignLeadsRequestSchema = z.object({
        page: z.string().optional(),
        pageSize: z.string().optional(),
        name: z.string().optional(),
        status: LeadCampaignStatusSchema.optional(),
        // sortBy podemos ordenar por nome e status
        sortBy: z.enum(["name", "createdAt"]).optional(),
        order: z.enum(["asc", "desc"]).optional(),
    
})

export const AddLeadRequestSchema = z.object({
    leadId: z.number(),
    status: LeadCampaignStatusSchema.optional() 
})

export const UpdateLeadStatusRequestSchema = z.object({
    status: LeadCampaignStatusSchema
})