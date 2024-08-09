import ArticlePage from "../../components/Blogs/ArticlePage";
import { Metadata } from "next";




type Props = {
   params: {
      slug: string;
   };
};

const page = ({ params: { slug } }: Props) => {
   return <ArticlePage slug={slug} />;
};

export default page;
