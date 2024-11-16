import { FC, PropsWithChildren, RefObject } from "react";

import {
	FloatingFocusManager,
	FloatingOverlay,
	FloatingPortal,
} from "@floating-ui/react";

import { useWatch } from "@/hooks/useWatch";

import { Dialog } from "./UiModal.Dialog";

import { useModal as useDialog } from "./UiModal.hooks";
import { Action } from "./UiModal.types";

import * as styles from "./UiModal.css";

type Props = PropsWithChildren<{
	actions?: Action[];
	initialFocus?: RefObject<HTMLElement>;
	isOpened: boolean;
	onClose: () => void;
	onClosed?: () => void;
	title: string;
}>;

export const UiModal: FC<Props> = ({
	actions,
	children,
	initialFocus,
	isOpened,
	onClose,
	onClosed,
	title,
}) => {
	const { context, isMounted, modalRef, getModalProps, style } = useDialog(
		isOpened,
		onClose,
	);

	useWatch(
		isMounted,
		(_, current) => {
			if (!current) {
				onClosed?.();
			}
		},
		[onClosed],
	);

	if (!isMounted) {
		return null;
	}

	return (
		<FloatingPortal>
			<FloatingOverlay className={styles.overlay} lockScroll style={style}>
				<FloatingFocusManager
					context={context}
					initialFocus={initialFocus}
					modal
				>
					<Dialog
						actions={actions}
						getProps={getModalProps}
						onClose={onClose}
						ref={modalRef}
						style={style}
						title={title}
					>
						{children}
					</Dialog>
				</FloatingFocusManager>
			</FloatingOverlay>
		</FloatingPortal>
	);
};
