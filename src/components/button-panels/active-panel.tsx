import { Action, State } from "../../types/state";

export interface Props extends State {
    dispatch: React.Dispatch<Action>;
}
export function ActivePanel(props: Props) {
    return <div>Active Example Goes Here</div>;
}