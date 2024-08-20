// app/page.tsx
import dynamic from 'next/dynamic';

// Dynamically import the Card component with { ssr: false } to ensure it's client-side only
const Card = dynamic(() => import('./Page/Card'), { ssr: false });

const Page = () => {
  return (
    <div className='py-4'>
      <div className='mt-3'>
        <Card />
      </div>
    </div>
  );
};

export default Page;
