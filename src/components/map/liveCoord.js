import { useEffect } from "react";
import "../../style/map/map.css";
import "mapbox-gl/dist/mapbox-gl.css";

const LiveCoord = function (props) {
  useEffect(() => {
    if (!props.map.current) return; // wait for map to initialize

    props.map.current.on("mousemove", (e) => {
      props.coord.setLng(e.lngLat.lng.toFixed(4));
      props.coord.setLat(e.lngLat.lat.toFixed(4));
    });
    props.map.current.on("wheel", () => {
      props.coord.setZoom(props.map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="sidebar">
      Longitude: {props.coord.lng} | Latitude: {props.coord.lat} | Zoom:{" "}
      {props.coord.zoom}
    </div>
  );
};

export default LiveCoord;
