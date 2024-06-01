// import PropTypes from "prop-types";
// import "./CategoryItem.css";

// const CategoryItem = ({ category }) => {
//   return (
//     <li className="category-item">
//     <a href="#">
//     <img src={category.img} alt="" className="category-image" />
//         <span className="category-title">{category.name}</span>
//     </a>
//   </li>
//   )
// }

// export default CategoryItem

// CategoryItem.propTypes = {
//   category: PropTypes.object,
// };
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CategoryItem.css";

const CategoryItem = ({ category }) => {
  return (
    <li className="category-item">
      {/* <Link to={`/categories/${category.name}`}> */}
      <Link to={`/categories/${category._id}`}>
        <img src={category.img} alt="" className="category-image" />
        <span className="category-title">{category.name}</span>
      </Link>
    </li>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  category: PropTypes.object,
};
