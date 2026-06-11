import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../../constants";
import { appendToArray, createHistoryItem } from "../../utils/storage";

import s from "./qrCodeGenerator.module.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    const item = createHistoryItem(value);
    if (!item.text) return;
    appendToArray(GENERATE_DATA, item, { limit: 50 });
    setResult(item.text);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

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
