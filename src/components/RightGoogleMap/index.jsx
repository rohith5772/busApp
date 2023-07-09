import { Box } from "@chakra-ui/react"
import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api"

const RightGoogleMap = (props)=>{

  const center = { lat: 17.385, lng: 78.4867 };

    return (<Box position="absolute" left={0} top={0} h="100%" w="72%" marginLeft={"28%"}>
    {/* Google Map Box */}
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        mapId: "9d5d35b9d0fe64c7",
      }}
      onLoad={(map) => props.setMap(map)}
    >
      <Marker position={center} />
      {props.directionsResponse && (
        <DirectionsRenderer directions={props.directionsResponse} />
      )}
    </GoogleMap>
  </Box>)
}

export default RightGoogleMap ;