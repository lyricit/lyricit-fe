import Nickname from '../Nickname';

const EmptyRoomProfile = () => {
  return (
    <section className="relative inline-flex h-[200px] w-[180px] flex-col items-center justify-start overflow-clip rounded-[10px] border-2 border-black bg-white pt-2">
      <Nickname nickname={''} />
    </section>
  );
};

export default EmptyRoomProfile;
