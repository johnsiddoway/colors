import { State } from "../../types/state";
import { ButtonPanel } from "./button-panel";

export interface Props extends State {

};

export function SwatchPanel(props: Props) {
	return <>
		<ButtonPanel {...props} />
	</>;
};
