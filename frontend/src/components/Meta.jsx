import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'TechBay - Tech & Electronics Store',
  description: 'Shop the latest technology, electronics, and gadgets at TechBay',
  keywords:
    'electronics, technology, computers, laptops, phones, cameras, gaming, gadgets, tech accessories',
};

export default Meta;
