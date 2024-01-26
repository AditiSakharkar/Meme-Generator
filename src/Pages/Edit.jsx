import React, { useState, createRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Text from "../components/text";
import { exportComponentAsJPEG } from "react-component-export-image";
const Editpage = () => {
  const [params] = useSearchParams();
  const [count, setcount] = useState(0);
  const memeref = createRef();
  const addtext = () => {
    setcount(count + 1);
  };
  return (
    <div className="ed">
        <div className="container">
        <div
        style={{
          width: "50rem",
          border: "2px solid",
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        ref={memeref}
        className="container"
      >
        <div>
          <img
            src={params.get("url")}
            width={"300px"}
            alt="img"
            style={{ margin: "2px", padding: "5px" }}/>
          {Array(count).fill(0).map((e) => (<Text />))}
        </div>
      </div>

            
        </div>
      
      <div className="editbtn">
        <Button
          style={{
            padding: "5px",
            margin: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={addtext}>
          Add Text</Button>

        <Button
          style={{
            padding: "5px",
            margin: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="success"
          onClick={(e) => exportComponentAsJPEG(memeref)}>
          Save</Button>
      </div>
    </div>
  );
};

export default Editpage;
