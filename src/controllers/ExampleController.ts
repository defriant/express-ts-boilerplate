import { Request, Response } from 'express'

export const example = async (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Hi' })
}
