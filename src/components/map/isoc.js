import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import "../../style/map/isoc.css";

const Isoc = function (props) {
  console.log("test");

  const getIso = async function () {
    const urlBase = "https://api.mapbox.com/isochrone/v1/mapbox/";
    const lon = 7.14882;
    const lat = 43.663739;
    const profile = "cycling";
    const minutes = 10;

    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      urlBase +
        profile +
        "/" +
        lon +
        "," +
        lat +
        "?contours_minutes=" +
        minutes +
        "&polygons=true&access_token=" +
        mapboxgl.accessToken,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  // props.map.current.on("load", () => {
  //   props.map.current.addSource("iso", {
  //     type: "geojson",
  //     data: {
  //       type: "FeatureCollection",
  //       features: [],
  //     },
  //   });
  //   props.map.current.addLayer(
  //     {
  //       id: "isoLayer",
  //       type: "fill",
  //       source: "iso",
  //       layout: {},
  //       paint: {
  //         "fill-color": "#5a3fc0",
  //         "fill-opacity": 0.3,
  //       },
  //     },
  //     "poi-label"
  //   );
  // getIso();
  // });

  return (
    <div className="paramContainer">
      <form id="params">
        <h4 className="txt-m txt-bold mb6">Choose a travel mode:</h4>
        <div className="mb12 mr12 toggle-group align-center">
          <label className="toggle-container">
            <input name="profile" type="radio" value="walking" />
            <div className="toggle toggle--active-null toggle--null">
              Walking
            </div>
          </label>
          <label className="toggle-container">
            <input name="profile" type="radio" value="cycling" checked />
            <div className="toggle toggle--active-null toggle--null">
              Cycling
            </div>
          </label>
          <label className="toggle-container">
            <input name="profile" type="radio" value="driving" />
            <div className="toggle toggle--active-null toggle--null">
              Driving
            </div>
          </label>
        </div>
        <h4 className="txt-m txt-bold mb6">Choose a maximum duration:</h4>
        <div className="mb12 mr12 toggle-group align-center">
          <label className="toggle-container">
            <input name="duration" type="radio" value="10" checked />
            <div className="toggle toggle--active-null toggle--null">
              10 min
            </div>
          </label>
          <label className="toggle-container">
            <input name="duration" type="radio" value="20" />
            <div className="toggle toggle--active-null toggle--null">
              20 min
            </div>
          </label>
          <label className="toggle-container">
            <input name="duration" type="radio" value="30" />
            <div className="toggle toggle--active-null toggle--null">
              30 min
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Isoc;
