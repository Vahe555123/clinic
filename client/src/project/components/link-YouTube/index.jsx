import React from 'react';

export const YouTubeEmbed = ({ url }) => {
  const embedUrl = getYouTubeEmbedUrl(url);

  return (
    <iframe
      src={embedUrl}
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ width: "100%", height: "300px", marginTop: "40px" }}
      onError={(e) => {
        console.log("Ошибка загрузки iframe", e);
      }}
    />

  );
};

const getYouTubeEmbedUrl = (url) => {
  const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
  return `https://www.youtube.com/embed/${videoId}`;
};

