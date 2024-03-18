import TrackList from '@/components/track/TrackList';
import TrackSearchBox from '@/components/track/TrackSearchBox';
import TrackSearchButton from '@/components/track/TrackSearchButton';

export default function Page() {
  return (
    <div className="w-[1200px] h-[567px] px-[13px] py-20 bg-black bg-opacity-30 rounded-[20px] border-2 border-white backdrop-blur-[20px] flex-col justify-center items-center gap-5 inline-flex">
      <form className="w-[1174px] h-[46px] px-[200px] justify-center items-start gap-5 inline-flex">
        <TrackSearchBox placeholder="가사를 입력하세요" />
        <TrackSearchButton />
      </form>
      <div className="w-[810px] grow-shrink p-2.5 flex-col justify-start items-start gap-3.5 inline-flex overflow-y-scroll overflow-hidden -webkit-scrollbar-display-none">
        {/* TODO: TrackList Component 배치 */}
      </div>
    </div>
  );
}
