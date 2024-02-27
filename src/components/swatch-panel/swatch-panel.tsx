import { State } from "../../types/state";
import { ButtonSwatchList } from "./button-swatch";

export interface Props extends State {

};

export function SwatchPanel(props: Props) {
	return <>
		<ButtonSwatchList {...props} />
	</>;
};
