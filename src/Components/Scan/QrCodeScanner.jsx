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

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);
  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };

  return (
    <div className={s.container}>
      <Scanner
        onScan={scanHandler}
        components={{
          //audio: false,
          finder: false,
        }}
        styles={{ width: "300px" }}
      />
      <p className={s.result}>{scanned}</p>
    </div>
  );
};
