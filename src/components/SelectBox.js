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

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//     PaperProps: {
//         style: {
//             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//             width: 250
//         }
//     }
// };

const options = [
    { value: 'flareTemp', label: 'flareTemp' },
    { value: 'tubingPressure', label: 'tubingPressure' },
    { value: 'injValveOpen', label: 'injValveOpen' },
    { value: 'oilTemp', label: 'oilTemp' },
    { value: 'casingPressure', label: 'casingPressure' },
    { value: 'waterTemp', label: 'waterTemp' },
];

// function getStyles(name, metricName, theme) {
//     return {
//         fontWeight:
//             metricName.indexOf(name) === -1
//                 ? theme.typography.fontWeightRegular
//                 : theme.typography.fontWeightMedium
//     };
// }

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
        
        // <div className={classes.root}>
        //     <FormControl className={classes.formControl}>
        //         <InputLabel
        //             htmlFor="select-multiple-chip"
        //             className={classes.label}
        //         >
        //             Metrics...
        //         </InputLabel>
        //         <Select
        //             multiple
        //             value={metricName}
        //             onChange={handleChange}
        //             input={<Input id="select-multiple-chip" />}
        //             renderValue={selected => (
        //                 <div className={classes.chips}>
        //                     {selected.map(value => (
        //                         <Chip
        //                             key={value}
        //                             label={value}
        //                             className={classes.chip}
        //                         />
        //                     ))}
        //                 </div>
        //             )}
        //             MenuProps={MenuProps}
        //         >
        //             {metrics.map(metric => (
        //                 <MenuItem
        //                     key={metric}
        //                     value={metric}
        //                     style={getStyles(metric, metricName, theme)}
        //                 >
        //                     {metric}
        //                 </MenuItem>
        //             ))}
        //         </Select>
        //     </FormControl>
        // </div>
    );
}
