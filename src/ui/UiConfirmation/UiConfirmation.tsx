import { UiModal } from "@/ui/UiModal";

import { useModal } from "./UiConfirmation.hooks";

import * as styles from "./UiConfirmation.css";

export const UiConfirmation = () => {
	const { isOpened, actions, title, message, onClose, onClosed } = useModal();

	return (
		<UiModal
			actions={actions}
			isOpened={isOpened}
			onClose={onClose}
			onClosed={onClosed}
			title={title}
		>
			<p className={styles.root}>{message}</p>
		</UiModal>
	);
};
