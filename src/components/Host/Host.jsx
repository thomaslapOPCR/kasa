import React from "react";

const Host = (data) => {
  console.log(data)
  return (
    <div>
      <div>
        <p>{data.name.split(" ")[0]} <br/> {data.name.split(" ")[1]}</p>

      </div>
      <img src={data.picture} alt=""/>
    </div>
  );
};

export default Host;