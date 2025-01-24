import { headers } from "next/headers";
import Image from "next/image";
import { db } from "~/server/db";
import { getImages } from "~/server/queries";

// export const dynamic = "force-dynamic";

export default async function Images() {
  const images = await getImages();

  return (
    <main>
      <div className="flex flex-row w-full justify-center gap-4 ">
        {images.map((image) => (
          <div key={image.id} className="h-48 w-48 flex flex-col relative">
            <Image    
              src={image.url}
              alt={image.name}
              width="0"
              height="0"
              sizes="100%"
              className="w-full rounded-md"
              priority={true}
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
