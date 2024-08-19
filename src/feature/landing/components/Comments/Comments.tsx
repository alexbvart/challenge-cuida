import { Heading } from "../../../../components/Heading/Heading";
import Slider from "../../../../components/Slider/Slider";
import { commentList } from "../../../../constants/commentsC";
import { CommentItem } from "./CommentItem";
import styles from "./Comments.module.css";

export const Comments: React.FC = () => {

    return (
        <section className={styles.commentsContainer}>
            
            <header className={styles.header}>
                <Heading level={2}>Trusted by thousands of
                    happy customer</Heading>
                <p className='description'>
                    Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.
                </p>
            </header>

            <div className={styles.container}>
                <Slider>
                    <Slider.Item >
                        <CommentItem {...commentList[0]} />
                    </Slider.Item>
                    <Slider.Item>
                        <CommentItem {...commentList[1]} />
                    </Slider.Item>
                    <Slider.Item>
                        <CommentItem {...commentList[2]} />
                    </Slider.Item>
                    <Slider.Item>
                        <CommentItem {...commentList[3]} />
                    </Slider.Item>
                    <Slider.Item >
                        <CommentItem {...commentList[1]} />
                    </Slider.Item>
                </Slider>
            </div>
        </section>
    )
}
