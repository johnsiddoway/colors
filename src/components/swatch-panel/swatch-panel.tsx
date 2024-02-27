import { State } from "../../types/state";

export interface Props extends State {

};

export function SwatchPanel(props: Props) {
    return <div>Style Components Go Here. Theme Color Count: {props.themeColorCount}</div>
};
