import { createUploadthing, UTFiles, type FileRouter } from "uploadthing/next";
import { z } from "zod";

const f = createUploadthing();

export const ourFileRouter = {
	imageUploader: f({
		pdf: {
			maxFileSize: "32MB",
			maxFileCount: 1
		}
	})
		.input(
			z.object({
				name: z.string(),
				email: z.string(),
				phone: z.string()
			})
		)
		.middleware(async ({ input, files }) => {
			return {
				[UTFiles]: [
					{
						...files[0],
						name: `${input.name} (${input.email})`
					}
				]
			};
		})
		.onUploadComplete(async ({ metadata, file }) => {
			console.log("file url", file.ufsUrl);
			return { uploadedUrl: file.ufsUrl };
		})
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
