import React from 'react';
import styled from 'styled-components';
import PlayListCard from './PlayListCard';
import Carousel from 'react-elastic-carousel';
import Playlist from '../models/Playlist';

interface Props {
  playLists: Array<Playlist>;
  isCarousel: boolean;
  className?: string;
  handleCardClick?: Function;
}

const breakPointsCarousel = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 850, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 5, itemsToScroll: 1 },
  { width: 1750, itemsToShow: 6, itemsToScroll: 1 },
];

const ContainerCarousel = styled.div`
  .rec-dot {
    box-shadow: 0 0 1px 2px #1292d3;
    height: 12px;
  }

  .rec-dot_active {
    background-color: #1292d3;
  }
`;

const ContainerPlayLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const toggleLike = () => {
  console.log('Test toggleLike');
};

const PlayListCardList: React.FC<Props> = ({
  playLists,
  isCarousel,
  className,
  handleCardClick,
}) => {
  return (
    <>
      {isCarousel ? (
        <ContainerCarousel className={className}>
          <Carousel
            breakPoints={breakPointsCarousel}
            itemPadding={[0, 10, 0, 0]}
            showArrows={false}
          >
            {playLists.map((list) => (
              <PlayListCard
                playList={list}
                toggleLike={toggleLike}
                handleClick={handleCardClick}
              />
            ))}
          </Carousel>
        </ContainerCarousel>
      ) : (
        <ContainerPlayLists className={className}>
          {playLists.map((list) => (
            <PlayListCard
              playList={list}
              toggleLike={toggleLike}
              handleClick={handleCardClick}
            />
          ))}
        </ContainerPlayLists>
      )}
    </>
  );
};

export default PlayListCardList;
