import {  BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Home from "./pages/home";
import { Header, Footer } from './components';

function Layout() {
  const hideHeaderOn = ["/camera"];
  const location = useLocation();
  const showSpecialHeader = !hideHeaderOn.includes(location.pathname);
  return (
    <>
    <Header special={showSpecialHeader}/>
    <div className="flex h-[calc(100vh-128px)] p-10">
      <Routes>
        <Route path="/" element={<Home />} />
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