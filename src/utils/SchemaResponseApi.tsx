import { NextApiResponse } from "next";

type APIResponseType = {
  res: NextApiResponse;
  status: number;
  message: string;
  data: object;
};

export function APIResponse({ res, status, message, data }: APIResponseType) {
  return res.status(status).json({ status, message, data });
}
