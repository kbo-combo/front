import styled from "styled-components";

import default_image from "@assets/default-player.png";
import {getPlayerImageUrl} from "@/function/utils.ts";

interface PlayerImageProps {
  url: string | null;
  alt?: string;
  fallbackSrc?: string;
}

export const PlayerImage = ({ url, alt = "선수 이미지", fallbackSrc = default_image }: PlayerImageProps) => {
  const imageUrl = getPlayerImageUrl(url, fallbackSrc);

  return (
      <StyledPlayerImage
          src={imageUrl}
          alt={alt}
          onError={(e) => {
            e.currentTarget.src = fallbackSrc;
          }}
      />
  );
};

const StyledPlayerImage = styled.img`
  width: 6rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
