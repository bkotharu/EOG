import React from "react";
import Select from 'react-select';
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "../store/actions";

const useStyles = makeStyles(theme => ({
   
    selector:{
        width: '30%',
        float: 'right',
        marginRight: '1%'
    },
    label: {
        fontWeight: "800"
    },
    noLabel: {
        marginTop: theme.spacing(3)
    }
}));

const options = [
    { value: 'flareTemp', label: 'flareTemp' },
    { value: 'tubingPressure', label: 'tubingPressure' },
    { value: 'injValveOpen', label: 'injValveOpen' },
    { value: 'oilTemp', label: 'oilTemp' },
    { value: 'casingPressure', label: 'casingPressure' },
    { value: 'waterTemp', label: 'waterTemp' },
];


export default function SelectBox() {
    const classes = useStyles();
   // const theme = useTheme();
    const [metricName, setmetricName] = React.useState([]);
    const dispatch = useDispatch();

    const handleChange = (newValue) => {
        const selectedValues = newValue.map(obj => obj.value);
        setmetricName(selectedValues);
        handleDispatch(selectedValues);
    };

    const handleDispatch = metric =>
        dispatch({ type: actions.SET_SELECTED_METRIC, metric });

    return (
        <div className={classes.selector}>
            <Select
                isMulti
                options={options}
                onChange={handleChange}
            ></Select>
        </div>
    );
}
