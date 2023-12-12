import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import { useEffect, useState } from "react";
import { ProductCard } from "../components";
import { getProducts } from "../api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("LOADING");

  useEffect(() => {
    (async function () {
      try {
        const { data } = await getProducts();
        setProducts(data.data);
        setStatus("SUCCESS");
      } catch (error) {
        console.log("error ", error);
        setStatus("ERROR");
      }
    })();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="products_list">
        {products.map((eachProduct) => (
          <ProductCard key={eachProduct.id} product={eachProduct} />
        ))}
      </section>
    </div>
  );
}
