import { useEffect , useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from "./styled"
import { MyFooter, MyHeader } from "./components"
import { AboutPage, DoctorsPage,  MyDoctorsPage, MyEquipments, MyHomePage, PolicyPage, PricePage, SearchPage, ServicesPage, ServicesParts } from "./containers"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { MyEquipmentsPage } from "./containers/equipmentsPage"
export const App = () => {
    const [value, setvalue] = useState(false)
    useEffect(() => {
        setvalue(e => !e)
    }, [window.location.href])
    const routes = [
        { components: <MyHomePage />, path: "/" },
        { components: <ServicesPage />, path: "/:id" },
        { components: <ServicesParts />, path: "/:id/:index" },
        { components: <MyEquipments />, path: "/equipments/:id" },
        { components: <MyEquipmentsPage />, path: "/equipments" },
        { components: <PricePage />, path: "/price" },
        { components: <MyDoctorsPage />, path: "/doctors" },
        { components: <DoctorsPage />, path: "/doctors/:id" },
        { components: <SearchPage />, path: "/search" },
        { components: <PolicyPage />, path: "/policy" },
        { components: <AboutPage />, path: "/about" },
        { components: <MyHomePage />, path: "/*" },
    ]
    return (
        <>
            <Router>
                <GlobalStyles />
                <MyHeader />
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Routes>
                    {routes.map((e, i) => {
                        return (
                            <Route element={e.components} path={e.path} key={i} />
                        )
                    })}
                </Routes>
                <MyFooter />
            </Router>
        </>
    )
}

