import NavItem from './NavItem';

const NavBarComponent = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <NavItem
                    text='Avaleht'
                    svg={
                        <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='home'
                            class='svg-inline--fa fa-home fa-w-18'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'>
                            <path
                                fill='currentColor'
                                d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z'></path>
                        </svg>
                    }
                    href='#App'
                />

                <NavItem
                    text='Kirjeldus'
                    svg={
                        <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fab'
                            data-icon='readme'
                            class='svg-inline--fa fa-readme fa-w-18'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'>
                            <path
                                fill='currentColor'
                                d='M528.3 46.5H388.5c-48.1 0-89.9 33.3-100.4 80.3-10.6-47-52.3-80.3-100.4-80.3H48c-26.5 0-48 21.5-48 48v245.8c0 26.5 21.5 48 48 48h89.7c102.2 0 132.7 24.4 147.3 75 .7 2.8 5.2 2.8 6 0 14.7-50.6 45.2-75 147.3-75H528c26.5 0 48-21.5 48-48V94.6c0-26.4-21.3-47.9-47.7-48.1zM242 311.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5V289c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V251zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm259.3 121.7c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5V228c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.8c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V190z'></path>
                        </svg>
                    }
                    href='#Description'
                />

                <NavItem
                    text='Pildid'
                    svg={
                        <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='images'
                            class='svg-inline--fa fa-images fa-w-18'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'>
                            <path
                                fill='currentColor'
                                d='M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z'></path>
                        </svg>
                    }
                    href='#Photos'
                />
                <NavItem
                    text='Tagasiside'
                    svg={
                        <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='comments'
                            class='svg-inline--fa fa-comments fa-w-18'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'>
                            <path
                                fill='currentColor'
                                d='M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z'></path>
                        </svg>
                    }
                    href='#Feedback'
                 
                />
                <NavItem
                    text='Play Pood'
                    svg={
                        <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fab'
                            data-icon='google-play'
                            class='svg-inline--fa fa-google-play fa-w-16'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'>
                            <path
                                fill='currentColor'
                                d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z'></path>
                        </svg>
                    }
                    href='https://play.google.com/store/apps/details?id=com.gksoftware.jalgrattatestid'
                    target='blank'
                />
            </ul>
        </nav>
    );
};

export default NavBarComponent;
