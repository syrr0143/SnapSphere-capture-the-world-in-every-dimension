import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LargeNav from './Components/Header/LargeNav/LargeNav.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Authentication/Login.jsx';
import Signup from './Pages/Authentication/Signup.jsx';
import Main from './Pages/Profile/Main.jsx';
import MessagePage from './Pages/Chat/Messages/MessagesPage.jsx';
import ReelsPage from './Pages/Reels/ReelsPage.jsx';
import Explore from './Pages/Explore/Explore.jsx';
import SearchPage from './Pages/Search/Search.jsx';
import Notifications from './Pages/Notifications/Notification.jsx';
import { UserContext, UserProvider } from './Context/UserContext.jsx'
import { PostProvider } from './Context/posts/PostToShow.jsx';
function App() {
  return (

    <UserProvider>
      <PostProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<div className='w-full h-auto bg-black'><Home /></div>}>
            <Route path='profile' element={<Main />} />
            <Route path='messages' element={<MessagePage />} />
            <Route path='reels' element={<ReelsPage />} />
            <Route path='explore' element={<Explore />} />
            <Route path='notifications' element={<Notifications />} />
            <Route path='search' element={<SearchPage />} />
          </Route>
        </Routes>
      </PostProvider>
    </UserProvider>

  );
}

export default App;
