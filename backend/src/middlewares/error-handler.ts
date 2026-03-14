import { ErrorRequestHandler } from "express";
import { HttpError } from "../errors/HttpErrors";
// exportamos a função errorHandlerMiddleware, do tipo RequestHandler que é igual a uma função que recebe 4 parâmetros: err, req, res, next
export const errorHandlerMiddleware: ErrorRequestHandler = (error, req, res, next) => {
    // verificamos se o erro é uma instância de HttpError
    if (error instanceof HttpError) {
        // se for, enviamos a resposta com o status e a mensagem do erro
        res.status(error.status).json({ message: error.message });
    } else if (error instanceof Error) {
        // se for um erro genérico, enviamos a resposta com status 500 e a mensagem do erro
        res.status(500).json({ message: error.message });
    } else {
        // se não for nenhum dos dois, enviamos uma resposta genérica
        res.status(500).json({ message: "Erro interno do servidor desconhecido" });
    }
}

    