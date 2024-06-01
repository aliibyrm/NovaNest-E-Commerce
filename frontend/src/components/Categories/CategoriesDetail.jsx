// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../Products/ProductItem.css";
// import { Link} from "react-router-dom";
// import "./CategoriesDetail.css";

// const CategoriesDetail = () => {
//   const { categoryId } = useParams();
//   const [categoryProducts, setCategoryProducts] = useState([]);
//   const apiUrl = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     const fetchCategoryProducts = async () => {
//       try {
//         const response = await fetch(`${apiUrl}/api/products`);

//         if (response.ok) {
//           const data = await response.json();
//           // Belirli kategoriye ait ürünleri filtrele
//           const filteredProducts = data.filter(
//             (product) => product.category === categoryId
//           );

//           setCategoryProducts(filteredProducts);
//         } else {
//           console.error("Veri getirme başarısız.");
//         }
//       } catch (error) {
//         console.error("Veri hatası:", error);
//       }
//     };

//     fetchCategoryProducts();
//   }, [apiUrl]);

//   console.log(categoryProducts);

//   return (
//     <div className="product-page">
//       <div className="container">
//         {categoryProducts.map((product) => (
//           <div className="product-card">
//             <div className="col mt-2" key={product.id}>
//               <Link to={`product/${product._id}`} className="product-link">
//                 <img src={product.img[0]} alt="" className="img1" />
//               </Link>
//               <h2 className="product-card-title">{product.name}</h2>

//               <div className="product-prices">
//                 <strong className="new-price">
//                   {product.price.current.toFixed(2)}₺
//                 </strong>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoriesDetail;



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Products/ProductItem.css";
import { Link } from "react-router-dom";
import "./CategoriesDetail.css";

const CategoriesDetail = () => {
  const { categoryId } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default"); // Varsayılan sıralama seçeneği
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products`);

        if (response.ok) {
          const data = await response.json();
          // Belirli kategoriye ait ürünleri filtrele
          const filteredProducts = data.filter(
            (product) => product.category === categoryId
          );

          // Sıralama fonksiyonunu seçime göre uygula
          const sortedProducts = sortProducts(filteredProducts);

          setCategoryProducts(sortedProducts);
        } else {
          console.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.error("Veri hatası:", error);
      }
    };

    fetchCategoryProducts();
  }, [apiUrl, categoryId, sortOption]);

  // Fiyata göre sıralama fonksiyonu
  const sortProducts = (products) => {
    switch (sortOption) {
      case "highToLow":
        return products.sort((a, b) => b.price.current - a.price.current);
      case "lowToHigh":
        return products.sort((a, b) => a.price.current - b.price.current);
        case "az":
          return products.sort((a, b) => a.name.localeCompare(b.name));
        case "za":
          return products.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products;
    }
  };

  console.log(categoryProducts);

  return (
  <div className="product-page">
  <div className="container">
    <div className="sort-options">
      <label>
        Sırala:
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Varsayılan</option>
          <option value="highToLow">Fiyata Göre (Yüksekten Düşüğe)</option>
          <option value="lowToHigh">Fiyata Göre (Düşükten Yükseğe)</option>
          <option value="az">İsme Göre (A'dan Z'ye)</option>
          <option value="za">İsme Göre (Z'den A'ya)</option>
        </select>
      </label>
    </div>

    <div className="product-cards">
      {categoryProducts.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="col mt-2">
            <Link to={`product/${product._id}`} className="product-link">
              <img src={product.img[0]} alt="" className="img1" />
            </Link>
            <h2 className="product-card-title">{product.name}</h2>

            <div className="product-prices">
              <strong className="new-price">
                {product.price.current.toFixed(2)}₺
              </strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default CategoriesDetail;
