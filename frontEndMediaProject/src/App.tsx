// App.tsx
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./components/SignIn";
import MediaSelection from "./pages/Choices";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={
        <>
          <SignIn />
          <Footer />
        </>
      } />
      <Route path="/choices" element={
        <>
          <MediaSelection />
          <Footer />
        </>
      } />
    </Routes>
  );
}

export default App;