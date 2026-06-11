import { SCAN_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";
import { useMemo, useState } from "react";
import s from "./scanHistory.module.css";
import { clearKey, loadArray } from "../../utils/storage";

export const ScanHistory = () => {
  const [data, setData] = useState(() => loadArray(SCAN_DATA));

  const onClear = () => {
    clearKey(SCAN_DATA);
    setData([]);
  };

  const normalized = useMemo(
    () =>
      data
        .map((x) => (typeof x === "string" ? { id: x, text: x } : x))
        .filter((x) => x && typeof x.text === "string" && x.text.trim() !== ""),
    [data]
  );

  return (
    <div className={s.container}>
      <button type="button" className="button" onClick={onClear}>
        Notīrīt skenēšanas vēsturi
      </button>

      {normalized.length === 0 ? (
        <p style={{ fontSize: "18px" }}>Nav skenēšanas vēstures.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {normalized.map((item) => (
            <li key={item.id} style={{ fontSize: "20px", marginTop: "12px" }}>
              <div>{item.text}</div>
              <div>
                <QRCodeSVG value={item.text} size={100} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
