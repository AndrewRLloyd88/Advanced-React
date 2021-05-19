import Products from '../components/Products';
import Pagination from '../components/Pagination';

export default function ProductPage() {
  return (
    <div>
      <Pagination page={10} />
      <Products />
      <Pagination page={1} />
    </div>
  );
}
