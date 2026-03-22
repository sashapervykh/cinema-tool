import { SHOWN_DATA } from "../constants/shownData";

export function getVerticalData(firstRow: string[], secondRow?: string[]) {
  return SHOWN_DATA.map((data, i) =>
    secondRow ? [data, firstRow[i], secondRow[i]] : [data, firstRow[i]]
  );
}
