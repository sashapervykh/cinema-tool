import { useUnit } from "effector-react";
import { $comparedMovies } from "../../models/comparing.store";
import { TableRow } from "./TableRow";
import { TableHead } from "./TableHead";
import { getCellData } from "../../lib/getCellData";
import { getVerticalData } from "../../lib/getVerticalData";

export function VerticalContent() {
  const [comparedMovies] = useUnit([$comparedMovies]);
  const firstRow = getCellData(comparedMovies[0]);
  const secondRow = comparedMovies[1] && getCellData(comparedMovies[1]);
  const data = getVerticalData(firstRow, secondRow);
  return (
    <>
      <TableHead content={data[0]} />
      {data.map((row, i) => {
        if (i === 0) {
          return;
        }
        return <TableRow key={i} rowData={row} />;
      })}
    </>
  );
}
