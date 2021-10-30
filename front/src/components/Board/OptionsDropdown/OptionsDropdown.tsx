import React, {Dispatch, SetStateAction, useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {SquareState} from "../Board";

interface OptionsDropdownProps {
    squaresState: SquareState[];
    setSquaresState: Dispatch<SetStateAction<SquareState[]>>;
    coordinates:Partial<SquareState>;
}

const OptionsDropdown = ({ squaresState, setSquaresState, coordinates }: OptionsDropdownProps) => {
    const assetOptions:string[] = [
        'factory',
        'house',
        'park',
        'empty'
    ]

    const [assetOption,setSelectedOption] = useState('')

    const handleChange = (e: any) => {
        const currentSquare = squaresState.find((square) => square.y === coordinates.y && square.x === coordinates.x )
    
        if(currentSquare) {
            const index = squaresState.findIndex((el) => el.asset.title = currentSquare.asset.title)
            currentSquare.isEmpty = false
            currentSquare.asset.title = e.target.value
            setSelectedOption(e.target.value)
            squaresState[index] = currentSquare
        }
    }



    return (
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{assetOption}</InputLabel>
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