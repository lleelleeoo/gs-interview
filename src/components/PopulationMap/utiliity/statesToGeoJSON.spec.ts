import { FeatureCollection } from "geojson";

import { PopulationPayload } from "@/pages/api/population/mockData";

import { statesToGeoJSON } from "./statesToGeoJSON";

/* eslint-disable @stylistic/max-len */
const source: PopulationPayload = [{
    code: "dc",
    name: "District of Columbia",
    population: 705749,
    geometry: {
        type: "Polygon",
        coordinates: [[[-77.035264,38.993869],[-76.909294,38.895284],[-77.040741,38.791222],[-77.117418,38.933623],[-77.035264,38.993869]]]
    }
}];

const expected: FeatureCollection = {
    type: "FeatureCollection",
    features: [{
        type: "Feature",
        properties: {
            name: "District of Columbia",
            population: 705749,
        },
        geometry: {
            type: "Polygon",
            coordinates: [[[-77.035264,38.993869],[-76.909294,38.895284],[-77.040741,38.791222],[-77.117418,38.933623],[-77.035264,38.993869]]]
        }
    }]
};
/* eslint-enable @stylistic/max-len */

describe("<PopulationMap/> component, statesToGeoJSON helper", () => {
    it("should convert payload into geojson format", () => {
        expect(statesToGeoJSON(source)).toEqual(expected);
    });
});
