import { useUnit } from "effector-react";
import { $comparedMovies } from "../../models/comparing.store";
import { TableRow } from "./TableRow";
import { TableHead } from "./TableHead";
import { SHOWN_DATA } from "../../constants/shownData";
import { getHorizontalRowData } from "../../lib/getHorizotalRowData";

export function HorizontalContent() {
  const [comparedMovies] = useUnit([$comparedMovies]);
  const firstRow = getHorizontalRowData(comparedMovies[0]);
  const secondRow = comparedMovies[1] && getHorizontalRowData(comparedMovies[1]);
  return (
    <>
      <TableHead content={SHOWN_DATA} />
      <TableRow rowData={firstRow} />
      {secondRow && <TableRow rowData={secondRow} />}
    </>
  );
}
