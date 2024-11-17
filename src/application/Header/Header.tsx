import { FC } from "react";

import { ReactComponent as DownloadIcon } from "@/icons/download.svg";
import { ReactComponent as UploadIcon } from "@/icons/upload.svg";

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
				<UiButton icon={UploadIcon} onClick={onUpload} variant="primary">
					Upload
				</UiButton>
				<UiButton
					icon={DownloadIcon}
					isDisabled={!isPresent}
					onClick={onDownload}
					variant="primary"
				>
					Download
				</UiButton>
			</div>
		</div>
	);
};
