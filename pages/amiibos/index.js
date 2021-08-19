import Layout from "../../components/layout";
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

         {amiibo.name}
                {/*//{amiiboSeries} {character}, {gameSeries}, {games3DS}, {gamesSwitch}, {gamesWiiU}, {head}, {image}, {name}, {release}, {tail}, {type}*/}
            </li>
        ))}

    </Layout>
}