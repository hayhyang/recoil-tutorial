import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { keywordState } from '../state';

export default function SearchBox() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [value, setValue] = useState('');

  return (
    <div className="search-box">
      <div className="input-container">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && setKeyword(value)}
          placeholder="검색어를 입력하세요."
        />
      </div>
      <div className="state">Query: {keyword}</div>
    </div>
  );
}
