import { instance } from "@/lib/axios/axios";
import { APIResponse } from "@/utils/SchemaResponseApi";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      const response = await instance.get("/users");
      return APIResponse({
        res,
        status: 200,
        message: "Success get Data",
        data: response.data,
      });
    } catch (error) {
      return APIResponse({
        res,
        status: 400,
        message: "Gagal get Data",
        data: {},
      });
    }
  }

  return APIResponse({ res, status: 200, message: "Success", data: {} });
}
