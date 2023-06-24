import Footer from '@/components/layouts/Footer';
import { SITE_TITLE } from '@/configs/site';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-center items-center flex-col my-8">
        <Link href={'/'} className="flex items-center mb-8">
          <Image
            src={'/ammajaan-logo.svg'}
            alt="AmmaJaan"
            width="20"
            height="20"
            className="mr-2"
          />
          {SITE_TITLE}
        </Link>
        <div className="">{children}</div>
      </div>
      <Footer />
    </>
  );
}
