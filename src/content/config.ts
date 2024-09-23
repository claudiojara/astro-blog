import {defineCollection, reference, z} from 'astro:content'


const blogCollections = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        title:z.string(),
        date:z.date(),
        description:z.string(),
        image:image().refine((img)=> img.width< 1200, {
            message: "Image width must be less than 1200px"
        }),
        author: reference('author'),
        tags:z.array(z.string()),
        isDraft:z.boolean().default(false),
    }),
});

const authorCollections = defineCollection({
    type: 'data',
    schema: ({image}) => z.object({
        name:z.string(),
        avatar:image().refine((img)=> img.width< 1200, {
            message: "Image width must be less than 1200px"
        }),
        twitter:z.string(),
        linkedIn:z.string(),
        github:z.string(),
        bio:z.string(),
        subtitle:z.string(),

    }),
});


export const collections = {
    'blog' :  blogCollections,
    'author' :  authorCollections
}