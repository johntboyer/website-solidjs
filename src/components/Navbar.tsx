import { A } from "@solidjs/router";
import Button from "./Button";

export default function Navbar() {
	return (
		<header class="w-full flex flex-col items-stretch max-w-2xl mx-auto py-2 border-black border-b">
			<div class="flex justify-between">
				<span class="text-lg underline font-serif">johntboyer</span>
			</div>
			<nav class="flex gap-2 items-end">
				<Button as={A} href="/">
					Home
				</Button>
				<Button as={A} href="/articles">
					Articles
				</Button>
				<Button as="a" href="https://github.com/johntboyer">
					My GitHub »
				</Button>
				{/* Todo environment var from build */}
				<span class="ml-auto border border-black px-2 shadow-[1px_1px_0px_0px_#000] bg-orange-400">
					Version: 0.0.0.1
				</span>
			</nav>
		</header>
	);
}
