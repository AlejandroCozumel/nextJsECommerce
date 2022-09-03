import { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/getAllProducts";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div>{JSON.stringify(products)}</div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </Layout>
  );
}

Home.Layout = Layout;
