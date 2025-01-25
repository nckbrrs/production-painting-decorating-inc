import { getImage } from "~/server/queries";

export default async function ImageFromDB(props: { id: number, className: string }) {
	const image = await getImage(props.id);

	return (
		<img src={image.url} className={props.className} />
	);
}