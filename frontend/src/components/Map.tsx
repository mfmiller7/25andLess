import { useEffect, useRef, useState } from "react";

export default function Map() {
  const [map, setMap] = useState<google.maps.Map>()
  const ref = useRef<HTMLDivElement>()
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center: { lat: 42.3601, lng: -71.0589 },
        zoom: 10,
      }))
    }
  }, [map])
  return (
    <>
      <div ref={ref as any} style={{ height: "100%", width: "700px", minHeight: "700px" }} ></div>
    </>
  )
}
