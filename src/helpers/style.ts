import {
	style,
	globalStyle,
	GlobalStyleRule,
	StyleRule,
} from "@vanilla-extract/css";

export function resetStyle(selector: string, styles: GlobalStyleRule): void {
	globalStyle(selector, {
		"@layer": {
			reset: styles,
		},
	});
}

type ClassNames = string | ClassNames[];
type ComplexStyleRule = StyleRule | Array<StyleRule | ClassNames>;

export function wrapUiStyle(styles: StyleRule): StyleRule {
	return {
		"@layer": {
			ui: styles,
		},
	};
}

export function uiStyle(complex: ComplexStyleRule): string {
	if (!Array.isArray(complex)) {
		return style(wrapUiStyle(complex));
	}

	const wrapped = complex.map((it) => {
		if (typeof it === "string" || Array.isArray(it)) {
			return it;
		}

		return wrapUiStyle(it);
	});

	return style(wrapped);
}
