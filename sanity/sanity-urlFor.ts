import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
   projectId: "6e7plt23",
   dataset: "production",
   apiVersion: "2023-01-01",
});
const builder = imageUrlBuilder(client);

export function urlFor(source: object) {
   return builder.image(source);
}
