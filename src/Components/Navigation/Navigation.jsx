import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={s.container}>
      <Link to="/generate"> Ģenerēt QR kodu</Link>
      <Link to="/generate-history">Ģenerēšanas vēsture</Link>
      <Link to="/scan">Skanēt QR kodu</Link>
      <Link to="/scan-history">Skanēšanas vēsture</Link>
    </nav>
  );
};
