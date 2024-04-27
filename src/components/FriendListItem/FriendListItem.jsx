import clsx from "clsx";
import css from "./FriendListItem.module.css"


export default function FriendListItem({avatar, name, isOnline}) {
    return (
        <div>
            <img className={css.image} src={avatar} alt={`${name}'s avatar`} width="48" />
            <p>{name}</p>
            <p className={clsx(isOnline ? css.green : css.red)}>{(isOnline) ? "Online" : "Offline"}</p>
        </div>

    )
}