import { Suspense } from "react";
import ImageFromDB from "./ImageFromDB";

export default function FullPageImage(props: { id: number }) {
	return (
		<div className="flex w-full h-full justify-center items-center">
			<div className="flex w-1/2 justify-center">
				<Suspense fallback={
					<div className="flex flex-col h-full aspect-square justify-center items-center text-white">
						<h2 className="text-center items-center">Loading...</h2>
					</div>
				}>
					<ImageFromDB id={props.id} className="rounded-xl" />
				</Suspense>
			</div>
		</div>
	);
}