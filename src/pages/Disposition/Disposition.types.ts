import { Dispatch, SetStateAction } from "react";
import { MoveType } from "../../components/Moves/Moves.types";

export type DispositionProps = {
    isHome: Boolean
    setIsHome: Dispatch<SetStateAction<boolean>>
    move: MoveType
}