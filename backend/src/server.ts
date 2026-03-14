import cors  from "cors";
import express  from "express";
import router from "./router";
import { errorHandlerMiddleware } from "./middlewares/error-handler";

const app = express();
// adicionamos o middleware CORS
app.use(cors());
app.use(express.json());
// adicionamos o middleware para parsear JSON
app.use("/api", router)
// adicionamos o middleware de tratamento de erros após as rotas
app.use(errorHandlerMiddleware)
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});