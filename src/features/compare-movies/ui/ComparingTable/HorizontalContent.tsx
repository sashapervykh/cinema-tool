import { useUnit } from "effector-react";
import { $comparedMovies } from "../../models/comparing.store";
import { TableRow } from "./TableRow";
import { TableHead } from "./TableHead";
import { SHOWN_DATA } from "../../constants/shownData";
import { getCellData } from "../../lib/getCellData";

export function HorizontalContent() {
  const [comparedMovies] = useUnit([$comparedMovies]);
  const firstRow = getCellData(comparedMovies[0]);
  const secondRow = comparedMovies[1] && getCellData(comparedMovies[1]);
  return (
    <>
      <TableHead content={SHOWN_DATA} />
      <tbody>
        <TableRow rowData={firstRow} />
        {secondRow && <TableRow rowData={secondRow} />}
      </tbody>
    </>
  );
}
