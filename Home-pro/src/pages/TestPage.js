import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
/*
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { PageHero } from "../components";
import { useRef } from "react";
import Select from 'react-select';
*/

function TestPage() {
  async function submitHandler(event) {
    event.preventDefault();
    //will not throw error if server sends back error code (404, etc...)
  try {
    var cookies = document.cookie.split(';');
    let HP_refreshToken;
    let HP_accessToken;
    for(var i = 0; i<cookies.length; i++){
      var cook = cookies[i].split("=");
      if(cook[0].includes("HP_refreshToken")){
        HP_refreshToken = cook[1];
      }
      if(cook[0].includes("HP_accessToken")){
        HP_accessToken = cook[1];
      }
    }
    //console.log(HP_refreshToken);
    //console.log(HP_accessToken);
    const response = await fetch("http://localhost:5000/api/customer/getJobs", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken : HP_refreshToken,
        accessToken : HP_accessToken
      }),
    });
    const responseData = await response.json();
    console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main>
        <Button variant="warning" style={{ color: "black" }} onClick={submitHandler}>
            Test Button
        </Button>{" "}
    </main>
  );
}

export default TestPage;
