import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-300 dark:divide-gray-700">
        {/* hero section starts here */}
        <div className="mx-auto flex max-w-screen-xl flex-col items-center px-4 py-8 text-center lg:px-12 lg:py-16 ">
          <h1 className="tracking-tight text-center text-4xl font-extrabold lg:text-5xl">
            <span className="text-[hsl(200,100%,60%)]">JavaScript library</span> for simple color
            manipulations based on the
            <span className="text-[hsl(280,100%,60%)]"> Culori API.</span>
          </h1>
          <div className="flex items-center space-x-5 py-6">
             {/* started btn */}
             <a href="#utilities">
              <button className="flex items-center gap-2 rounded-full border-2 border-[hsl(280,100%,60%)] px-5 py-2 text-xl transition delay-150 hover:bg-[hsl(280,100%,60%)]">
                Get Started
              </button>
            </a>
            {/* github btn */}
            <a href="https://github.com/prjctimg/huetiful" target="_blank">
              <button className="flex items-center gap-2 rounded-full bg-[hsl(280,100%,60%)] px-5 py-2 text-xl transition delay-150 hover:bg-[hsl(200,100%,60%)]">
                Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
        {/* hero section ends */}
        <div className="space-y-2 pb-8 pt-6 md:space-y-5" id='utilities'>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Utilities
          </h1>
          {/*<p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
  </p>*/}
        </div>
        <ul className="divide-y divide-gray-300 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article className="bg-[#FBEAEB] rounded-md p-3 lg:p-4 sm:p-3 dark:bg-slate-900 shadow-none hover:shadow-md hover:shadow-gray-400 hover:dark:shadow-gray-500 transition delay-75 duration-200 ease-in">
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    {/* <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
            </dl> */}
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base w-10 h-auto p-2 bg-white dark:bg-slate-700 shadow-md shadow-primary-500 rounded-md font-medium leading-6 hover:translate-x-2 transition duration-200 delay-75 ease-in-out">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6 hover:translate-x-1 transition duration-200 delay-75 ease-in-out">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
