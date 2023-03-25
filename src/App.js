import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import DataTable from "react-data-table-component";

export default function App() {
  const [records, setRecords] = useState([]);

  const column = [
    {
      name: "ID",
      selector: (row) => row.id
    },
    {
      name: "Name",
      selector: (row) => row.name
    },
    {
      name: "Email",
      selector: (row) => row.email
    },
    {
      name: "City",
      selector: (row) => row.address.city
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setRecords(res))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>React.js Datatable</h1>

      <DataTable columns={column} data={records} />
    </div>
  );
}
