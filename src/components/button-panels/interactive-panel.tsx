import { Action, State } from "../../types/state";

export interface Props extends State {
    dispatch: React.Dispatch<Action>;
}
export function InteractivePanel(props: Props) {
    return <div>Interactive Example Goes Here</div>;
}