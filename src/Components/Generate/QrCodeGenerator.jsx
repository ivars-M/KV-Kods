import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../../constants";

import s from "./qrCodeGenerator.module.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
    setResult(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

  console.log("result:", result);

  return (
    <div className={s.container}>
      <input
        type="text"
        value={value}
        placeholder="Ievadiet tekstu..."
        onChange={onChangeHandler}
        className={s.input}
      />
      <button type="button" className="button" onClick={onClickHandler}>
        Ģenerēt QR
      </button>
      {result !== "" && (
        <div className={s.qrWraped}>
          <QRCodeSVG value={result} size={200} />
        </div>
      )}
    </div>
  );
};

/*import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("hello");
  const [result, setResult] = useState("");
  const onClickHandler = (event) => {
    setResult(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

  console.log("result:", result);

  return (
    <div>
      {" "}
      {result !== "" && <QRCodeSVG value={result} />}{" "}
      <input type="text" value={value} onChange={onChangeHandler} />{" "}
      <button type="button" onClick={onClickHandler}>
        {" "}
        Ģenerēt QR{" "}
      </button>
    </div>
  );
};
*/
