//tipagem de request

declare namespace Express {
    export interface Request {
        user_id: string;
        // user_id: string; // Adiciona o campo user_id à interface Request
        };
    }
