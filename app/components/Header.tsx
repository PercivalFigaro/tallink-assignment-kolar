import Image from 'next/image';

const Header = () => {
  return (
    <div className="p-4">
      <Image
        src="/tallink.svg"
        alt="Tallink company logo"
        width={300}
        height={400}
        priority
      />
    </div>
  );
};

export default Header;
