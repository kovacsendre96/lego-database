import { Grid } from "@mui/material";
import MainPage from "./Layout/Main page/MainPage";
import { Route, Routes } from 'react-router-dom';
import LegoDetailsPage from "./Layout/Main page/LegoDetailsPage";
import { useEffect, useState } from "react";
import { sendData } from "./Helpers/axios";

function App() {

  const [legoData, setLegoData] = useState(null);

  useEffect(() => {
    sendData('GET', 'https://lego-project-da06d-default-rtdb.firebaseio.com/.json', null, afterGetDatabase);
  }, []);

  const afterGetDatabase = (response) => {
    if (response.status === 200) {
      setLegoData(response.data)
    }
  };

  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={10}>
        <Routes>
          <Route path={`/lego-database`} element={<MainPage />} />
          {legoData &&
            legoData.map((data, index) => (
              <Route key={index} path={`/lego-database/${data.id}`} element={<LegoDetailsPage legoData={data} />} />
            ))
          }
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
