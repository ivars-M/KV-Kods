import { GENERATE_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";
import s from "./generateHistory.module.css";

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
  console.log(data);
  return (
    <div className={s.container}>
      {data.map((text) => (
        <p key={text} style={{ fontSize: "20px" }}>
          {text}
          <p>
            <QRCodeSVG value={text} size={100} />
          </p>
        </p>
      ))}
    </div>
  );
};
