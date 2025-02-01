import { instance } from "@/lib/axios/axios";
import { APIResponse } from "@/utils/SchemaResponseApi";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("GET", req);

    // try {
    //   const response = await instance.get("/posts");
    //   return APIResponse({
    //     res,
    //     status: 200,
    //     message: "Success Get Data",
    //     data: response.data,
    //   });
    // } catch (error) {
    //   return APIResponse({
    //     res,
    //     status: 404,
    //     message: "Method not found",
    //     data: {},
    //   });
    // }
  }
}
