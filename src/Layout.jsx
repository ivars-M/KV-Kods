import { Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation";
import { QrCodeGenerator } from "./Components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./Components/Scan/QrCodeScanner";
import { GenerateHistory } from "./Components/Generate/GenerateHistory";
import { ScanHistory } from "./Components/Scan/ScanHistory";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/generate" replace />} />
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/scan-history" element={<ScanHistory />} />
        <Route path="/generate-history" element={<GenerateHistory />} />
        <Route path="*" element={<Navigate to="/generate" replace />} />
      </Routes>
    </div>
  );
};
export { Layout };
