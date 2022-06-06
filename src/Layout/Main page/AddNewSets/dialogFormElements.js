import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExtensionIcon from '@mui/icons-material/Extension';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TagIcon from '@mui/icons-material/Tag';

export const inputStructure = (
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
    setValueStateMissing
) => {
    return [
        {
            icon: <LocalOfferIcon />,
            id: 'sett_name',
            text: 'Szett neve',
            ref: nameRef,
            error: errorStateName,
            setError: setErrorStateName,
            value: valueStateName,
            setValue: setValueStateName
        },
        {
            icon: <TagIcon />,
            id: 'sett_id',
            text: 'Szett azonosító',
            ref: idRef,
            error: errorStateId,
            setError: setErrorStateId,
            value: valueStateId,
            setValue: setValueStateId,
        },
        {
            icon: <ExtensionIcon />,
            id: 'number_of_pieces',
            text: 'Elemek száma',
            ref: piecesRef,
            error: errorStatePieces,
            setError: setErrorStatePieces,
            value: valueStatePieces,
            setValue: setValueStatePieces
        },
        {
            icon: <DateRangeIcon />,
            id: 'year_released',
            text: 'Megjelenés dátuma',
            ref: releaseRef,
            error: errorStateRelease,
            setError: setErrorStateRelease,
            value: valueStateRelease,
            setValue: setValueStateRelease
        },
        {
            icon: <InsertPhotoIcon />,
            id: 'banner',
            text: 'Főkép',
            ref: bannerRef,
            error: errorStateBanner,
            setError: setErrorStateBanner,
            value: valueStateBanner,
            setValue: setValueStateBanner
        },
        {
            icon: <InsertPhotoIcon />,
            id: 'box',
            text: 'Kép a dobozról',
            ref: boxRef,
            error: errorStateBox,
            setError: setErrorStateBox,
            value: valueStateBox,
            setValue: setValueStateBox
        },
        {
            icon: <InsertPhotoIcon />,
            id: 'real_picture',
            text: 'Élőkép',
            ref: realPicRef,
            error: errorStateRealImg,
            setError: setErrorStateRealImg,
            value: valueStateRealImg,
            setValue: setValueStateRealImg
        },
        {
            icon: <SearchOffIcon />,
            id: 'missing_pieces',
            text: 'Hiányzó darabok',
            ref: missingPiecesRef,
            error: errorStateMissing,
            setError: setErrorStateMissing,
            value: valueStateMissing,
            setValue: setValueStateMissing
        },
    ];
}