import { StartIcom } from "../../../../assets/svg/StartIcon"
import styles from "./CommentsItem.module.css"

interface CommentItemProps {
    image: string,
    name: string,
    description: string,
    comment: string,
    start: string,
    className?: string,
}
export const CommentItem: React.FC<CommentItemProps> = ({ image, name, description, comment, start, className }) => {

    return (
        <div className={` ${styles.avatarGrid} ${className}`}>
            <img className={styles.image} src={image}
                alt={name} />
            <div>
                <h3 className={styles.avatarName}>{name}</h3>
                <span className={styles.avatarDescription}>{description}</span>
            </div>
            <span className={styles.starts}>
                {start}
                <StartIcom />
            </span>
            <p className={styles.comment}>
                “{comment}”.
            </p>
        </div >
    )
}
