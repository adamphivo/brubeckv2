import type { Request, Response, NextFunction } from "express";
declare const FavoriteController: {
    (): void;
    create(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    edit(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    delete(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    find(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
};
export default FavoriteController;
