import { Handler } from "express";
import { prisma } from "../database";
import {
  CreateLeadRequestSchema,
  GetLeadsRequestSchema,
  UpdateLeadRequestSchema,
} from "./schema/LeadRequestSchema";
import { HttpError } from "../errors/HttpErrors";
import { Prisma } from "@prisma/client";

export class LeadsController {
  index: Handler = async (req, res, next) => {
    try {
      // vai validar os dados da query
      const query = GetLeadsRequestSchema.parse(req.query);
      //vai destruturar os valores com valores padrão
      const {
        page = "1",
        pageSize = "10",
        name,
        status,
        sortBy = "name",
        order = "asc",
      } = query;

      const pageNumber = Number(page);
      const pageSizeNumber = Number(pageSize);
      // tipar o where como um objeto de consulta
      const where: Prisma.LeadWhereInput = {};
      // se o name existir adicionar no where, no modo insensitive que diferencia maiusculas e minusculas
      if (name) where.name = { contains: name, mode: "insensitive" };
      if (status) where.status = { equals: status };

      const leads = await prisma.lead.findMany({
        where,
        skip: (pageNumber - 1) * pageSizeNumber,
        take: pageSizeNumber,
        orderBy: { [sortBy]: order },
      });
      // count precisa ter o mesmo where para contar os resultados filtrados
      const total = await prisma.lead.count({ where });

      res.json({
        data: leads,
        meta: {
          page: pageNumber,
          pageSize: pageSizeNumber,
          total,
          totalPages: Math.ceil(total / pageSizeNumber),
        },
      });
    } catch (error) {
      next(error);
    }
  };
  create: Handler = async (req, res, next) => {
    try {
      const body = CreateLeadRequestSchema.parse(req.body);
    //   caso esse status seja undefined vai atribuir o valor NEW
      if(!body.status) body.status = "New"
      const newLead = await prisma.lead.create({
        data: body,
      });
      res.status(201).json(newLead);
    } catch (error) {
      next(error);
    }
  };
  show: Handler = async (req, res, next) => {
    try {
      const lead = await prisma.lead.findUnique({
        where: { id: Number(req.params.id) },
        include: {
          groups: true,
          campaigns: true,
        },
      });
      if (!lead) throw new HttpError(404, "Lead not found!");
      res.json(lead);
    } catch (error) {
      next(error);
    }
  };
  update: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const body = UpdateLeadRequestSchema.parse(req.body);

      const lead = await prisma.lead.findUnique({ where: { id } });
      if (!lead) throw new HttpError(404, "Lead not found!");

    if(lead.status === "New" && body.status !== undefined && body.status !== "Contacted"){
        throw new HttpError(400, "um novo lead deve ser contatado antes de ter seu status atualizado para outros valores")
    }

    // faremos a verificação
    if(body.status && body.status === "Archived"){
        const now = new Date()
        // vai pegar o diferencial do createDate, calculando o valor absoluto entre o agora e a atualização do lead, lembrando q getTime é um valor em milessegundos
        const diffTime = Math.abs(now.getTime() - lead.updatedAt.getTime())
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        if(diffDays < 180) throw new HttpError(400, "um lead só pode ser arquivado após 6 meses de inatividade!")
    }

      const updatedLead = await prisma.lead.update({
        where: { id },
        data: body,
      });

      res.json(updatedLead);
    } catch (error) {
      next(error);
    }
  };
  delete: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id);

      const leadExists = await prisma.lead.findUnique({ where: { id } });
      if (!leadExists) throw new HttpError(404, "Lead not found!");

      const deletedLead = await prisma.lead.delete({ where: { id } });
      res.json({ deletedLead });
    } catch (error) {
      next(error);
    }
  };
}
