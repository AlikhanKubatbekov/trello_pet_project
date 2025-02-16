import { Heading } from '@/components/ui/heading/Heading';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE,
};

export default function DashboardPage() {
  return (
    <div>
      <Heading title='Statistics' />
      <p>hello</p>
    </div>
  );
}
