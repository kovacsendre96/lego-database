import React, {useState} from "react";
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Filter = ({legoData, setLegoData}) => {
  const [initialState, setInitialState] = useState(legoData);
  const [filterInputName, setFilterInputName] = useState("");
  const [filterInputId, setFilterInputId] = useState("");

  const handleFilterInputChangeName = (e) => {
    const target = e.target.value
    setFilterInputName(target);
    const filteredData = initialState.filter(lego => lego.name.toLowerCase().includes(target.toLowerCase()))
    setLegoData(filteredData);

  };
  const handleFilterInputChangeId = (e) => {
    const target = e.target.value
    setFilterInputId(target);
    const filteredData = initialState.filter(lego => lego.id.toLowerCase().includes(target.toLowerCase()))
    setLegoData(filteredData);
  };
  return (
    <React.Fragment>
      <TextField
        id="lego-filter"
        value={filterInputName}
        onChange={handleFilterInputChangeName}
        label="Név"
        variant="outlined"
        className="margin-sm input-width"
        InputProps={{
          endAdornment: <InputAdornment position="end">{
            <SearchIcon/>
          }
          </InputAdornment>,
        }}
      />

      <TextField
        id="lego-filter"
        value={filterInputId}
        onChange={handleFilterInputChangeId}
        label="Azonosító"
        variant="outlined"
        className="margin-sm input-width"
        InputProps={{
          endAdornment: <InputAdornment position="end">{
            <SearchIcon/>
          }
          </InputAdornment>,
        }}
      />
    </React.Fragment>
  );
};

export default Filter;
