import React from 'react';

interface IProps {
  params: {
    slug: string;
  };
}

const productPage = ({ params }: IProps) => {
  console.log(params.slug);

  return <section className="max-w-7xl mx-auto">{params.slug}</section>;
};

export default productPage;
