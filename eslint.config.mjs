import { configs, defineConfig, presets } from "@tabula/eslint-config";

export default defineConfig({
	build: {
		ignores: ["**/typings/**", "eslint.config.mjs", "vite.config.ts"],
	},

	typescript: {
		files: ["src/**/*.{ts,tsx}"],

		configs: presets.typescript({
			language: {
				globals: ["browser"],
			},

			importX: {
				react: true,
				typescript: true,
			},

			typescript: {
				useTyped: true,

				parserOptions: {
					projectService: true,
				},
			},
		}),
	},

	react: {
		files: ["src/**/*.tsx"],

		configs: [
			presets.react(),
			{
				name: "overrides",

				rules: {
					"react/prop-types": "off",
					"react/forbid-foreign-prop-types": [
						"warn",
						{
							allowInPropTypes: true,
						},
					],
					"react/jsx-no-comment-textnodes": "warn",
					"react/jsx-no-duplicate-props": "warn",
					"react/jsx-no-target-blank": "warn",
					"react/jsx-no-undef": "error",
					"react/jsx-pascal-case": [
						"warn",
						{
							allowAllCaps: true,
							ignore: [],
						},
					],
					"react/jsx-uses-react": "warn",
					"react/jsx-uses-vars": "warn",
					"react/no-danger-with-children": "warn",
					"react/no-direct-mutation-state": "warn",
					"react/no-is-mounted": "warn",
					"react/no-typos": "error",
					"react/require-render-return": "error",
					"react/style-prop-object": "warn",
					"react/jsx-no-useless-fragment": "warn",
					"react-hooks/rules-of-hooks": "error",
					"react-hooks/exhaustive-deps": "warn",
					"react/jsx-props-no-spreading": "off",
					"react/jsx-first-prop-new-line": ["error", "multiline"],
					"react/jsx-indent": ["error", "tab"],
					"react/jsx-indent-props": ["error", "tab"],
					"react/jsx-filename-extension": [
						1,
						{
							extensions: [".js", ".jsx", ".ts", ".tsx", ".mdx"],
						},
					],

					"jsx-a11y/accessible-emoji": "warn",
					"jsx-a11y/alt-text": "warn",
					"jsx-a11y/anchor-has-content": "warn",
					"jsx-a11y/aria-activedescendant-has-tabindex": "warn",
					"jsx-a11y/aria-props": "warn",
					"jsx-a11y/aria-proptypes": "warn",
					"jsx-a11y/aria-role": "warn",
					"jsx-a11y/aria-unsupported-elements": "warn",
					"jsx-a11y/heading-has-content": "warn",
					"jsx-a11y/iframe-has-title": "warn",
					"jsx-a11y/img-redundant-alt": "warn",
					"jsx-a11y/no-access-key": "warn",
					"jsx-a11y/no-distracting-elements": "warn",
					"jsx-a11y/no-redundant-roles": "warn",
					"jsx-a11y/role-has-required-aria-props": "warn",
					"jsx-a11y/role-supports-aria-props": "warn",
					"jsx-a11y/scope": "warn",
					"jsx-a11y/anchor-is-valid": [
						"error",
						{
							components: ["Link"],
							specialLink: ["hrefLeft", "hrefRight", "to"],
							aspects: ["noHref", "invalidHref", "preferButton"],
						},
					],
				},
			},
		],
	},

	reactHooks: {
		files: ["src/**/*.{ts,tsx}"],

		configs: configs.reactHooks(),
	},

	overrides: {
		files: ["src/**/*.{ts,tsx}"],

		rules: {
			"comma-dangle": [
				"error",
				{
					arrays: "always-multiline",
					objects: "always-multiline",
					imports: "always-multiline",
					exports: "always-multiline",
					functions: "ignore",
				},
			],
			"arrow-parens": [
				"error",
				"as-needed",
				{
					requireForBlockBody: true,
				},
			],
			"array-callback-return": "warn",
			"dot-location": ["warn", "property"],
			eqeqeq: ["warn", "smart"],
			"new-parens": "warn",
			"no-caller": "warn",
			"jsx-quotes": ["error", "prefer-double"],
			"no-cond-assign": ["warn", "except-parens"],
			"no-const-assign": "warn",
			"no-control-regex": "warn",
			"no-delete-var": "warn",
			"no-dupe-args": "warn",
			"no-dupe-keys": "warn",
			"no-duplicate-case": "warn",
			"no-empty-character-class": "warn",
			"no-empty-pattern": "warn",
			"no-eval": "warn",
			"no-ex-assign": "warn",
			"no-extend-native": "warn",
			"no-extra-bind": "warn",
			"no-extra-label": "warn",
			"no-fallthrough": "warn",
			"no-func-assign": "warn",
			"no-implied-eval": "warn",
			"no-invalid-regexp": "warn",
			"no-iterator": "warn",
			"no-label-var": "warn",
			"no-labels": [
				"warn",
				{
					allowLoop: true,
					allowSwitch: false,
				},
			],
			"no-lone-blocks": "warn",
			"no-loop-func": "warn",
			"no-mixed-operators": [
				"warn",
				{
					groups: [
						["&", "|", "^", "~", "<<", ">>", ">>>"],
						["==", "!=", "===", "!==", ">", ">=", "<", "<="],
						["&&", "||"],
						["in", "instanceof"],
					],
					allowSamePrecedence: false,
				},
			],
			"no-multi-str": "warn",
			"no-native-reassign": "warn",
			"no-negated-in-lhs": "warn",
			"no-new-func": "warn",
			"no-new-object": "warn",
			"no-new-symbol": "warn",
			"no-new-wrappers": "warn",
			"no-obj-calls": "warn",
			"no-octal": "warn",
			"no-octal-escape": "warn",
			"no-redeclare": "warn",
			"no-regex-spaces": "warn",
			"no-restricted-syntax": ["warn", "WithStatement"],
			"no-script-url": "warn",
			"no-self-assign": "warn",
			"no-self-compare": "warn",
			"no-sequences": "warn",
			"no-shadow-restricted-names": "warn",
			"no-sparse-arrays": "warn",
			"no-template-curly-in-string": "warn",
			"no-this-before-super": "warn",
			"no-throw-literal": "warn",
			"no-restricted-globals": [
				"error",
				"addEventListener",
				"blur",
				"close",
				"closed",
				"confirm",
				"defaultStatus",
				"defaultstatus",
				"event",
				"external",
				"find",
				"focus",
				"frameElement",
				"frames",
				"history",
				"innerHeight",
				"innerWidth",
				"length",
				"location",
				"locationbar",
				"menubar",
				"moveBy",
				"moveTo",
				"name",
				"onblur",
				"onerror",
				"onfocus",
				"onload",
				"onresize",
				"onunload",
				"open",
				"opener",
				"opera",
				"outerHeight",
				"outerWidth",
				"pageXOffset",
				"pageYOffset",
				"parent",
				"print",
				"removeEventListener",
				"resizeBy",
				"resizeTo",
				"screen",
				"screenLeft",
				"screenTop",
				"screenX",
				"screenY",
				"scroll",
				"scrollbars",
				"scrollBy",
				"scrollTo",
				"scrollX",
				"scrollY",
				"self",
				"status",
				"statusbar",
				"stop",
				"toolbar",
				"top",
			],
			"no-unexpected-multiline": "warn",
			"no-unreachable": "warn",
			"no-unused-expressions": "off",
			"no-unused-labels": "warn",
			"no-useless-computed-key": "warn",
			"no-useless-concat": "warn",
			"no-useless-escape": "warn",
			"no-useless-rename": [
				"warn",
				{
					ignoreDestructuring: false,
					ignoreImport: false,
					ignoreExport: false,
				},
			],
			"no-with": "warn",
			"no-whitespace-before-property": "warn",
			"require-yield": "warn",
			"rest-spread-spacing": ["warn", "never"],
			strict: ["warn", "never"],
			"unicode-bom": ["warn", "never"],
			"use-isnan": "warn",
			"valid-typeof": "warn",
			"no-restricted-properties": [
				"error",
				{
					object: "require",
					property: "ensure",
					message:
						"Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
				},
				{
					object: "System",
					property: "import",
					message:
						"Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
				},
			],
			"getter-return": "warn",
			"default-case": "off",
			"no-dupe-class-members": "off",
			"no-undef": "off",
			"no-array-constructor": "off",
			"no-use-before-define": "off",
			"no-unused-vars": "off",
			"no-useless-constructor": "off",
			semi: 2,
			indent: ["error", "tab"],
			"operator-linebreak": 0,
			"no-tabs": 0,
			"no-param-reassign": [
				2,
				{
					props: false,
				},
			],
			"max-len": [
				"error",
				{
					code: 200,
				},
			],
			"implicit-arrow-linebreak": "off",
			"class-methods-use-this": 0,
			"linebreak-style": "off",
			"no-shadow": "off",
			"arrow-body-style": "off",

			"@typescript-eslint/explicit-member-accessibility": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/no-parameter-properties": "off",
			"@typescript-eslint/consistent-type-assertions": "warn",
			"@typescript-eslint/no-array-constructor": "warn",
			"@typescript-eslint/no-namespace": "error",
			"@typescript-eslint/no-use-before-define": [
				"warn",
				{
					functions: false,
					classes: false,
					variables: false,
					typedefs: false,
				},
			],
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					args: "none",
					ignoreRestSiblings: true,
				},
			],
			"@typescript-eslint/no-useless-constructor": "warn",
			"@typescript-eslint/no-unused-expressions": [
				"error",
				{
					allowShortCircuit: true,
					allowTernary: true,
					allowTaggedTemplates: true,
				},
			],

			"import-x/extensions": "off",
			"import-x/order": "off",
			"import-x/first": "error",
			"import-x/no-amd": "error",
			"import-x/no-webpack-loader-syntax": "error",
			"import-x/no-cycle": "off",
			"import-x/no-unresolved": 0,
			"import-x/no-extraneous-dependencies": 0,
			"import-x/no-duplicates": "off",
			"import-x/prefer-default-export": "off",
		},
	},
});
