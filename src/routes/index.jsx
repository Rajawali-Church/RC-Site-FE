import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { AddVolunteer, Dashboard, DetailVolunteer, EditVolunteer, EventAdd, EventDetail, EventEdit, IndexEvent, Landing, Login } from "../pages";
import { persistor, store } from "../redux/store";
import ProtectingRoute from "./protectingRoute";

const Routers = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Landing />
                            }
                        />

                        <Route
                            path="/login"
                            element={
                                <Login />
                            }
                        />

                        <Route
                            path="/dashboard"
                            element={
                                <ProtectingRoute>
                                    <Dashboard />
                                </ProtectingRoute>
                            }
                        />

                        <Route
                            path="/dashboard/event"
                            element={
                                <ProtectingRoute>
                                    <IndexEvent />
                                </ProtectingRoute>
                            }
                        />

                        <Route
                            path="/dashboard/event/:id"
                            element={
                                <ProtectingRoute>
                                    <EventDetail />
                                </ProtectingRoute>
                            }
                        />

                        <Route
                            path="/dashboard/add/event"
                            element={
                                <ProtectingRoute>
                                    <EventAdd />
                                </ProtectingRoute>
                            }
                        />

                        <Route
                            path="/dashboard/event/edit/:id"
                            element={
                                <ProtectingRoute>
                                    <EventEdit />
                                </ProtectingRoute>
                            }
                        />

                        <Route
                            path="/dashboard/add/volunteer"
                            element={
                                <ProtectingRoute>
                                    <AddVolunteer />
                                </ProtectingRoute>
                            }
                        />

                        <Route
                            path="/dashboard/volunteer/:id"
                            element={
                                <ProtectingRoute>
                                    <DetailVolunteer />
                                </ProtectingRoute>
                            }
                        />

                        <Route
                            path="/dashboard/volunteer/edit/:id"
                            element={
                                <ProtectingRoute>
                                    <EditVolunteer />
                                </ProtectingRoute>
                            }
                        />
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    )
}

export default Routers;