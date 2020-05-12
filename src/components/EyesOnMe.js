import React from "react";

function EyesOnMe() {
  return (
    <button
      onBlur={() => console.log("Hey! Eyes on me!")}
      onFocus={() => console.log("Good!")}
    />
  );
}

export default EyesOnMe;
