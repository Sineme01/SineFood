import { useRouteError } from "react-router-dom";
const smiley = ":(";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      {/* <h1>OOps</h1>
      <h2>Something Went wrong!!! {smiley}</h2>
      <h3>{err.status} : {err.statusText} {" => "} {err.error.message}</h3> */}
      <img className="error-image" src="https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg" alt="Err IMG"></img>
    </div>
  );
};

export default Error;
