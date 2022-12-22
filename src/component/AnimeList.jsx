import React from 'react';
import { useRecoilValue } from 'recoil';
import { animeList } from '../state';

function AnimeItem({ image_url, title }) {
  return (
    <figure className="anime-item">
      <img src={image_url} alt={title} />
      <figcaption title={title}>{title}</figcaption>
    </figure>
  );
}

export default function AnimeList() {
  const list = useRecoilValue(animeList);
  console.log('list', list);

  return (
    <div className="anime-list">
      {list.map((item) => (
        <AnimeItem key={item.mal_id} {...item} />
      ))}
    </div>
  );
}
