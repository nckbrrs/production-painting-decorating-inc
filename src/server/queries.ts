import "server-only";
import { db } from "./db";
import { images } from "./db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import analyticsServerClient from "./analytics";
import posthog from "posthog-js";
import { revalidatePath } from "next/cache";
import { ratelimit } from "./ratelimit";

export async function getImages() {
	const images = await db.query.images.findMany({
		orderBy: (model, { desc }) => desc(model.id)
	});

	return images;
}

export async function getImage(id: number) {
	const image = await db.query.images.findFirst({
		where: eq(images.id, id)
	});

	if (!image) throw new Error("Image not found");

	return image;
}

export async function deleteImage(id: number) {
	const { success } = await ratelimit.limit(posthog.get_distinct_id());
	if (!success) throw new Error("Rate limited!");

	await db.delete(images).where(eq(images.id, id));

	analyticsServerClient.capture({
		distinctId: posthog.get_distinct_id(),
		event: "delete image",
		properties: {
			imageId: id
		}
	});

	revalidatePath("/");
	redirect("/");
}
