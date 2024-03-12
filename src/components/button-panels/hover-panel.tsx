import { Action, State } from "../../types/state";

export interface Props extends State {
    dispatch: React.Dispatch<Action>;
}
export function HoverPanel(props: Props) {
    return <div>Hover Example Goes Here</div>;
}