import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";
import toLocationIcon from "./images/toLocationIcon.png";
import TransitDetails from "../components/Transit/TransitDetails";
import LeftSide from "../components/LeftBar";
import RightGoogleMap from "../components/RightGoogleMap";


const TransitOptions = {
  // departureTime: new Date(Date.now()+3600*12*100),
  modes: ["BUS"],
};
function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCJcK2NxXCLnCy1f3FZc9Rv1MbKWRApImQ",
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState<any>(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [outputArray, setOutputArray] = useState([]);
  const [routeObj, setRouteObj] = useState<
  {
    arrivalTime?: string;
    agencyName?: string;
    vehicleIcon?: string;
    vehicleName?: string;
    vehicleType?: string;
    shortName?: string;
    route?: number;
  }[]
>([]);
  const [routeJourney, setRouteJourney]  = useState<
  {
    distance?: any;
    duration?: any;
    route?: number | undefined;
    travelDirections?: any[] | undefined;
}[]>([]);
const [journeyRoute, setjourneyRoute] = useState<{
  arrivalTime?: string;
  agencyName?: string;
  vehicleIcon?: string;
  vehicleName?: string;
  vehicleType?: string;
  shortName?: string;
  route?: number;
} | undefined>(undefined);
  const originRef = useRef<HTMLInputElement>(null);
  const destiantionRef = useRef<HTMLInputElement>(null);
  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    const map = "";
    const directionsResponse = null;
    const distance = ""
    const duration = ""
    const outputArray = [];
    const routeObj = [];
    const routeJourney = [];
    if (!originRef.current?.value || !destiantionRef.current?.value) {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();

    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.TRANSIT,
      provideRouteAlternatives: true,
      // transitOptions: TransitOptions,
    });
 
    setDirectionsResponse(results);
    setDistance(results.routes[0]?.legs[0]?.distance?.text ?? '');
    setDuration(results.routes[0]?.legs[0]?.duration?.text ?? '');
    console.log(results);
    var routearr = [];
    var walkDirection: {
      travel_mode?: google.maps.TravelMode;
      subStep?: (string | number | undefined)[];
      mainStep?: string;
      route?: number;
      vehicleType?: string;
      vehicleName?: string;
      arrivalTime?: string;
      agencyName?: string;
      vehicleIcon?: string;
      shortName?: string;
      iswalk?: number;
    } = {};   
    for(var route = 0; route<results.routes.length;route++)
    {
      console.log(results.routes[route].legs[0].steps[0]);
      console.log(results.routes[route].legs[0].steps[0].travel_mode);
      var routearr = [];
      var json: {
        distance?: any;
        duration?: any;
        route?: number;
        travelDirections?: any[];
      } = {};      
      for(var step = 0;step<results.routes[route].legs[0].steps.length;step++)
      {
        var stepObj: {
          arrivalTime?: string;
          agencyName?: string;
          vehicleIcon?: string;
          vehicleName?: string;
          vehicleType?: string;
          shortName?: string;
          route?: number;
        } = {};

        var walkSteps = [];
        if(results.routes[route].legs[0].steps[step].travel_mode === 'WALKING')
        {
            console.log(results.routes[route].legs[0].steps[step].steps);
            console.log(route,step);
            for (var walkstep = 0; walkstep < (results.routes[route]?.legs[0]?.steps[step]?.steps?.length ?? 0); walkstep++)
            {
           
              
              console.log(results?.routes[route]?.legs[0]?.steps[step]?.steps?.[walkstep]?.instructions + " walking instruction");
              walkSteps.push(results?.routes[route]?.legs[0]?.steps[step]?.steps?.[walkstep]?.instructions ?? '');    
              

          }
          //stepObj.walksteps = walkSteps;
          //routeObj.push(stepObj);
          walkDirection.vehicleType = results.routes[route].legs[0].steps[step].travel_mode;
          walkDirection.vehicleName = results.routes[route].legs[0].steps[step].travel_mode;
          walkDirection.arrivalTime = "None";
          walkDirection.agencyName = "None"
          walkDirection.vehicleIcon = "None";
          walkDirection.shortName = "None";
          walkDirection.iswalk = 1;
        }
        if(results.routes[route].legs[0].steps[step].travel_mode === 'TRANSIT')
        {
          stepObj.arrivalTime = results.routes[route]?.legs[0]?.arrival_time?.text;
          stepObj.agencyName = results.routes[route]?.legs[0]?.steps[step]?.transit?.line?.agencies?.[0]?.name ?? '';
          stepObj.vehicleIcon = results.routes[route].legs[0].steps[step].transit?.line?.vehicle?.icon;
          stepObj.vehicleName = results.routes[route].legs[0].steps[step].transit?.line.vehicle.name;
          stepObj.vehicleType = results.routes[route].legs[0].steps[step].transit?.line.vehicle.type;
          const line = results.routes[route].legs[0].steps[step].transit?.line;

            if (line?.short_name) {
              stepObj.shortName = results.routes[route]?.legs[0]?.steps[step]?.transit?.line.short_name;
              walkDirection.shortName = results.routes[route].legs[0].steps[step].transit?.line.short_name;
            }

            if (line?.name) {
              stepObj.shortName = results.routes[route].legs[0].steps[step].transit?.line.name;
              walkDirection.shortName = results.routes[route].legs[0].steps[step].transit?.line.name;
            }
          stepObj.route = route;

          walkDirection.arrivalTime = results.routes[route].legs[0].arrival_time?.text;
          walkDirection.agencyName = results.routes[route]?.legs[0]?.steps[step]?.transit?.line?.agencies?.[0]?.name;
          walkDirection.vehicleIcon = results.routes[route]?.legs[0]?.steps[step]?.transit?.line.vehicle.icon;
          walkDirection.vehicleName = results.routes[route]?.legs[0]?.steps[step]?.transit?.line.vehicle.name;
          walkDirection.vehicleType = results.routes[route]?.legs[0]?.steps[step]?.transit?.line.vehicle.type;
          walkDirection.iswalk = 0;
          routeObj.push(stepObj);
          walkSteps.push(results.routes[route].legs[0].steps[step].transit?.num_stops);
        }
        console.log(results.routes[route].legs[0].steps[step].instructions+" hi");
        walkDirection.route = route;
        walkDirection.mainStep = results.routes[route].legs[0].steps[step].instructions;
        walkDirection.subStep  = walkSteps;
        walkDirection.travel_mode = results.routes[route].legs[0].steps[step].travel_mode;
        //routearr.push(results.routes[route].legs[0].steps[step].instructions);
        routearr.push(walkDirection)
        walkDirection = {};
      }
      json.distance = results.routes[route].legs[0].distance;
      json.duration = results.routes[route].legs[0].duration;
      json.route = route;
      json.travelDirections = routearr;
      routeJourney.push(json);
    }
    console.log(routeObj);
    setRouteObj(routeObj);//for displaying all buses annd metros
    setRouteJourney(routeJourney);//for getting route map
    /*for(var route = 0; route<results.routes.length;route++)
    {
      for(var step = 0;step<results.routes[route].legs[0].steps.length;step++)
      {
        console.log(results.routes[route].legs[0].steps[step].instructions);
      }
      console.log("\n");
    }*/
    console.log(routeJourney);
    //getRouteAllDirections(0);
  }
  function getRouteAllDirections(route:any)
  {
    console.log("routeJourney[route]",routeJourney[route]);
    setjourneyRoute(routeJourney[route]);
  }
  return (
    <Flex className="mainWrapper" flexDirection="column" alignItems="center" h="100vh" w="100vw">

      <LeftSide originRef={originRef} destiantionRef={destiantionRef} calculateRoute={calculateRoute} getRouteAllDirections={getRouteAllDirections} routeObj={routeObj} journeyRoute={journeyRoute} routeJourney={routeJourney} />
      <RightGoogleMap directionsResponse={directionsResponse} setMap={setMap}/>

    </Flex>
  );
}

export default App;
