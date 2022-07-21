import React from 'react';
import { Routes,  Route} from "react-router-dom";
import Home from './pages/home';
/* import Nav from './components/nav'; */
import Profile from './pages/profile';
import NewProfile from './pages/newProfile';
import './styles/index.scss';



function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}>
         {/*  <Route index element={<Nav />} />   */}
          <Route path="profile" element={<Profile />}>
            <Route path=":profileId" element={<Profile />} />
            <Route path="new" element={<NewProfile/>} />           
          </Route>
         </Route >
      </Routes>  
  );
}

export default App;
