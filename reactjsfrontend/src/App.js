import React from "react";
import axios from "axios";

function App() {
  const [data, setdata] = React.useState();
  const strapiUrl = "http://localhost:1337/";

  React.useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(strapiUrl);
        response.status === 200
          ? setdata(<h1>Strapi.io is running</h1>)
          : setdata(<h1>Strapi.io not running</h1>);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      {data}<h1> in <a href={strapiUrl}>{strapiUrl}</a></h1>
    </div>
  );
}

export default App;
