// src/components/Map.tsx
import "leaflet/dist/leaflet.css";

import { Alert, CircularProgress } from "@mui/material";
import axios from "axios";
import { Feature,GeoJSON as GeoJSONType } from "geojson";
import { Layer, LeafletMouseEvent } from "leaflet";
import { useEffect, useState } from "react";
import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";

import { PopulationPayload } from "@/pages/api/population/mockData";

import styles from "./PopulationMap.module.css";
import { statesToGeoJSON } from "./utiliity/statesToGeoJSON";

const maxZoom = 6;
const minZoom = 3;

type PopulationMapProps = {
    position?: [number, number];
    zoom?: number;
    showMapLayer?: boolean
};

// Tests here a little bit useless
// Only external lib in use, no any data oerations
// So I skipd it for this component
export function PopulationMap({ position=[37.8, -96], zoom=3, showMapLayer=true }: PopulationMapProps) {
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [states, setData] = useState<GeoJSONType | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(false);
        axios<PopulationPayload>("/api/population")
            .then(({ data }) => {
                const parsed = statesToGeoJSON(data);
                setData(parsed);
                setLoading(false);
            })
            .catch(() => {
                setData(null);
                setLoading(false);
                setError(true);
            });
    }, []);

    return (
        <div className={styles["wrapper"]}>
            {isLoading && <div className={styles["loader"]}><CircularProgress /></div>}
            {isError && <div className={styles["error"]}>
                <Alert variant="filled" severity="error">
                    Something wrong with data
                </Alert>
            </div>}
            <MapContainer
                center={position}
                zoom={zoom}
                scrollWheelZoom={false}
                className={styles.map}
                maxZoom={maxZoom}
                minZoom={minZoom}
            >
                {showMapLayer && <TileLayer
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={maxZoom}
                    minZoom={minZoom}
                />}
                {states &&
                    <GeoJSON
                        data={states}
                        style={getStyleForTile}
                        onEachFeature={setStateInteractionFeatures}
                    />
                }
            </MapContainer>
            <div className={styles.legend}>
                {[6850000, 4500000, 2500000, 900000].map((el) => (
                    <div key={el} className={styles["legend-item"]}>
                        <div className={styles["legend-dot"]} style={{ background: getColor(el) }} />
                        {`>${el/1000}k`}
                    </div>
                ))}
            </div>
        </div>

    );
}

function getColor(p: number) {
    return p <= 900000 ? "#edf8fb" :
        p <= 2500000 ? "#ccece6" :
            p <= 4500000 ? "#99d8c9" :
                p <= 6850000 ? "#66c2a4" :
                    "#2ca25f" ;
}

function getStyleForTile(f: Feature | undefined) {
    return {
        color: "#00A757",
        fillColor: getColor(f?.properties?.population || 0),
        stroke: false,
        fillOpacity: 0.8
    };
}

function setStateInteractionFeatures(feature: Feature, layer: Layer) {
    function highlightState({ target: state }: LeafletMouseEvent) {
        state.setStyle({
            stroke: true
        });

        state.bringToFront();
    }

    function resetHighlight({ target: state }: LeafletMouseEvent) {
        state.setStyle({
            stroke: false
        });
    }

    layer.on({
        mouseover: highlightState,
        mouseout: resetHighlight,
    });
}
