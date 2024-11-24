"use client";

import Masonry from 'react-masonry-css';
import styles from "./Gallery.module.scss";

const images = Array.from({ length: 30 }, (_, index) => ({
    src: `/images/gallery/img-${String(index + 1).padStart(2, "0")}.jpg`, // Generate file names like img-01.jpg
    alt: `Gallery Image ${index + 1}`,
}));

export default function MasonryGrid() {
    const breakpointColumnsObj = {
        default: 4,
        1440: 3,
        1024: 2,
        560: 1
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={styles.image}
                />
            ))}
        </Masonry>
    );
}
