import React from "react";
import useExcelStore from "../../dashboardDataStore";
import LineDataChart from "./LineDataChart";
import SimpleLineChart from "./SimpleLineChart"

const ChartTab = () => {
  const { excelData } = useExcelStore();

  return (
        <div>
          <h2>График данных</h2>
          <LineDataChart data={excelData} />
          <SimpleLineChart />
        </div> 
  );
};

export default ChartTab;
