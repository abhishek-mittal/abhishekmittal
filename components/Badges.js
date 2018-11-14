import Link from 'next/link';
import css from './../styles/badge.scss';

const BadgesLink = [
    {
        href: 'https://twitter.com/AbhishekMittal',
        favClass: 'fa fa-twitter fa-2x'
    },
    {
        href: 'https://www.facebook.com/theabhishekmittal',
        favClass: 'fa fa-facebook fa-2x'
    },
    {
        href: 'https://www.linkedin.com/in/theabhishekmittal',
        favClass: 'fa fa-linkedin fa-2x'
    },
    {
        href: 'https://www.behance.net/abhishekmittal',
        favClass: 'fa fa-behance-square fa-2x'
    },
    {
        href: 'https://github.com/abhishek-mittal',
        favClass: 'fa fa-github fa-2x'
    }
];

const BadgeStyle = {
    margin: '0em auto 4em'
};

const Badges = () => (
    <div style={BadgeStyle}>
        {BadgesLink.map((badge, index) => (
            <Link href={badge.href} key={`badges_${index}`}>
                <a target="_blank">
                    <i className={`${badge.favClass} ${css.badge}`} />
                </a>
            </Link>
        ))}
    </div>
);

export default Badges;
