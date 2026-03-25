import { MetadataRoute } from 'next';
import { INVENTORY } from '../constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.frattinauto.it'; // Placeholder based on image URLs in constants.ts

    // Generazione pagine statiche
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/chi-sono`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/showroom`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/journal`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
    ];

    /* 
      Se aggiungi pagine dinamiche per l'inventario (es. /showroom/[id]),
      scommenta e adatta questo codice:
  
      const inventoryRoutes = INVENTORY.map((car) => ({
        url: `${baseUrl}/showroom/${car.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));
    */

    /* 
      Pagine generate in automatico dal blog:
      Questo è lo script per indicizzare tutte le pagine del blog (journal).
      Si connette idealmente al tuo CMS o fetch per prendere i post del blog.
    */

    // // Esempio:
    // const blogPosts = await fetch(process.env.CMS_ENDPOINT).then((res) => res.json());
    // const blogRoutes = blogPosts.map((post) => ({
    //   url: `${baseUrl}/journal/${post.slug}`,
    //   lastModified: new Date(post.updatedAt),
    //   changeFrequency: 'weekly',
    //   priority: 0.7,
    // }));

    return [
        ...staticRoutes,
        // ...inventoryRoutes,
        // ...blogRoutes,
    ];
}
