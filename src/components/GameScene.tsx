import { useEffect, useState } from "react";
import {calculate_new_grid_width } from "./functions/helper_functions.js"
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

const min_screen_dimension = (vh < vw) ? vh: vw;
const starting_number_of_grid_elements = 10;



export function GameScene(props){
    const [levelNumber, setLevel] = useState(1);
    const [game_grid_width, setGameGridWidth] = useState(calculate_new_grid_width(starting_number_of_grid_elements+levelNumber, min_screen_dimension));



    return(
        
    )

}
