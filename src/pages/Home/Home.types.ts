import { Dispatch, SetStateAction } from "react";
import { MoveType } from "../../components/Moves/Moves.types";

export type HomeProps = {
    isHome: Boolean
    setIsHome: Dispatch<SetStateAction<boolean>>
    setSelectedMove: Dispatch<SetStateAction<MoveType>>
}