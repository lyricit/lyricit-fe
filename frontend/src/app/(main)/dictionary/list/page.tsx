import TrackSearchBox from '@/components/track/TrackSearchBox';
import TrackSearchButton from '@/components/track/TrackSearchButton';

export default function Page() {
  return (
    <div className="inline-flex h-[567px] w-[1200px] flex-col items-center justify-center gap-5 rounded-[20px] border-2 border-white bg-black bg-opacity-30 px-[13px] py-20 backdrop-blur-[20px]">
      <form className="inline-flex h-[46px] w-[1174px] items-start justify-center gap-5 px-[200px]">
        <TrackSearchBox placeholder="가사를 입력하세요" />
        <TrackSearchButton />
      </form>
      <div className="-webkit-scrollbar-display-none inline-flex w-[810px] grow-shrink flex-col items-start justify-start gap-3.5 overflow-hidden overflow-y-scroll p-2.5">
        {/* TODO: TrackList Component 배치 */}
      </div>
    </div>
  );
}
