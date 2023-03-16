import { useCallback, useEffect, useState } from "react";
import "./index.css";
const App = () => {
  const [dataLocation, setDataLocation] = useState([]);

  const location = useCallback(async () => {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const data = await response.json();

    const loadedLocation = [];

    for (const key in data.results) {
      loadedLocation.push({
        id: data.results[key].id.value
          ? data.results[key].id.value
          : Math.random().toString(),
        streetName: data.results[key].location.street.name,
        streetNumber: data.results[key].location.street.number,
        city: data.results[key].location.city,
        postCode: data.results[key].location.postcode,
      });
    }

    setDataLocation(loadedLocation);
  }, []);
  useEffect(() => {
    location();
  }, [location]);

  const dataList = dataLocation.map((adress) => (
    <tr key={adress.id}>
      <td>{adress.streetName}</td>
      <td> {adress.streetNumber}</td>
      <td> {adress.city}</td>
      <td> {adress.postCode}</td>
    </tr>
  ));

  const DescriptiveLocation = {
    streetName: "some name",
    streetNumber: "some number",
    city: "",
    postcode: "",
  };

  const headers = (
    <tr>
      <td>{Object.entries(DescriptiveLocation)[0][0]}</td>
      <td>{Object.entries(DescriptiveLocation)[1][0]}</td>
      <td>{Object.entries(DescriptiveLocation)[2][0]}</td>
      <td>{Object.entries(DescriptiveLocation)[3][0]}</td>
    </tr>
  );

  return (
    <div>
      <table className="table">
        <tbody>
          {headers}
          {dataList}
        </tbody>
      </table>
    </div>
  );
};

export default App;
