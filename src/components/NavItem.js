const NavItem = (props) => {
    return (
        <li className='nav-item'>
            <a href={props.href} className='nav-link' target={props.target}>
                {props.svg}
                <span className='link-text'>{props.text}</span>
            </a>
        </li>
    );
};

export default NavItem;
