import { getPosts } from '@/app/utils/utils';
import { baseURL } from '@/app/resources';
import { routing } from '@/i18n/routing';

export default async function sitemap() {
    const locales = routing.locales; // e.g., ['en', 'es', 'fr']

    // Ensure baseURL is absolute
    const absoluteBaseURL = baseURL.startsWith('http') ? baseURL : `https://${baseURL}`;

    // Generate blog posts URLs
    let blogs = locales.flatMap((locale) => {
        try {
            return getPosts(['src', 'app', locale, 'blog', 'posts']).map((post) => ({
                url: `${absoluteBaseURL}/${locale}/blog/${post.slug}`,
                lastModified: post.metadata.publishedAt || new Date().toISOString().split('T')[0],
            }));
        } catch (error) {
            console.error(`Error fetching blog posts for locale '${locale}':`, error);
            return [];
        }
    });

    // Generate work/project URLs
    let works = locales.flatMap((locale) => {
        try {
            return getPosts(['src', 'app', locale, 'work', 'projects']).map((post) => ({
                url: `${absoluteBaseURL}/${locale}/work/${post.slug}`,
                lastModified: post.metadata.publishedAt || new Date().toISOString().split('T')[0],
            }));
        } catch (error) {
            console.error(`Error fetching work projects for locale '${locale}':`, error);
            return [];
        }
    });

    // Static routes (e.g., home, blog, work)
    let routes = locales.flatMap((locale) =>
        ['', '/blog', '/work'].map((route) => ({
            url: `${absoluteBaseURL}/${locale}${route}`,
            lastModified: new Date().toISOString().split('T')[0],
        }))
    );

    // Combine and return the full sitemap
    return [...routes, ...blogs, ...works];
}
