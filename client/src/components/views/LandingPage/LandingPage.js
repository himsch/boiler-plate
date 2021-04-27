import React, { useEffect } from "react";
import axios from "axios";

function LandingPage() {
  useEffect(() => {
    axios.get("/api/proxy").then(response => console.log(response));
  }, []);

  return <div>LangdingPage</div>;
}

export default LandingPage;
