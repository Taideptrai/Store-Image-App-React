import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import LoginForm from './comps/LoginForm';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  console.log('App render');
  const [user, setUser] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title user={user}/>
      {!user && <LoginForm setUserFromLoginForm={setUser}/>}
      {user && <UploadForm user={user}/>}
      {user && <ImageGrid user={user} setSelectedImg={setSelectedImg}/>}
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImgfromModal={setSelectedImg}/>}
    </div>
  );
}

export default App;
