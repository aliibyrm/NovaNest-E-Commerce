const BrandItem = ({ imageSrc }) => {
  return (
    <li className="brand-item">
      <a href="#">
      <img  style={{ width: '147px', height: '73px' }} src={imageSrc} alt="" />
      </a>
    </li>
  );
};

export default BrandItem;