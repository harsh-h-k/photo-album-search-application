import { useEffect } from "react";

import './App.css';
import {useSelector , useDispatch} from 'react-redux'
import {fetchAlbums} from './redux/reducers/album/albums'
import {fetchPhotos} from './redux/reducers/photos/photos'
import { useStyles } from "./styles/styles";

import Main from './components/Main/Main'

function App() {
   const classes = useStyles()
  let {albums , photos} = useSelector( state => state)
 const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchAlbums())
  dispatch(fetchPhotos())
}, [])

// console.log(albums.albums[0])
// console.log(photos.photos)

  return (
    <div className={classes.app}>
      {albums.loading && photos.loading ? (
        <h1>Please wait, Contents loading... </h1>
        ) : (
          <Main albums={albums.albums.slice(0,5)} photos={photos.photos} />
        )}
    </div>
  )
}

export default App;
