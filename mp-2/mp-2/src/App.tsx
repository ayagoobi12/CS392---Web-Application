import GreenLineTStop from "../components/GreenLineTStop.tsx";
import { useEffect, useState } from "react";
import styled from "styled-components";
import type { Stop } from "../interfaces/Stop.ts";


//overarching style of the div
const ParentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: calc(16px);
  background-color: #00843D; /* MBTA Green Line color */
  padding: calc(16px);
  margin: 20px;
`;

export default function App() {
  const [stops, setStops] = useState<Stop[]>([]);

  useEffect(() => {
    async function fetchStops(): Promise<void> {
      const rawData = await fetch("https://api-v3.mbta.com/stops?filter[route]=Green-B");
      const { data }: { data: Stop[] } = await rawData.json();
      setStops(data);
    }
    fetchStops()
      .then(() => console.log("Stops fetched successfully"))
      .catch((e: Error) => console.log("There was an error fetching stops: " + e));
  }, []); //this [] allows for a reupdate if anything ever updates 

//passing the prop from the parent App to the child GreenLineTStop here 
  return (
    <ParentDiv>
      <GreenLineTStop data={stops} /> 
    </ParentDiv>
  );
}
