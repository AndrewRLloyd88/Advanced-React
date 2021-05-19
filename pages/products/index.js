import { useRouter } from 'next/router';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

export default function ProductPage() {
  const { query } = useRouter();
  console.log(query);
  const page = parseInt(query.page);
  return (
    <div>
      <Pagination page={page || 1} />
      <Products />
      <Pagination page={page || 1} />
    </div>
  );
}
