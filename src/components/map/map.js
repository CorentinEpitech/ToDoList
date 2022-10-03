import mapboxgl from "mapbox-gl";
import LiveCoord from "./liveCoord.js";
import Isoc from "./isoc.js";
import { useState, useEffect, useRef } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY29yZW50aW4teiIsImEiOiJjbDhpanp5eXowNG44M29vMXM1ZWRzZ3huIn0.NQBqPQ9HJnGCCI-Ru80z7w";

const RenderMap = function () {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(7.14882);
  const [lat, setLat] = useState(43.663739);
  const [zoom, setZoom] = useState(9);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    setLoading(false);
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      {/* <Isoc map={map} loading={isLoading} /> */}
      <LiveCoord
        coord={{ lng, setLng, lat, setLat, zoom, setZoom }}
        map={map}
      />
    </div>
  );
};

export default RenderMap;
