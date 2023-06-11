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
			class={`border border-black hover:bg-black/20 px-2 shadow-[1px_1px_0px_0px_#000] ${classProp}`}
		/>
	);
}
