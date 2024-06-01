import { FeatureCollection,GeoJSON  } from "geojson";

import { PopulationPayload } from "@/pages/api/population/mockData";

export function statesToGeoJSON(payload: PopulationPayload):GeoJSON {
    const features: FeatureCollection["features"] = payload.map(({ geometry, name, population }) => ({
        type: "Feature",
        properties: { name, population },
        geometry
    }));

    return {
        type: "FeatureCollection",
        features
    };
};
