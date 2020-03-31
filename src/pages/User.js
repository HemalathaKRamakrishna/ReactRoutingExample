import React from "react";

export const User = props => {
  const id = props.match.params.id;
  const queryParams = new URLSearchParams(props.location.search);
  const name = queryParams.get("name");

  return (
    <h1>
      {id} - Welcome "{name}"
    </h1>
  );
};
