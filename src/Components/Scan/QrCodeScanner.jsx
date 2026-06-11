// import { Scanner } from "@yudiel/react-qr-scanner";
// import { useState } from "react";
// import s from "./qrCodeScanner.module.css";

// import { SCAN_DATA } from "../../constants";

// export const QrCodeScanner = () => {
//   const [scanned, setScanned] = useState("");
//   const scanHandler = (result) => {
//     setScanned(result[0].rawValue);
//     const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

//     console.log("Previous Data", prevData);

//     localStorage.setItem(SCAN_DATA, JSON.stringify([...result[0].rawValue]));
//   };

//   console.log(SCAN_DATA);

//   return (
//     <div className={s.container}>
//       <Scanner
//         allowMultiple
//         onScan={scanHandler}
//         components={{
//           //audio: false,
//           finder: false,
//         }}
//         styles={{ width: "300px" }}
//       />
//       <p className={s.result}>{scanned}</p>
//     </div>
//   );
// };

import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import s from "./qrCodeScanner.module.css";

import { SCAN_DATA } from "../../constants";
import { appendToArray, createHistoryItem } from "../../utils/storage";

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);
  const [error, setError] = useState(null);
  const scanHandler = (result) => {
    const raw = result?.[0]?.rawValue ?? "";
    const item = createHistoryItem(raw);
    if (!item.text) return;
    setScanned(item.text);
    appendToArray(SCAN_DATA, item, { limit: 50 });
  };

  return (
    <div className={s.container}>
      <Scanner
        onScan={scanHandler}
        onError={(e) => setError(e?.message || "Kļūda atverot kameru")}
        components={{
          //audio: false,
          finder: false,
        }}
        styles={{ width: "300px" }}
      />
      {error ? (
        <p className={s.result}>{error}</p>
      ) : (
        <p className={s.result}>{scanned}</p>
      )}
    </div>
  );
};
