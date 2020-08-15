/*
 * @Author: Tan Dinbo
 * @Date: 2020-08-13 10:50:56
 */
import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../ilb/posts";
import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello,I'm Dean.I'm a software enginer</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.
        </p>
        )
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as="/post/[id]">
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
{
  /* <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Learn <a href="https://nextjs.org">Next.js!</a>
          Read{" "}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
          <a href="/posts/first-post">this page!</a>
        </h1>
      </main>
    </div> */
}
