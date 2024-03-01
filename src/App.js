import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from './galleryState';
import './App.css';

function App() {

  const photos = useSelector(state => state.gallery.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);


  return (
    <div className='App'>
      <h1>PHOTO GALLERY</h1>
      <p>This is a photo gallery made using redux toolkit and redux thunk.</p>
      <hr />
      <div className='Gallery'>
        {
          photos.map(photo =>
            <img key={photo.id}
              alt={photo.author}
              src={photo.download_url}
              width={'400'}
              height={'400'}
            />
          )}
      </div>
      <button>VIEW MORE</button>
    </div>
  )
}

export default App;
