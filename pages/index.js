import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from "next/link";
import utilStyles from '../styles/utils.module.css'
import {getNpmIds} from "../lib/npm";
import Image from "next/image";

export async function getStaticProps(context) {
    const res = await fetch(`https://api.npms.io/v2/search?q=scope:angular`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default function Home({ data }) {
    return (
        <Layout home>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {data.total}

                    {data.results.map((pack) => (
                        <li class="" className={utilStyles.listItem} >
                            <b>{pack.package.name}</b>
                            <br/>
                                {pack.package.version}
                            <br/>
                            <i>{pack.package.description}</i>

                            <br/>
                            <Link href={pack.package.links.homepage}>
                                <a>
                                    HomePage
                                </a>
                            </Link>


                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}