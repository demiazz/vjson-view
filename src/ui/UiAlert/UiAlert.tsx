import { UiModal } from "@/ui/UiModal";

import { useModal } from "./UiAlert.hooks";

import * as styles from "./UiAlert.css";

export const UiAlert = () => {
	const { isOpened, actions, message, onClose, onClosed } = useModal();

	return (
		<UiModal
			actions={actions}
			isOpened={isOpened}
			onClose={onClose}
			onClosed={onClosed}
			title="Error"
		>
			<p className={styles.root}>{message}</p>
		</UiModal>
	);
};
