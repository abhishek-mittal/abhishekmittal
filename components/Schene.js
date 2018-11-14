import css from './../styles/schene.scss';

const Schene = props => (
    <div className={css.canvas}>
        <div>{props.children}</div>
    </div>
);

export default Schene;
