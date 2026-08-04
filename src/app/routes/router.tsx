// App.tsx or routes.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./landing";
import NotFound from "./not-found/not-found";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
