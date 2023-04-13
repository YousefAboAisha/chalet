import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";

const Map: NextPage = () => {
  const libraries = useMemo(() => ["places"], []);

  const [location, setLocation] = useState({
    latitude: 31.519321394094575,
    longitude: 34.439979301305314,
  });

  const mapCenter = useMemo(
    () => ({ lat: location.latitude, lng: location.longitude }),
    [location]
  );

  console.count("Renders");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative mt-14 mx-auto w-full container rounded-lg">
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ height: "400px", borderRadius: "8px" }}
        onLoad={(map) => console.log("Map Loaded")}
      >
        <MarkerF
          position={mapCenter}
          onLoad={() => console.log("Marker Loaded")}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
