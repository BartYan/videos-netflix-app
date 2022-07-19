import Card from '../card/card';
import styles from './section-cards.module.css';

const SectionCards = (props) => {
    const {title, videos, size} = props;
    console.log(videos)
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                {videos.map((video, indx) => {
                    return <Card key={indx} id={indx} imgUrl={video.imgUrl} size={size}/>
                })}
            </div>
        </section>
    )
}

export default SectionCards;