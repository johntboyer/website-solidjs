// @refresh reload
import { Suspense } from "solid-js";
import {
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
} from "solid-start";
import "./root.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Title>johntboyer.com</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body
				class="font-sans subpixel-antialiased"
				style={{ "text-rendering": "optimizeLegibility" }}
			>
				<Suspense>
					<ErrorBoundary>
						<Navbar />
						<main class="max-w-2xl px-1 md:px-0 mx-auto w-full py-8">
							<article class="prose">
								<Routes>
									<FileRoutes />
								</Routes>
							</article>
						</main>
						<Footer />
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
