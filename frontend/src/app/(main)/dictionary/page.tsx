'use client';

import TrackItem from '@/components/track/TrackItem';
import TrackList from '@/components/track/TrackList';
import TrackLyric from '@/components/track/TrackLyric';
import TrackSearchBox from '@/components/track/TrackSearchBox';
import TrackSearchButton from '@/components/track/TrackSearchButton';

import type { TrackProps } from '@/types';
import type { TrackDetailProps } from '@/types/track';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
export default function Page() {
  const [items, setItems] = useState<TrackProps[]>([]);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [detailTrack, setDetailTrack] = useState<TrackDetailProps>({
    id: '',
    title: '',
    artist: '',
    imageUrl: '',
    lyrics: '',
  });
  const [inputValue, setInputValue] = useState<string>('');
  const [keywords, setKeywords] = useState<string>('심장');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // 입력값을 상태에 저장
  };
  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    // fetch 넣기
    e.preventDefault(); // 폼의 기본 제출 동작을 방지
    setKeywords(inputValue);
    const response = await fetch(
      `https://api-dev.lyricit.site/v1/dictionary/search?keyword=${inputValue}`,
    );
    const data = await response.json();
    setItems(data);
  };
  const showDetailPage = async (id: string) => {
    const response = await fetch(
      `https://api-dev.lyricit.site/v1/dictionary/detail/${id}`,
    );
    const data = await response.json();
    setShowDetail(true);
    console.log(data);
    setDetailTrack(data);
  };
  return (
    <div className="flex w-[100%] items-center justify-evenly">
      <div className={'flex w-full flex-col items-center px-10'}>
        <form
          onSubmit={handleSubmit}
          className="inline-flex h-[46px] w-[100%] px-10"
        >
          <TrackSearchBox
            placeholder="가사를 입력하세요"
            onChange={handleInputChange}
          />
          <TrackSearchButton />
        </form>
        <div className="-webkit-scrollbar-display-none mt-5 inline-flex h-[25rem] w-[100%] flex-col gap-3.5 overflow-hidden overflow-y-scroll p-2.5">
          <TrackList items={items} showDetailPage={showDetailPage} />
        </div>
      </div>
      {showDetail && items.length > 0 && (
        <div className="flex w-[100%] flex-col p-2">
          <div className="mb-3 w-[100%]">
            <TrackItem
              id={detailTrack.id}
              imageUrl={detailTrack.imageUrl}
              title={detailTrack.title}
              artist={detailTrack.artist}
              key={`${detailTrack.title} - ${detailTrack.artist}`}
            />
          </div>
          <div className="-webkit-scrollbar-display-none overflow-hidden overflow-y-scroll">
            <TrackLyric
              lyric={detailTrack.lyrics.replace('\n\n', '\n')}
              keyword={keywords}
            />
          </div>
        </div>
      )}
    </div>
  );
}
