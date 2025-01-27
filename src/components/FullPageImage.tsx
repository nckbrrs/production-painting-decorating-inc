import { Suspense } from "react";
import ImageFromDB from "./ImageFromDB";
import { Button } from "./ui/button";
import { deleteImage } from "~/server/queries";

export default function FullPageImage(props: { id: number }) {
	return (
		<div className="flex flex-col w-full h-full justify-center items-center">
			<Suspense fallback={suspenseFallback}>
				<div className="flex w-1/2 justify-center">
					<ImageFromDB id={props.id} className="rounded-xl" />
				</div>
				<div className="m-4">
					<form action={async () => {
						"use server";
						await deleteImage(props.id)
					}}>
						<Button type="submit" variant={"destructive"}>Delete</Button>
					</form>
				</div>
			</Suspense>
		</div >
	);
}

const suspenseFallback = (
	<div className="flex flex-col h-full aspect-square justify-center items-center text-white">
		<h2 className="text-center items-center">Loading...</h2>
	</div>
)