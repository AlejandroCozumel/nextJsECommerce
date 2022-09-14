import { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/getAllProducts";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";

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
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Cookies, ice cream and muffins"
        desription="Ugh echo park tacos wolf typewriter quinoa. Hot chicken edison bulb wolf semiotics JOMO. Pitchfork sriracha scenester pabst fanny pack, paleo authentic JOMO you probably haven't heard of them VHS williamsburg etsy small batch DSA semiotics. Bodega boys pinterest food truck vegan lomo adaptogen DSA, cliche jean shorts hella chillwave. Hot chicken deep v tofu etsy swag ethical VHS meditation unicorn bushwick occupy."
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} variant="slim" product={product} />
        ))}
      </Marquee>
      <Grid layout="B">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} variant="slim" product={product} />
        ))}
      </Marquee>
    </>
  );
}

Home.Layout = Layout;
