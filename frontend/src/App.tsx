import {  BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Camera from "./pages/camera";
import { Header, Footer } from './components';

function Layout() {
  const hideHeaderOn = ["/camera","/signup"];
  const location = useLocation();
  const showSpecialHeader = !hideHeaderOn.includes(location.pathname);
  return (
    <>
    <Header special={showSpecialHeader}/>
    <div className="flex h-[calc(100vh-128px)] p-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App