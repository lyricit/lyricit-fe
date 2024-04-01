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
    <div className="inline-flex h-[381px] w-[100%] flex-col items-start justify-start gap-2.5 px-5">
      <article
        className="h-[1130px] self-stretch whitespace-pre-wrap text-white"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: processedLyric }}
      />
    </div>
  );
}
