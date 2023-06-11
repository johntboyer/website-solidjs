import { A } from "@solidjs/router";
import Button from "./Button";

export default function Navbar() {
	return (
		<header class="w-full flex flex-col items-stretch max-w-2xl mx-auto py-2 border-black border-b">
			<div class="flex justify-between">
				<span class="text-lg underline">johntboyer</span>
			</div>
			<nav class="flex gap-2 items-end">
				<Button as={A} href="/">
					Home
				</Button>
				<Button as={A} href="/about">
					About
				</Button>
				<Button as={A} href="/code">
					Code
				</Button>
				{/* Todo environment var from build */}
				<p class="ml-auto border border-black px-2 rounded bg-orange-400">
					Version: 0.0.0.1
				</p>
			</nav>
		</header>
	);
}
