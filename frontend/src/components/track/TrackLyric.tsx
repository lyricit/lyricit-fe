export default function TrackLyric({
  lyric,
  keyword,
}: { lyric: string; keyword: string }) {
  // 키워드 검사를 위해 정규식 사용
  const regex = new RegExp(`(${keyword})`, 'gi');

  // 키워드와 일치하는 부분을 <span> 태그로 래핑
  const processedLyric = lyric.replace(
    regex,
    '<span class="text-primary font-semibold">$1</span>',
  );

  return (
    <div className="w-[510px] h-[381px] px-5 flex-col justify-start items-start gap-2.5 inline-flex">
      <article
        className="self-stretch h-[1130px] text-white whitespace-pre-wrap"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: processedLyric }}
      />
    </div>
  );
}
