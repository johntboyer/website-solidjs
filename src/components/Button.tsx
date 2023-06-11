import { ComponentProps, ParentProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { A } from "solid-start";

type ElementType = typeof A | "button";

type Props<T extends ElementType> = {
	as?: T;
} & ParentProps &
	ComponentProps<T>;

const defaultType = "button";

export default function Button<T extends ElementType = typeof defaultType>({
	as,
	class: classProp,
	...props
}: Props<T>) {
	return (
		<Dynamic
			component={as || defaultType}
			{...(props as ParentProps<ComponentProps<T>>)}
			class={`border border-black rounded hover:bg-black/20 px-2 ${classProp}`}
		/>
	);
}
