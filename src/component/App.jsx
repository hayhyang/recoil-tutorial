import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import SearchBox from './SearchBox';
import AnimeList from './AnimeList';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <h1>애니메이션 검색</h1>
      <p>영어 키워드를 입력한 후 엔터를 누르세요</p>
      <RecoilRoot>
        <SearchBox />
        <Suspense fallback={<div>Loading...</div>}>
          <AnimeList />
        </Suspense>
      </RecoilRoot>
    </div>
  );
}
