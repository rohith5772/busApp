import "./TransitDetails";
import walkingIcon from "../../images/walkingIcon.png";
import Image from 'next/image';

const TransportDetails = (props:any) => {
  console.log("busArr", props.busArr);
  console.log("index", props.index);

  return (
    <div className="detailsContainer">
      <span className="timingContainer">
        <span className="timeText"></span> <span>Arrive at {props.busArr[0].arrivalTime!=="None" ? props.busArr[0].arrivalTime: props.busArr[1].arrivalTime}</span>
      </span>
      <div className="travelDetailsContainer" onClick={props.setBusClick.bind(null, props.busArr)}>
        {props.busArr.map((bus:any, index:any) => {
          let icon = bus.vehicleIcon;
          if (bus.vehicleType === "WALKING") {
            icon = walkingIcon;
          }
          return (<>
            <div className="busDetailsContainer">
              <Image
                className="busSvg"
                src={icon}
                alt="bus"
                height= {50}
        width= {100}
              />
              <span className="busNumber">{bus.vehicleType === "HEAVY_RAIL" ? "TRAIN" : bus.vehicleType === "WALKING" ? "WALK" : bus.shortName}</span>
            </div>
            { props.busArr.length-1 !== index && <span style={{fontWeight : "800"}}>{">"}</span>}
          </>
          );
        })}
      </div>
    </div>
  );
};

export default TransportDetails;
