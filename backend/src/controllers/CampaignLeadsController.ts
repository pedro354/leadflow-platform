import { Handler } from "express";
import { Prisma } from "@prisma/client";
import { AddLeadRequestSchema, GetCampaignLeadsRequestSchema, UpdateLeadStatusRequestSchema } from "./schema/CampaignsRequestSchema";
import { prisma } from "../database";
import { number } from "zod";

export class CampaignLeadController {
  // pega informações do leads
  getLeads: Handler = async (req, res, next) => {
    try {
      const campaignId = Number(req.params.campaignId);
      const query = GetCampaignLeadsRequestSchema.parse(req.query);
      const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc" } = query;
      const pageNumber = Number(page);
      const pageSizeNumber = Number(pageSize);

      const where: Prisma.LeadWhereInput = {
        campaigns: {
          some: { campaignId }
        }
      }

      if (name) where.name = { contains: name, mode: "insensitive" };
      if (status) where.campaigns = { some: { status } };
console.log("campaignId:", campaignId, typeof campaignId);

      const leads = await prisma.lead.findMany({
        // passa o where de cima
        where,
        orderBy: { [sortBy]: order },
        skip: (pageNumber - 1) * pageSizeNumber,
        take: pageSizeNumber,
        include: {
          // fara join com LeadCampaign, fazendo referencia a tabela Leads,   campaigns LeadCampaign[] 
          campaigns: {
            select: {
              campaignId: true,
              leadId: true,
              status: true
            }
          }
        }
      });
      const total = await prisma.lead.count({ where })
      res.json({
        leads,
        meta: {
          page: pageNumber,
          pageSize: pageSizeNumber,
          total,
          totalPages: Math.ceil(total / pageSizeNumber)
        }
      });
    } catch (error) {
      next(error);
    }
  };
  addLead: Handler = async (req, res, next) => {
    try {
      const body = AddLeadRequestSchema.parse(req.body)
      //pois vamos trabalhar com essa tabela intermediaria de forma manual
      await prisma.leadCampaign.create({
        // Inserindo valores na tabela LeadCampaign
        data: { 
          campaignId: Number(req.params.campaignId),
          leadId: body.leadId,
          status: body.status
         }
      })
      res.status(201).end()
    } catch (error) {
      next(error);
    }
  };
  updateLeadStatus: Handler = async (req, res, next) => {
    try {
      const body = UpdateLeadStatusRequestSchema.parse(req.body)
      const updatedLeadCampaign = await prisma.leadCampaign.update({
        data: body,
        where:{
          //Fazemos a compração se ambas as colunas sao iguais ali simultaneamente para garantirmos que está atualizando o lead correto
          leadId_campaignId: {//campo obrigatorio
            campaignId: Number(req.params.campaignId),
            leadId: Number(req.params.leadId)
          } 
        }
      })
      res.json(updatedLeadCampaign)
    } catch (error) {
      next(error);
    }
  };
  removeLead: Handler = async (req, res, next) => {
    try {
      const removeLead = await prisma.leadCampaign.delete({
        where:{
          leadId_campaignId: {
            campaignId: Number(req.params.campaignId),
            leadId: Number(req.params.leadId)
          }
        }
    })
    res.json({removeLead})
    } catch (error) {
      next(error);
    }
  };
}
