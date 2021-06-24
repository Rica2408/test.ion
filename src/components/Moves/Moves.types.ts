import { Dispatch, SetStateAction } from "react"

export type MoveType = {
    title: string
    subtitle: string
    amount: number
    date: string
}

export type MoveProps = {
    move: MoveType
    setIsHome: Dispatch<SetStateAction<boolean>>
    setSelectedMove: Dispatch<SetStateAction<MoveType>>
}
