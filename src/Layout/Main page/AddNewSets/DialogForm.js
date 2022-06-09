import React, { useEffect, useRef, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { inputStructure } from "./dialogFormElements";
import { sendData } from "../../../Helpers/axios";

const DialogForm = ({ handleDialogClose, legoData, setLegoData, handleSnakcbarClose, snackbarOpen, setSnackbarOpen }) => {

    const nameRef = useRef();
    const idRef = useRef();
    const piecesRef = useRef();
    const releaseRef = useRef();
    const bannerRef = useRef();
    const boxRef = useRef();
    const realPicRef = useRef();
    const missingPiecesRef = useRef();
    const priceFromRef = useRef();
    const priceToRef = useRef();

    const [errorStateName, setErrorStateName] = useState(null);
    const [errorStateId, setErrorStateId] = useState(null);
    const [errorStatePieces, setErrorStatePieces] = useState(null);
    const [errorStateRelease, setErrorStateRelease] = useState(null);
    const [errorStateBanner, setErrorStateBanner] = useState(null);
    const [errorStateBox, setErrorStateBox] = useState(null);
    const [errorStateRealImg, setErrorStateRealImg] = useState(null);
    const [errorStateMissing, setErrorStateMissing] = useState(null);
    const [errorFromPrice, setErrorFromPrice] = useState(null);
    const [errorToPrice, setErrorToPrice] = useState(null);

    const [valueStateName, setValueStateName] = useState(null);
    const [valueStateId, setValueStateId] = useState(null);
    const [valueStatePieces, setValueStatePieces] = useState(null);
    const [valueStateRelease, setValueStateRelease] = useState(null);
    const [valueStateBanner, setValueStateBanner] = useState(null);
    const [valueStateBox, setValueStateBox] = useState(null);
    const [valueStateRealImg, setValueStateRealImg] = useState(null);
    const [valueStateMissing, setValueStateMissing] = useState(null);
    const [valueStateFromPrice, setValueStateFromPrice] = useState(null);
    const [valueStateToPrce, setValueStateToPrce] = useState(null);

    const [formIsValid, setFormIsValid] = useState(false);
    useEffect(() => {
        if (errorStateName === false
            && errorStateId === false
            && errorStatePieces === false
            && errorStateRelease === false
            && errorStateBanner === false
            && errorStateBox === false
            && errorStateRealImg === false
            && errorFromPrice === false
            && errorToPrice === false
            && errorStateMissing === false) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }, [errorStateName, errorStateId, errorStatePieces, errorStateRelease, errorStateBanner, errorStateBox, errorStateRealImg, errorStateMissing]);

    const inputs = inputStructure(
        nameRef,
        idRef,
        piecesRef,
        releaseRef,
        bannerRef,
        boxRef,
        realPicRef,
        missingPiecesRef,
        errorStateName,
        setErrorStateName,
        errorStateId,
        setErrorStateId,
        errorStatePieces,
        setErrorStatePieces,
        errorStateRelease,
        setErrorStateRelease,
        errorStateBanner,
        setErrorStateBanner,
        errorStateBox,
        setErrorStateBox,
        errorStateRealImg,
        setErrorStateRealImg,
        errorStateMissing,
        setErrorStateMissing,
        valueStateName,
        setValueStateName,
        valueStateId,
        setValueStateId,
        valueStatePieces,
        setValueStatePieces,
        valueStateRelease,
        setValueStateRelease,
        valueStateBanner,
        setValueStateBanner,
        valueStateBox,
        setValueStateBox,
        valueStateRealImg,
        setValueStateRealImg,
        valueStateMissing,
        setValueStateMissing,
        priceFromRef,
        priceToRef,
        errorFromPrice,
        setErrorFromPrice,
        errorToPrice,
        setErrorToPrice,
        valueStateFromPrice,
        setValueStateFromPrice,
        valueStateToPrce,
        setValueStateToPrce
    );

    useEffect(() => {
        if (formIsValid) {
            let apiParams = {};
            inputs.forEach((data) => {
                if (data.id === 'sett_id') {
                    apiParams.id = data.value
                }
                if (data.id === 'missing_pieces') {
                    apiParams.missing_pieces = data.value
                }
                if (data.id === 'sett_name') {
                    apiParams.name = data.value
                }
                if (data.id === 'number_of_pieces') {
                    apiParams.number_of_pieces = data.value
                }
                if (data.id === 'banner') {
                    apiParams.banner_picture = data.value
                }
                if (data.id === 'box') {
                    apiParams.box_picture = data.value
                }
                if (data.id === 'real_picture') {
                    apiParams.real_picture = data.value
                }
                if (data.id === 'year_released') {
                    apiParams.year_released = data.value
                }
                if (data.id === 'min_price') {
                    apiParams.min_price = data.value
                }
                if (data.id === 'max_price') {
                    apiParams.max_price = data.value
                }
            });
            let sendApiParams = legoData ? legoData : [];
            sendApiParams = [...sendApiParams, apiParams];
            sendData('PUT', 'https://lego-project-da06d-default-rtdb.firebaseio.com/.json', sendApiParams, afterAddData);
        }
    }, [formIsValid]);

    const afterAddData = (response) => {
        console.log('response', response);
        setSnackbarOpen(true);
        setLegoData(response.data);
        handleDialogClose();
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        inputs.forEach(input => {
            const inputValue = input.ref.current.children[1].children[0].value;
            if (inputValue === '') {
                input.setError(true);
                input.setValue(inputValue);
            } else {
                input.setError(false);
                input.setValue(inputValue);
            }
        });
    };

    const renderInputs = () => {
        return inputs.map((data, index) => (
            <Box display={'flex'} alignItems={'flex-end'} key={index}>
                <Grid className="margin-sm-horizontal">{data.icon}</Grid>
                <TextField
                    style={{
                        alignContent: 'center',
                    }}
                    ref={data.ref}
                    id={data.id}
                    label={data.text}
                    variant="standard"
                    error={data.error}
                />
            </Box>
        ))
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <Grid container justifyContent={'center'} alignContent={'center'}>
                {renderInputs()}
                <Grid container alignItems={'center'} justifyContent={'space-around'} className="margin-md">
                    <Button type="submit" autoFocus variant="contained">
                        Készlet felvétele
                    </Button>
                    <Button autoFocus onClick={handleDialogClose} variant="text">
                        Vissza
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default DialogForm;