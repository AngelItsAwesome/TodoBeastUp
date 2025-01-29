import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/auth/Login.tsx";
import Base from './pages/auth/Base.tsx';
import Register from './pages/auth/Register.tsx';
import Check from './pages/auth/Check.tsx'
import Verify from "./pages/auth/Verified.tsx";
import Reset from "./pages/auth/Reset.tsx";
import Recover from "./pages/auth/Recover.tsx";
import Home from "./pages/main/Home.tsx"
import BaseHome from './pages/main/Base.tsx';

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    {/* public routes */}
                    <Route path="/" element={<Base />}>
                        <Route index element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="check" element={<Check />} />
                        <Route path="forgot" element={<Reset />} />
                        <Route path="reset/:token" element={<Recover />} />
                        <Route path="verify/:token" element={<Verify />} />
                    </Route>
                    {/* Private routes */}
                    <Route path="/home" element={<BaseHome />}>
                        <Route index element={<Home/>}/>
                        <Route index element={<Home/>}/>
                    </Route>

                </Routes>
        </BrowserRouter>
    )
}

export default App
