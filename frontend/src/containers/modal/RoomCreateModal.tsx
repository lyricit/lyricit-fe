'use client';

import RadioBtn from '@/components/common/Radio/RadioBtn';
import { useUserStore } from '@/stores/user';
import { zodResolver } from '@hookform/resolvers/zod';
import type React from 'react';
import type { MouseEventHandler } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IoIosClose } from 'react-icons/io';
import { z } from 'zod';
import ModalContainer from './ModalContainer';

const formSchema = z.object({
  name: z
    .string()
    .min(2, '너무 짧아요! 2글자 이상 입력해 주세요.')
    .max(20, '너무 길어요! 20자 미만으로 입력해 주세요.'),
  password: z
    .string()
    .min(4, '너무 짧아요! 4자리 이상 입력해 주세요.')
    .max(20, '너무 길어요! 20자리 미만으로 입력해 주세요.')
    .optional()
    .or(z.literal('')),
  playerLimit: z.union([
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
  ]),
  roundLimit: z.union([z.literal(3), z.literal(5), z.literal(7), z.literal(9)]),
  roundTime: z.union([z.literal(120), z.literal(180), z.literal(240)]),
});

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

const RoomCreateModal = ({ onClick }: { onClick: MouseEventHandler }) => {
  const id = useUserStore((state) => state.id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    const result = await fetch('https://api-dev.lyricit.site/v1/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        memberId: id,
      },
      body: JSON.stringify(values),
    }).then((res) => res.json());

    console.log(result);
  };

  return (
    <ModalContainer onClick={onClick}>
      <section
        onClick={(e) => e.stopPropagation()}
        className="w-[350px] rounded-[20px] border-2 border-black bg-neutral-400 bg-opacity-10 bg-clip-padding p-5 backdrop-blur-sm backdrop-filter"
      >
        <div className="relative m-auto">
          <h1 className="flex w-full justify-center p-2 font-bold text-xl">
            방 만들기
          </h1>
          <button
            type="button"
            onClick={onClick}
            className="absolute top-1/2 right-0 translate-y-[-50%] rounded-full bg-rose-600 p-1 hover:bg-rose-700"
          >
            <IoIosClose color="white" size="16px" />
          </button>
        </div>

        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-5 flex w-[300px] flex-col items-start justify-start py-1"
        >
          <div className="flex w-full items-center justify-between gap-2.5">
            <p className="font-semibold text-xs">방 제목</p>
            <input
              type="text"
              id="name"
              className="relative h-[25px] w-[240px] rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 text-sm"
              {...form.register('name')}
            />
          </div>
          <div className="h-4 ps-[60px]">
            {form.formState.errors.name && (
              <p className="text-red-500 text-xs">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>
          <div className="flex w-full items-center justify-between gap-2.5">
            <p className="font-semibold text-xs">비밀번호 </p>
            <input
              type="password"
              id="password"
              className="relative h-[25px] w-[240px] rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 text-sm"
              {...form.register('password')}
            />
          </div>
          <div className="h-4 ps-[60px]">
            {form.formState.errors.password && (
              <p className="text-red-500 text-xs">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>
          <div className="mb-4 inline-flex h-[25px] w-full items-center justify-start gap-2.5">
            <p className="w-[60px] font-semibold text-xs leading-none">
              플레이어 수
            </p>
            <Controller
              control={form.control}
              name="playerLimit"
              defaultValue={2}
              render={({ field }) => (
                <RadioBtn
                  options={playerOptions}
                  name="playerLimit"
                  selectedValue={field.value.toString()}
                  onChange={(value) => field.onChange(Number.parseInt(value))}
                />
              )}
            />
          </div>
          <div className="mb-4 inline-flex h-[25px] w-full items-center justify-start gap-2.5">
            <p className="w-[60px] font-semibold text-xs">라운드 수</p>
            <Controller
              control={form.control}
              name="roundLimit"
              defaultValue={3}
              render={({ field }) => (
                <RadioBtn
                  options={roundOptions}
                  name="roundLimit"
                  selectedValue={field.value.toString()}
                  onChange={(value) => field.onChange(Number.parseInt(value))}
                />
              )}
            />
          </div>
          <div className="mb-4 inline-flex h-[25px] w-full items-center justify-start gap-2.5">
            <p className="w-[60px] font-semibold text-xs">라운드 시간</p>
            <Controller
              control={form.control}
              name="roundTime"
              defaultValue={120}
              render={({ field }) => (
                <RadioBtn
                  options={timeOptions}
                  name="roundTime"
                  selectedValue={field.value.toString()}
                  onChange={(value) => field.onChange(Number.parseInt(value))}
                />
              )}
            />
          </div>
          <div className="flex w-full justify-end">
            <button
              type="submit"
              className="rounded border border-neutral-800 bg-transparent px-4 py-2 font-semibold text-sm hover:bg-neutral-200"
            >
              확인
            </button>
          </div>
        </form>
      </section>
    </ModalContainer>
  );
};

export default RoomCreateModal;
