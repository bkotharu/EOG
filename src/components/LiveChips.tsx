import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "./Chip";
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1)
        },
        display: 'flex'
    }
}));

export default function LiveChips(props: any) {
    
    const classes = useStyles();
    const liveStreamOn = useSelector((state: any) => state.live);
    const {flareTemp,oilTemp,casingPressure,waterTemp,injValveOpen,tubingPressure} = useSelector((state: any) => state.data.latestValues);
    
    const selectedMetrics = useSelector((state: any) => state.selectedMetrics);

    const handleChips = () => {
        
        
        return selectedMetrics.map((metric: any)=>{
            if (metric === 'flareTemp'){
                return <Chip key={metric} mVal={metric} label={`${flareTemp}`} />
            }
            if (metric === 'oilTemp'){
                return <Chip key={metric}  mVal={metric} label={`${oilTemp}`}/>
            }
            if (metric === 'waterTemp'){
                return <Chip key={metric} mVal={metric} label={`${waterTemp}`}/>
            }
            if (metric === 'casingPressure'){
                return <Chip key={metric} mVal={metric} label={`${casingPressure}`}/>
            }
            if (metric === 'tubingPressure'){
                return <Chip key={metric}  mVal={metric} label={`${tubingPressure}`}/>
            }
            if (metric === 'injValveOpen'){
                return <Chip key={metric} mVal={metric} label={`${injValveOpen}`}/>
            }
            return null
        })
    };

    return (
    <div className={classes.root} >
        
        {(liveStreamOn? handleChips(): null )} 
    </div>
    )
}
