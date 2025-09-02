import { useState } from "react";

interface LiteYouTubeEmbedProps {
  videoId: string;
  className?: string;
  title?: string;
}

const LiteYouTubeEmbed: React.FC<LiteYouTubeEmbedProps> = ({
  videoId,
  className = "",
  title = "YouTube Video",
}) => {
  const [isIframeLoaded, setIframeLoaded] = useState(false);

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div
      onClick={() => setIframeLoaded(true)}
      className={`relative w-full overflow-hidden pt-[60%] rounded-xl shadow-lg bg-black cursor-pointer group ${className}`}
    >
      {!isIframeLoaded ? (
        <>
          <img
            src={thumbnailUrl}
            alt={`Miniatura videa ${title}`}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="w-8 h-8 sm:w-10 sm:h-10 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default LiteYouTubeEmbed;
