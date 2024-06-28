/* eslint-disable */
import React, { useState, useEffect } from "react";

const Quote = () => {

  return (
    <div>
      <p>{localStorage.getItem("randomQuote")}</p>
    </div>
  );
};

export default Quote;
