import { Dispatch } from "react";
import { Action, State } from "../../types";

export interface PanelProps extends State {
    dispatch: Dispatch<Action>
}