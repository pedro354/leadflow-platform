import { GroupsController } from './controllers/GroupsController';
import { Router } from "express";
import { LeadsController } from "./controllers/LeadsController";
import { CampaignsController } from './controllers/CampaignsController';
import { CampaignLeadController } from './controllers/CampaignLeadsController';
import { GroupLeadsController } from './controllers/GroupLeadsController';

const router = Router();
// Instância do controlador de leads
const leadsController = new LeadsController();
const groupsController = new GroupsController();
const groupsLeadsController = new GroupLeadsController();
const campaignsController = new CampaignsController();
const campaignsLeadsController = new CampaignLeadController();

router.get("/leads", leadsController.index);
router.post("/leads", leadsController.create);
router.get("/leads/:id", leadsController.show);
router.put("/leads/:id", leadsController.update);
router.delete("/leads/:id", leadsController.delete);

router.get("/campaigns", campaignsController.index)
router.post("/campaigns", campaignsController.create)
router.get("/campaigns/:id", campaignsController.show)
router.put("/campaigns/:id", campaignsController.update)
router.delete("/campaigns/:id", campaignsController.delete)


router.get("/groups", groupsController.index);
router.post("/groups", groupsController.create);
router.get("/groups/:id", groupsController.show);
router.put("/groups/:id", groupsController.update);
router.delete("/groups/:id", groupsController.delete);
// GET /status rota assíncrona que retorna uma mensagem de status

router.get("/groups/:groupId/leads", groupsLeadsController.getLeads);
router.post("/groups/:groupId/leads", groupsLeadsController.addLead);
router.delete("/groups/:groupId/leads/:leadgiId", groupsLeadsController.removeLead)

router.get("/campaigns/:campaignId/leads", campaignsLeadsController.getLeads );
router.post("/campaigns/:campaignId/leads", campaignsLeadsController.addLead);
router.put("/campaigns/:campaignId/leads/:leadId", campaignsLeadsController.updateLeadStatus);
router.delete("/campaigns/:campaignId/leads/:leadId", campaignsLeadsController.removeLead)


router.get("/status", async (req, res, next) => {
    try {
        res.json({ message: "OK" })        
    } catch (error) {
        next(error);
    }
});

export default router;