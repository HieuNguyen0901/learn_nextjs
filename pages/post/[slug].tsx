import { gql } from "@apollo/client";
import { useRouter } from "next/router"
import client from "../../apollo-client";
import Image from 'next/image';

function DynamicPage({postDetail}:any) {
  var post = postDetail;
  var categorys = post?.categories?.nodes;
  // console.log(post);
  return (
    <>
      <h1>{post?.title}</h1>
      <div className="content" dangerouslySetInnerHTML={ {__html: post?.content}} />
      <Image 
        src={post?.featuredImage?.node.mediaItemUrl} 
        alt="featured image"      
        width="500"
        height="500"
      />
      
      <div className="cat">
        <h3>Category:</h3>
        {
          categorys&&categorys.map((category: any,index: number ) =>  (
            <div className="item" key={"item-"+index}>
              {category.name} <br />
              {category.slug}<br />
              {category.uri} <br /><br />
            </div>
        ))
        }
      </div>
     
    </>
  );
}
export default DynamicPage;


export async function getStaticProps(context: { params: {
  [x: string]: any; slug: any; 
}; }) {

  const slug = context?.params.slug
  console.log(context);
  const { data } = await client.query({
    query: gql`
    query NewQuery {
      postBy(slug:"${slug}") {
        title
        content
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        categories {
          nodes {
            slug
            name
            uri
          }
        }
      }
    }
    `,
  });
  if(data.postBy){
    return {
      props: {
        postDetail: data.postBy,
      },
   };
  }else{
    return{
      notFound: true,
    }
  }

}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}