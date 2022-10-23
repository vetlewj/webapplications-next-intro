import { NextApiRequest, NextApiResponse } from "next";

const movies = [
  { id: 1, title: "The Shawshank Redemption", year: 1994, rating: 9.2 },
  { id: 2, title: "The Godfather: Part II", year: 1974, rating: 9.0 },
  { id: 3, title: "The Godfather", year: 1972, rating: 9.2 },
  { id: 4, title: "The Dark Knight", year: 2008, rating: 9.0 }];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
){
    switch (req.method?.toLowerCase()) {
        case "get":
            res.status(200).json({ success: true, data: movies });
            break;
        default:
            res.status(405).end();
            break;
    }

}