'use client';
// announce =>

function GameChat({
  announce,
  nickname,
  correct,
}: { announce: boolean; nickname: string; correct: boolean }) {
  if (announce) {
    return (
      <div className="w-[100%] bg-[#FFE4A8]">
        📣 <b>{nickname}</b>님이 입력한 가사가 있어요! 제한 시간 안에 제목과
        가수를 입력하세요!
      </div>
    );
  }

  if (correct) {
    return (
      <div className="w-[100%] bg-[#FFE4A8]">
        📣 <b>{nickname}</b>님이 정답을 맞추셨습니다! 모두 축하해 주세요!
      </div>
    );
  }
  if (!correct) {
    return (
      <div className="w-[100%] bg-[#FFE4A8]">
        📣 <b>{nickname}</b>님 오답! 다음 턴에 도전해 보세요!
      </div>
    );
  }
}

export default GameChat;
