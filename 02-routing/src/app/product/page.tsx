export default function ProductPage() {
  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {
            //iterate 1- 10  for dummy product
            Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
                <li key={i}>Product {i}</li>
            ))
        }
      </ul>
    </div>
  );
}
