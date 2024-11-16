import { FC } from "react";

import { UiButton } from "@/ui/UiButton";
import { UiIndicator } from "@/ui/UiIndicator";

import * as styles from "./Header.css";

type Props = {
	isChanged: boolean;
	isPresent: boolean;

	onUpload: () => void;
	onDownload: () => void;
};

export const Header: FC<Props> = ({
	isChanged,
	isPresent,
	onUpload,
	onDownload,
}) => {
	return (
		<div className={styles.root}>
			{isChanged && <UiIndicator>Has changes</UiIndicator>}
			<div className={styles.actions}>
				<UiButton onClick={onUpload} variant="primary">
					Upload
				</UiButton>
				<UiButton isDisabled={!isPresent} onClick={onDownload} variant="danger">
					Download
				</UiButton>
			</div>
		</div>
	);
};
