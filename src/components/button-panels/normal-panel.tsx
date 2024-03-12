import { Action, State } from "../../types/state";

export interface Props extends State {
    dispatch: React.Dispatch<Action>;
}
export function NormalPanel(props: Props) {
    return <div>Normal Example Goes Here</div>;
}