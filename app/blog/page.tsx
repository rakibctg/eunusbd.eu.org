import { Metadata } from 'next';
import Blog from '@/app/modules/blog';
import Container from '@/app/common/components/elements/Container';
import PageHeading from '@/app/common/components/elements/PageHeading';
import axios from 'axios';
import { BlogItem } from '../common/types/blog';

export const metadata: Metadata = {
  title: 'Blog - Bayu Setiawan',
  description: 'Awesome portfolio',
};

const PAGE_TITLE = 'Blog';
const PAGE_DESCRIPTION =
  'Exploring the world of code, creativity, and constant learning.';

export default async function BlogPage() {
  const blogs = await getBlogData();
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Blog blogs={blogs} />
      </Container>
    </>
  );
}

async function getBlogData(): Promise<BlogItem[]> {
  const DEV_TO_URL = 'https://dev.to/api/articles?username=codebayu';
  const response = await axios.get(DEV_TO_URL);
  if (response?.status !== 200) return {} as BlogItem[];
  return response.data;
}
