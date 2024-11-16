import { FC, PropsWithChildren } from "react";

import {
	FloatingFocusManager,
	FloatingOverlay,
	FloatingPortal,
} from "@floating-ui/react";

import { Dialog } from "./UiModal.Dialog";

import { useModal as useDialog } from "./UiModal.hooks";
import { Action } from "./UiModal.types";

import * as styles from "./UiModal.css";

type Props = PropsWithChildren<{
	actions?: Action[];
	isOpened: boolean;
	onClose: () => void;
	title: string;
}>;

export const UiModal: FC<Props> = ({ actions, isOpened, onClose, title }) => {
	const { context, isMounted, modalRef, getModalProps, style } = useDialog(
		isOpened,
		onClose,
	);

	if (!isMounted) {
		return null;
	}

	return (
		<FloatingPortal>
			<FloatingOverlay className={styles.overlay} lockScroll style={style}>
				<FloatingFocusManager context={context} modal>
					<Dialog
						actions={actions}
						getProps={getModalProps}
						onClose={onClose}
						ref={modalRef}
						style={style}
						title={title}
					/>
				</FloatingFocusManager>
			</FloatingOverlay>
		</FloatingPortal>
	);
};
