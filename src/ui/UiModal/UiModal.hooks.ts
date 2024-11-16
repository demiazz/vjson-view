import { CSSProperties } from "react";

import {
	FloatingContext,
	useDismiss,
	useFloating,
	useInteractions,
	useRole,
	useTransitionStyles,
} from "@floating-ui/react";

type Result = {
	isMounted: boolean;
	context: FloatingContext;
	style: CSSProperties;

	modalRef: (element: Maybe<HTMLElement>) => void;
	getModalProps: () => Record<string, unknown>;
};

export function useModal(isOpened: boolean, onClose: () => void): Result {
	const { context, refs } = useFloating({
		open: isOpened,

		onOpenChange() {
			onClose();
		},
	});

	const dismiss = useDismiss(context, {
		escapeKey: true,
		outsidePress: false,
		referencePress: false,
	});
	const role = useRole(context);

	const { isMounted, styles } = useTransitionStyles(context);

	const { getFloatingProps } = useInteractions([dismiss, role]);

	return {
		isMounted,

		context,

		modalRef: refs.setFloating,
		getModalProps: getFloatingProps,

		style: styles,
	};
}
