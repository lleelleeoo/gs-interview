// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { PopulationPayload, populationPerState } from "./mockData";

type Data = {
    name: string;
};

function populationRequestHandler(
    req: NextApiRequest,
    res: NextApiResponse<PopulationPayload>,
) {
    res
        .status(200)
        .json(populationPerState);
}

export { populationRequestHandler as default };
