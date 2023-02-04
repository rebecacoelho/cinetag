import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import { useEffect, useState } from "react";

import styles from './Home.module.css';

function Home() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/rebecacoelho/cinetag-api/videos')
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            })
    }, [])

    return (
        <>
            <Banner image="home" />
            <Title>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Title>
           <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
           </section>
        </>
    )
}

export default Home;