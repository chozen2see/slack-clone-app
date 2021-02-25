import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { auth, provider } from './context/firebase';

// Components
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Firebase
import db from './context/firebase';

function App() {

  const [rooms, setRooms] = useState([]);
  // user JSON.parse to convert local storage user string to obj
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = () => {
    // get the db collection - using real-time database (will refresh page when data added to firebase)
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })
  }

  // only call the function when component initialized
  useEffect(() => {
    getChannels();
  }, [])

  // sign out fn to pass down to header
  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  }


  return (
    <div className="App">
      <Router>
        {/* using styled components for the Container, Main components */}

        {!user ?
          <Login setUser={setUser} />
          :

          <Container>

            <Header user={ user } signOut={ signOut } />

            <Main>
              <Sidebar rooms={ rooms } />

              <Switch>
                <Route path="/room">
                  {/* this will be the chat room */}
                  <Chat />
                </Route>

                {/* home page will be the login page */}
                {/* <Route path="/">
                <Login />
              </Route> */}
              </Switch>
            </Main>

          </Container>
        }

      </Router>

    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`
const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`


