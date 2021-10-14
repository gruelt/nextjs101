import Layout from "../../components/layout";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import AmiiboCard from "../../components/AmiiboCard";

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
    const [search, setSearch] = useState("");


    return <Layout>

        <div className="container">
            <div className="row">
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
                <div className="col">
                    Column
                </div>
            </div>
        </div>

        {/*<button type="button" className="btn btn-primary">Primary</button>*/}
        {/*<button type="button" className="btn btn-secondary">Secondary</button>*/}
        {/*<button type="button" className="btn btn-success">Success</button>*/}
        {/*<button type="button" className="btn btn-danger">Danger</button>*/}
        {/*<button type="button" className="btn btn-warning">Warning</button>*/}
        {/*<button type="button" className="btn btn-info">Info</button>*/}
        {/*<button type="button" className="btn btn-light">Light</button>*/}
        {/*<button type="button" className="btn btn-dark">Dark</button>*/}

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
            <div>
            <AmiiboCard amiibo={amiibo} />
            <li>

         {amiibo.name}<br />
                <Image src={amiibo.image}
                width={150}
            height={180} />

                {/*//{amiiboSeries} {character}, {gameSeries}, {games3DS}, {gamesSwitch}, {gamesWiiU}, {head}, {image}, {name}, {release}, {tail}, {type}*/}
            </li>
            </div>
        ))

                }

    </Layout>
}

