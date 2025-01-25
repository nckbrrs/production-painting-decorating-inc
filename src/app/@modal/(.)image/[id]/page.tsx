import { Modal } from "./modal";
import FullPageImage from "~/components/FullPageImage";

export default async function ImageModal({ params }: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const idAsNumber = Number(id);
	if (Number.isNaN(idAsNumber)) throw new Error("Invalid image id")

	return (
		<Modal>
			<FullPageImage id={idAsNumber} />
		</Modal>
	);
}