import Image from 'next/image';

const Header = () => {
  return (
    <div className="p-4">
      <Image
        src="/tallink.svg"
        alt="Tallink company logo"
        width="0"
        height="0"
        className="w-[320px] h-auto"
        priority
      />
    </div>
  );
};

export default Header;
