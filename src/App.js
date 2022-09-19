import { Routes, Route, Navigate } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./component/layout/MainNavigation";

function App() {
  return (
    <div>
    <MainNavigation/>
      <Routes>
      <Route index element={<AllMeetupsPage />} />
      <Route path="/home" element={<AllMeetupsPage />} />
      <Route path="/new-meetup" element={<NewMeetupPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
    </div>
  );
}

export default App;
