import Button from "./Button";

export default function Footer() {
	return (
		<footer class="w-full max-w-2xl mx-auto py-2 border-black border-t">
			<Button
				onClick={() => {
					window.scrollTo({ top: 0, behavior: "smooth" });
				}}
			>
				Back to top
			</Button>
		</footer>
	);
}
