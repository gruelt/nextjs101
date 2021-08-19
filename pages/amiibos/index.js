import Layout from "../../components/layout";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

export async function getStaticProps(){
    const amiibos = await fetch('https://www.amiiboapi.com/api/amiibo/?character=zelda&showusage')
    const data = await amiibos.json()
    return {
        props:{
            data
        }
    }
}

export default function amiibos({data}){
    return <Layout>
        {data.amiibo.map((amiibo) => (
            <li>

         {amiibo.name}<br />
                <Image src={amiibo.image}
                width={150}
            height={180} />

                {/*//{amiiboSeries} {character}, {gameSeries}, {games3DS}, {gamesSwitch}, {gamesWiiU}, {head}, {image}, {name}, {release}, {tail}, {type}*/}
            </li>
        ))}

    </Layout>
}