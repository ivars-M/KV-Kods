import { SCAN_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";
import s from "./scanHistory.module.css";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

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
