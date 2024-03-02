import { ButtonPanel, StateWithDispatch } from "./button-panel";

export function SwatchPanel(props: StateWithDispatch) {
	return <div className="swatchPanel">
		<ButtonPanel {...props} />
	</div>;
};
