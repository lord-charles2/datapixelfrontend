import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const TidioChat = () => {
  useEffect(() => {
    const tidioScript = document.createElement("script");
    tidioScript.src = "./tidio.js";
    tidioScript.async = true;
    document.body.appendChild(tidioScript);

    return () => {
      document.body.removeChild(tidioScript);
    };
  }, []);

  return (
    <Helmet>
      <script src="./tidio1.js" async />
    </Helmet>
  );
};

export default TidioChat;
