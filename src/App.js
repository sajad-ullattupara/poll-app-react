import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import dataJson from "./data.json";
import "./App.css";

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    setData(dataJson);
  }, []);

  function incrementVoteCount(dataId) {
    data = data.map((data) => {
      if (data._id === dataId) {
        data.votes = data.votes + 1;
      }
      return data;
    });
    setData(data);
  }


  function VotingCard(props) {
    let { data, incrementVoteCount } = props;

    return (
      <Card style={{ width: "20rem" ,alignItems: "center", padding:"10px" }}>
        <img style={{ width: "15rem"}} src={data.logo} alt="logo" /> 
        <Card.Body>
          <Card.Title style={{ textAlign: "center"}}>{data.name}</Card.Title>
          <Button variant="primary" onClick={() => incrementVoteCount(data._id)}>
            Vote
          </Button>
        </Card.Body>
        <Card.Footer>Vote Count: {data.votes}</Card.Footer>
      </Card>
    );
  }

return (
<div class="container">
<h1>Poll App - Mobile App Framework</h1>
  <div class="row"> 
        {data.map((data) => {
          return (
            <div class="col">
              <VotingCard
                data={data}
                incrementVoteCount={(dataId) => incrementVoteCount(dataId)}
              />
            </div>
          );
        })}
  </div> 
</div>
  );
}
export default App;
