import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Product Detail Page</h1>
      <h2>You are viewing: <span style={{ color: "darkblue" }}>{productId}</span></h2>
      {/* اطلاعات دقیق محصول رو می‌تونی با productId از دیتابیس یا آرایه بگیری */}
    </div>
  );
}

export default ProductDetail;