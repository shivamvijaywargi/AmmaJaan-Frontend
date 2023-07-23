import Image from 'next/image';
import Banner from 'public/banner.png';

export default function Home() {
  return (
    <section className="px-2 md:px-5 mx-auto max-w-7xl">
      {/* Banner image */}
      <Image src={Banner} alt="AmmaJaan Banner" />

      {/* Products carousel */}

      {/* Featured Product */}
    </section>
  );
}
