import TransportDetails from "./TransportDetails";

const TransitDetails = (props:any) => {

  const groupedBuses: { [key: string]: any[] } = {};
  console.log(props.routeObj);
  props.routeObj.forEach((bus:any) => {
    const arrivalTime = bus.arrivalTime;

    if (groupedBuses.hasOwnProperty(arrivalTime)) {
      groupedBuses[arrivalTime].push(bus);
    } else {
      groupedBuses[arrivalTime] = [bus];
    }
  });
  console.log(groupedBuses);
  const groupedBusArrays = Object.values(groupedBuses);

  console.log(groupedBusArrays);
  console.log(props.routeJourney);
  // let busData = [];
  // if(props.routeJourney.length!==0){
  // console.log(props.routeJourney[0].travelDirections)
  // busData = props.routeJourney[0].travelDirections
  // }

  return (
    <div className="transitOuterContainer">
      {
        props.routeJourney.map((busArr:any , index:any)=>{
          return (
           <TransportDetails busArr={busArr.travelDirections} key={index} index={index} setBusClick={props.setBusClick} />
          )
       })
      }
    </div>
  );
};

export default TransitDetails;