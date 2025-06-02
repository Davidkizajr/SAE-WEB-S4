import "./App.css";
import { Pie, PieChart } from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

function Stats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/pies");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="mt-30 text-white">
      <h1 className="text-center">Statistiques</h1>
      {data ? (
        <>
          {console.log(data.pieData)}
          <PieChart width={500} height={500}>
            <Pie
              data={data.pieData}
              dataKey="positions_5g"
              nameKey="nom_reg"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            />
          </PieChart>
        </>
      ) : (
        ""
      )}
    </main>
  );
}

export default Stats;
