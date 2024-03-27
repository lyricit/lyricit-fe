import RadioBtn from '@/components/common/Radio/RadioBtn';
import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
const RoomCreateModal = () => {
  const [selectedPersonCnt, setSelectedPersonCnt] = useState('2');
  // 선택된 라운드 수를 관리하는 상태
  const [selectedRoundLimit, setSelectedRoundLimit] = useState('3');
  const [selectTimeLimit, setSelectTimeLimit] = useState('120');
  // 라디오 버튼 옵션
  const playerOptions = [
    { value: '2', label: '2', width: 'w-[3rem]' },
    { value: '3', label: '3', width: 'w-[3rem]' },
    { value: '4', label: '4', width: 'w-[3rem]' },
    { value: '5', label: '5', width: 'w-[3rem]' },
    { value: '6', label: '6', width: 'w-[3rem]' },
  ];
  const roundOptions = [
    { value: '3', label: '3', width: 'w-[3rem]' },
    { value: '5', label: '5', width: 'w-[3rem]' },
    { value: '7', label: '7', width: 'w-[3rem]' },
    { value: '9', label: '9', width: 'w-[3rem]' },
  ];
  const timeOptions = [
    { value: '120', label: '120초' },
    { value: '180', label: '180초' },
    { value: '240', label: '240초' },
  ];
  return (
    <div className="w-[350px] rounded-[20px] border-2 border-black bg-neutral-400 bg-opacity-10 bg-clip-padding p-5 backdrop-blur-sm backdrop-filter">
      <div className="relative m-auto">
        <h1 className="flex w-full justify-center p-2 font-bold text-xl">
          방 만들기
        </h1>
        <button
          className="absolute top-1/2 right-0 translate-y-[-50%] rounded-full bg-rose-600 p-1"
          type="button"
        >
          <IoIosClose color="white" size="16px" />
        </button>
      </div>

      <form className="mt-5 flex w-[300px] flex-col items-start justify-start gap-2 py-1">
        <div className="flex w-full items-center justify-center gap-2.5">
          <p className="w-[60px] font-semibold text-xs">방 제목</p>

          <input
            type="text"
            id="title"
            className="relative h-[25px] w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 text-sm"
            required
          />
        </div>
        <div className="flex w-full items-center justify-center gap-2.5">
          <p className="w-[60px] font-semibold text-xs">비밀번호 </p>
          <input
            type="password"
            id="password"
            className="relative h-[25px] w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 text-sm"
          />
        </div>
        <div className="inline-flex h-[25px] w-full items-center justify-start gap-2.5">
          <p className="w-[60px] font-semibold text-xs leading-none">
            플레이어 수
          </p>
          <RadioBtn
            options={playerOptions}
            name="playerCount"
            selectedValue={selectedPersonCnt}
            onChange={(value) => setSelectedPersonCnt(value)}
          />
        </div>
        <div className="inline-flex h-[25px] w-full items-center justify-start gap-2.5">
          <p className="w-[60px] font-semibold text-xs">라운드 수</p>
          <RadioBtn
            options={roundOptions}
            name="roundLimit"
            selectedValue={selectedRoundLimit}
            onChange={(value) => setSelectedRoundLimit(value)}
          />
        </div>
        <div className="inline-flex h-[25px] w-full items-center justify-start gap-2.5">
          <p className="w-[60px] font-semibold text-xs">라운드 시간</p>
          <RadioBtn
            options={timeOptions}
            name="selectTimeLimit"
            selectedValue={selectTimeLimit}
            onChange={(value) => setSelectTimeLimit(value)}
          />
        </div>
        <div className="mt-3 flex w-full justify-end">
          <button
            type="button"
            className="rounded border border-neutral-800 bg-transparent px-4 py-2 font-semibold text-sm hover:bg-neutral-200"
          >
            확인
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoomCreateModal;
