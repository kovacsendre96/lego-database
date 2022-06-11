import {Grid} from "@mui/material";
import MainPage from "./Layout/Main page/MainPage";
import {Route, Routes} from 'react-router-dom';
import LegoDetailsPage from "./Layout/Main page/LegoDetailsPage";
import {useEffect, useState} from "react";
import {sendData} from "./Helpers/axios";
import {renderSpinner} from "./Helpers/functions";

const App = () => {

  const [legoData, setLegoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sendData('GET', 'https://lego-project-da06d-default-rtdb.firebaseio.com/.json', null, afterGetDatabase);
  }, []);

  const afterGetDatabase = (response) => {
    if (response.status === 200) {
      setLegoData(Object.values(response.data))
      setLoading(false);
    }
console.log(process.env.PUBLIC_URL);
  };
  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={10}>
        <Routes>
          <Route path={`/`} element={
            !loading ?
              <MainPage legoData={legoData} setLegoData={setLegoData} afterGetDatabase={afterGetDatabase}/>
              :
              renderSpinner()
          }/>

          {!loading &&
          legoData.map((data, index) => (
            <Route key={index} path={`/${data.id}`}
                   element={
                     <LegoDetailsPage
                       afterGetDatabase={afterGetDatabase}
                       legoData={data}
                       index={index}
                       setLegoData={setLegoData}
                     />}
            />
          ))
          }
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
