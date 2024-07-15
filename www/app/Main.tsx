// @ts-nocheck

import Link from "@/components/Link";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import { formatDate } from "pliny/utils/formatDate";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import { allBlogs } from "contentlayer/generated";

const MAX_DISPLAY = 10;

export default function Home({ posts }) {
  const pageContent = allBlogs.find((p) => p.slug === "blog");

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <MDXLayoutRenderer code={pageContent.body.code} />
        </div>
      </div>
    </>
  );
}
