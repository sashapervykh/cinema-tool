import type { ReactNode } from "react";
import { Link } from "react-router";
import style from "./Redirection.module.css";

export function Redirection({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className={style.link}>
      {children}
    </Link>
  );
}
