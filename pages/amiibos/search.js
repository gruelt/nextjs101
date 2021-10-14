import Layout from "../../components/layout";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

// export async function getStaticProps(){
//     const amiibos = await fetch('https://www.amiiboapi.com/api/amiibo/?character=zelda&showusage')
//     const data = await amiibos.json()
//
//     return {
//         props:{
//             data
//         }
//     }
// }



export default function amiibos(){




    const [search, setSearch] = useState("");
    let [datasync, setDatasync] = useState("");




        useEffect(() => {
            //alert(`J'aurai ${search} à trouver`)
            update()
        }, [search])

        function update()
        {
            axios.get('https://www.amiiboapi.com/api/amiibo/?character=mario&showusage').then(res => setDatasync(res.data.amiibo))
            console.log(datasync)
        }






    return <Layout>

        <div>
            <h5>One way data binding</h5>
            value : {search}
            <hr/>


            <h5>Two ways data binding</h5>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
            <br/>
            value : {search}
        </div>

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

