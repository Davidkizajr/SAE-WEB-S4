import "./App.css";
import { Pie, PieChart, Cell } from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

function Stats() {
  const [data, setData] = useState(null);
  const colors = [
    "#1591cd",
    "#fed601",
    "#000000",
    "#68d7f7",
    "#434140",
    "#2a357e",
    "#8dc63f",
    "#d90d16",
    "#e799aa",
    "#e88803",
    "#000ea1",
    "#982533",
    "#b52d4c",
  ];
  let index = 0;

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
          <h2 className="mt-15 text-xl text-center font-bold">
            Répartition des points 5G par région
          </h2>
          <div className="flex justify-center">
            <div className="mt-10 bg-gray-400 flex items-center justify-center rounded-2xl w-1/2">
              <PieChart width={500} height={500}>
                <Pie
                  data={data.pieData}
                  dataKey="positions_5g"
                  nameKey="nom_reg"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#8884d8"
                  label
                >
                  {data.pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <div>
                {data.pieData.map((item) => (
                  <>
                    <p>{item.nom_reg}</p>
                  </>
                ))}
              </div>
              <div className="ms-5">
                {data.pieData.map((item) => (
                  <>
                    <p className="font-bold" style={{ color: colors[index] }}>
                      {Math.round((100 / data.total) * item.positions_5g)}%
                    </p>
                    <p hidden>{index++}</p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </main>
  );
}

export default Stats;
