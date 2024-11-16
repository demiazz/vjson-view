export function saveFile(name: string, content: JSONValue): void {
	const blob = new Blob([JSON.stringify(content)], {
		type: "application/json",
	});

	const url = URL.createObjectURL(blob);

	const a = document.createElement("a");

	a.href = url;
	a.download = name;

	const handleClick = () => {
		// NOTE: Release URl after 3 minutes. Actually, we don't need more than
		//       second. But issue says about unknown size of file, maybe 100Mb?
		//       How much time required to download such file?
		//
		//       Another problem is user can close a browser tab, and URL will be
		//       released with `Window` object.
		//
		//       If we want to avoid that problem, then we should say about it to
		//       user.
		//
		//       While we don't know real range of file sizes and range of problem,
		//       let's use that timeout.
		setTimeout(
			() => {
				URL.revokeObjectURL(url);

				a.removeEventListener("click", handleClick);
			},
			3 * 60 * 1000,
		);
	};

	a.addEventListener("click", handleClick);

	a.click();
}
