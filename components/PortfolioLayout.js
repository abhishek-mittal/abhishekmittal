import Link from 'next/link';
import css from './../styles/layout.scss';

const layoutStyle = {
    overflow: 'auto',
    height: '100vh',
    margin: '0 auto',
    width: '100%',
    /* padding: 11em 0px, */
    color: 'rgb(165, 158, 150)',
    backgroundColor: 'rgb(14, 24, 24)',
    alignContent: 'center',
    /* background-attachment: fixed, */
    display: 'flow-root',
    backgroundSize: 'cover'
    // height: '-webkit-fill-available',
    // margin: '0 auto',0
    // padding: '10px 0px',
    // // border: '1px solid #DDD',
    // color: '#A59E96',
    // backgroundColor: '#0e1818',
    // alignContent: 'center',
    // backgroundAttachment: 'fixed'
};

const Layout = props => {
    const { routeNav } = props;
    return (
        <main style={layoutStyle}>
            <div>
                {routeNav.length < 5 &&
                    routeNav.map((nav, index) => {
                        if (!nav.active) return;
                        return (
                            <Link href={nav.path} key={`navLink_${index}`}>
                                <div
                                    data-content={nav.path.split('/').join('')}
                                    id={`navigate_${nav.ref}`}
                                    className={css.navigator}
                                />
                            </Link>
                        );
                    })}
                <div>{props.children}</div>
            </div>
        </main>
    );
};

function print(optionalParams) {
    console.log('message', optionalParams);
}

export default Layout;
