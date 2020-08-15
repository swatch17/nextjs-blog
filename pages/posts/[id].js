/*
 * @Author: Tan Dinbo
 * @Date: 2020-08-14 11:44:56
 */
/*
 * @Author: Tan Dinbo
 * @Date: 2020-08-14 11:44:56
 */
import Head from "next/head";
import axios from "axios";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../ilb/posts";
import Date from "../../components/date";
import utilStyle from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyle.headingXl}>{postData.title}</h1>
        <div className={utilStyle.lightText}>
          <Date dateString={postData.date} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  );
}

// 异步获取静态路径
export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// 异步获取静态属性
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  const res = await axios(
    "https://mock.yonyoucloud.com/mock/7138/panda-operate-web/getDoctor"
  );
  console.log(res.data);

  return {
    props: {
      postData,
    },
  };
}
