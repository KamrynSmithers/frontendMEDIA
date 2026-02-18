// App.tsx
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./components/SignIn";
import MediaSelection from "./pages/Choices";
import Footer from "./components/Footer";
import ResetPassword from "./pages/ResetPassword"; 
import Movies from "./pages/Movies";

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
        <Route path="/reset-password/:token" element={<ResetPassword />} /> 
      <Route path="/movies" element={<Movies />} />
    </Routes>
    
  );
}

export default App;