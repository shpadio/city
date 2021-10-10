import React, {Dispatch, SetStateAction, useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {SquareState} from "../Board";

interface OptionsDropdownProps {
    squaresState: SquareState[];
    setSquaresState: Dispatch<SetStateAction<SquareState[]>>;
    coordinates:Partial<SquareState>;
}

const OptionsDropdown = ({ squaresState,setSquaresState,coordinates }: OptionsDropdownProps) => {
    const assetOptions:string[] = [
        'factory',
        'house',
        'park',
        'empty'
    ]

    const [assetOption,setSelectedOption] = useState('')
    const handleChange = (e:any) => {

        const currentSquare = squaresState.find((square) => square.y === coordinates.y && square.x === coordinates.x )
        console.log(currentSquare,'current')
        if(currentSquare) {
            // const index = squaresState.findIndex(currentSquare)
            currentSquare.isEmpty = false
            currentSquare.asset.title = e.target.value
            setSelectedOption(e.target.value)
            const newSquaresState = squaresState.splice(1,1,currentSquare)
            console.log(newSquaresState,'new state!')
            setSquaresState(newSquaresState)
        }
    }



    return (
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={assetOption}
                    label="Age"
                    onChange={handleChange}
                >
                    {
                        assetOptions?.map((option) =>   <MenuItem key={option} value={option}>{option}</MenuItem> )
                    }

                </Select>
            </FormControl>
    );
};

export default OptionsDropdown;