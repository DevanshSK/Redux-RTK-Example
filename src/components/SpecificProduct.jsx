import { useGetProductByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {
  const { data, isLoading, isError } = useGetProductByIdQuery(2);

  if (isError) {
    return <h1>Oh Noooo.. Some error happened</h1>;
  }

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return <div>
    <h1>{data?.brand}</h1>
    <h1>{data?.category}</h1>
    <h1>{data?.price} $</h1>
  </div>;
};

export default SpecificProduct;
