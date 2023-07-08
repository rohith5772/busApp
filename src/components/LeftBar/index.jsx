import { Button } from "@chakra-ui/react";
import TransitDetails from "../Transit/TransitDetails";
import { Autocomplete } from "@react-google-maps/api";
import toLocationIcon from "../../images/toLocationIcon.png";
import { useState } from "react";
import walkingIcon from "../../images/walkingIcon.png";
import Image from 'next/image';
const LeftSide = (props) => {
  let [busClick, setBusClick] = useState(false);
  let [moreDetailsClicked , setMoreDetailsClicked] = useState(false);
  let [buses, setBuses] = useState();

  const busClickHandler = (directions) => {
    setBusClick(true);
    setBuses(directions);
  };
  console.log(buses)

  return (
    <div className="overlay">
      <Image
        height= {50}
        width= {100}
        src="https://previews.123rf.com/images/santi2014/santi20141708/santi2014170800002/83809998-travel-banner-concept-with-icons-design-on-blue-background.jpg"
        alt="banner"
        className="custom-image"
      />
      {!busClick && (
        <>
          <div className="overlay-content">
            <Image
              className="toLocationImg"
              src={toLocationIcon}
              alt="to location"
            />
            <div className="inputContainer">
              <Autocomplete
                options={{
                  types: ["(regions)"],
                  componentRestrictions: { country: "in" }, // Restrict results to India
                }}
                filterOptions={(options) => {
                  const filteredOptions = options.filter(
                    (option) =>
                      option.types.includes("locality") ||
                      option.types.includes("administrative_area_level_1")
                  );
                  return filteredOptions;
                }}
              >
                <input
                  type="text"
                  placeholder="Choose Starting Point"
                  ref={props.originRef}
                  style={{ width: "295px" }}
                />
              </Autocomplete>

              <Autocomplete
                options={{
                  types: ["(regions)"],
                  componentRestrictions: { country: "in" }, // Restrict results to India
                }}
                filterOptions={(options) => {
                  const filteredOptions = options.filter(
                    (option) =>
                      option.types.includes("locality") ||
                      option.types.includes("administrative_area_level_1")
                  );
                  return filteredOptions;
                }}
              >
                <input
                  type="text"
                  placeholder="Choose Destination"
                  ref={props.destiantionRef}
                  style={{ width: "295px" }}
                />
              </Autocomplete>
              <Button
                onClick={props.calculateRoute}
                className="searchButton"
                variant="contained"
              >
                Directions
              </Button>
            </div>
          </div>
          <TransitDetails
            setBusClick={busClickHandler}
            routeObj={props.routeObj}
            routeJourney={props.routeJourney}
          />
        </>
      )}

      {busClick && (
        <div>
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "38px",
            }}
          >
            <a
              href="#"
              onClick={() => setBusClick(false)}
              style={{
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              {" <  Back"}
            </a>
            <hr />
          </div>
          <div
            style={{
              width: "100%",
              padding: "10px",
              height: "auto",
              backgroundColor: "white",
              display: "flex",
            }}
          >
            <Image
              className="locationIcon"
              height= {50}
              width= {100}
              src="https://w7.pngwing.com/pngs/959/926/png-transparent-location-icon-computer-icons-location-google-maps-location-angle-map-symbol-thumbnail.png"
              alt="banner"
            />
            <div>
              <span>Starts from</span> <br />
              <span style={{ fontWeight: "675" }}>
                {/* {props.journeyRoute.travelDirections[0]} */}
              </span>
              <br />
              <span>arrive at {buses[0].arrivalTime!=="None" ? buses[0].arrivalTime: buses[1].arrivalTime}</span>
            </div>
          </div>
          <hr />
          <br />
          <hr />
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "114px",
                justifyContent: "space-between",
              }}
            >
              <img
                style={{ marginLeft: "3px", height: "36px", width: "33px" }}
                src="https://w7.pngwing.com/pngs/849/804/png-transparent-alarm-clocks-computer-icons-timer-clock-angle-time-share-icon-thumbnail.png"
                alt="banner"
              />
              <span style={{ marginTop: "6px" }}>wait for</span>
            </div>

            <div
              style={{
                display: "flex",
              }}
            >
              <span
                style={{
                  height: "auto",
                  borderLeft: "2px solid black",
                  marginLeft: "17px",
                  marginTop: "9px",
                }}
              ></span>

              <div
                style={{
                  marginLeft: "41px",
                  marginTop: "10px",
                }}
              >
                {buses.map((bus, index) => {

                  let icon = bus.vehicleIcon;
                  if (bus.vehicleType === "WALKING") {
                    icon = walkingIcon;
                  }
                  return (
                    <>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ fontSize: "184px", marginTop: "-181px", marginLeft: "-62px" }}>.</span>
                        <div style={{ marginLeft: "23px" }}>
                          <div
                            style={{
                              border: "1px solid black",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              borderBottom: "6px solid black",
                              width: "131px"
                            }}
                          >
                            <Image
                                height= {50}
                                width= {29}                             
                                 src={icon}
                              alt="bus"
                            />
                            <span className="busNumber">
                              {bus.vehicleType === "HEAVY_RAIL"
                                ? "TRAIN"
                                : bus.vehicleType ==="WALKING" ? "WALK" : bus.shortName}
                            </span>
                          </div>
                          <span>{`Take ${bus.mainStep}`}</span>
                          {bus.vehicleType === "WALKING" && <>
                            <br />
                            <a key={index} style={{color:"blue"}} href="#" onClick={()=>setMoreDetailsClicked((prev)=>!prev)}>more details</a>
                            <br />
                            </>
                          }
                          {moreDetailsClicked && bus.vehicleType === "WALKING"  &&
                            <div dangerouslySetInnerHTML={{ __html:  bus.subStep}} />
                          }
                        </div>
                      </div>
                      <br />
                      <br />
                    </>
                  );
                })}
              </div>
            </div>
            <br />
            <hr />
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSide;
