function Product({ image, title, description }) {
  return (
    <div className="flex gap-4 ">
      <img
        src={image}
        className="w-20 object-contain aspect-video rounded-xl"
        alt={title}
      />
      <div className="flex-grow">
        <h5 className="text-lg font-bold overflow-hidden">{title}</h5>
        <p className="w-48 xl:w-96 text-sm overflow-hidden whitespace-nowrap text-slate-600 text-ellipsis">
          {description}
        </p>
      </div>
    </div>
  );
}

function ProductsTable({ data }) {
  return (
    <table className="my-2 w-full overflow-scroll">
      <thead className="border-b ">
        <tr className="text-slate-500">
          <th className="text-left">Product Name</th>
          <th className="py-4">Stock</th>
          <th className="py-4">Price</th>
          <th className="py-4">Rating</th>
        </tr>
      </thead>
      <tbody>
        {data.length ? (
          data.map((product) => (
            <tr key={product.id}>
              <td className="w-[60%] py-4">
                {
                  <Product
                    image={product.image}
                    title={product.title}
                    description={product.description}
                  />
                }
              </td>
              <td className="w-[10%] py-2 text-center">
                {product.rating.count} in stock
              </td>
              <td className="w-[10%] py-2 text-center font-bold">
                ${product.price}
              </td>
              <td className="w-[10%] py-2 text-center">
                {product.rating.rate}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-center p-5" colSpan={4}>
              No Products available 🚫
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ProductsTable;
