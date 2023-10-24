import React, { useEffect, useState } from 'react';
import { IgApiClient } from 'instagram-private-api';

function InstagramCarousel() {
  const [photoURLs, setPhotoURLs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function fetchInstagramPhotos() {
    const ig = new IgApiClient();
    await ig.state.generateDevice("grupo3projectnumen");
    const auth = await ig.account.login("grupo3projectnumen", "NumenGrupo3");

    const userFeed = ig.feed.user(auth.pk);
    const feedItems = await userFeed.items();

    const filteredPhotos = feedItems
      .filter((item) => item.media_type === 1)
      .slice(0, 10)
      .map((photo) => photo.image_versions2.candidates[0].url);

    return filteredPhotos;
  }

  useEffect(() => {
    async function mainIg() {
      const photos = await fetchInstagramPhotos();
      setPhotoURLs(photos);

      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 3000);

      return () => clearInterval(intervalId);
    }

    mainIg();
  }, []);

  return (
    <div>
      <div id="image-carousel">
        <img
          src={photoURLs[currentIndex]}
          alt="Imagen de Instagram"
        />
      </div>
    </div>
  );
}



export default InstagramCarousel;
