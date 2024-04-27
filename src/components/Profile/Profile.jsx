import css from './Profile.module.css'
import clsx from 'clsx'


export default function Profile({name, tag, location, image, stats}) {
    return (
        <div className= {clsx(css.container)}>
            <div className= {clsx(css.wrapper)}>
                <img
                    src= {image}
                    alt={`${name} avatar`}
                    width = "80"
                />
                <p className={clsx(css.bold)}>{name}</p>
                <p className={css.greyName}>@{tag}</p>
                <p className={css.greyName}>{location}</p>
            </div>

            <ul className={css.list}>
                <li className={css.listItem}>
                    <span>Followers</span>
                    <span className={css.bold}>{stats.followers}</span>
                </li>
                <li className={css.listItem}>
                    <span>Views</span>
                    <span className={css.bold}>{stats.views}</span>
                </li>
                <li className={css.listItem}>
                    <span>Likes</span>
                    <span className={css.bold}>{stats.likes}</span>
                </li>
            </ul>
    </div>

    )
}

