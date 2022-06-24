import React from "react";
import {TailSpin} from "react-loader-spinner";

const Spinner = (props) => {
  return (
    <div className="loader">
            <TailSpin
                type="Circles"
                color="#dc1c2c"
                height={50}
                width={100}
                //timeout={1000} //3 secs
            />
    </div>
  );
};
export default Spinner;
