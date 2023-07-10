import React, { useEffect, useState } from "react";

import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
import { getRuas } from "../../../services/ruas";
import { ruasColumns } from "./ruasColumns";




export default function Datatable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await getRuas().then((res) => {

        setData(res.data.data);
      });
    }
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center w-1/2 h-[300px] mt-40 m-auto">
      <DataGrid
        getRowId={(row) => row?.field}
      rows={ruasColumns} columns={data} />
    </div>
  );
}
