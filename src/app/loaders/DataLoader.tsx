import { useEffect } from "react";
import { useParams } from "react-router";

export function DataLoader() {
  const params = useParams();

  useEffect(() => {
    console.log("параметры", params);
  }, []);

  return <></>;
}
