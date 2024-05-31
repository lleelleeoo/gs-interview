// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { FeatureCollection } from "geojson";
import { NextApiRequest, NextApiResponse } from "next";

import { statesData } from "./mockData";

function statesRequestHandler(
    req: NextApiRequest,
    res: NextApiResponse<FeatureCollection>,
) {
    res
        .status(200)
        .json(statesData);
}

export { statesRequestHandler as default };
