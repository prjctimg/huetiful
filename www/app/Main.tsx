import Link from "@/components/Link";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import { formatDate } from "pliny/utils/formatDate";
import { MDXLayoutRenderer } from "pliny/mdx-components";
const MAX_DISPLAY = 10;

function toUppercase(str1) {
  // Capitalize the first character of the input string and concatenate it with the rest of the string starting from the second character
  return str1.charAt(0).toUpperCase() + str1.slice(1);
}

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <img src="/static/images/logo.svg" alt="" />
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
      </div>
    </>
  );
}
