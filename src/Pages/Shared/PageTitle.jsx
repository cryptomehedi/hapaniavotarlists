import { Helmet } from "react-helmet-async";

const PageTitle = ({ text }) => {
  return (
    <Helmet>
      <title>{text ? text : 'Election Votar List'} | JASS4 Lubricant</title>
    </Helmet>
  );
};

export default PageTitle;
