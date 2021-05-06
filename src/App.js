import './App.css';
import feature_art from './assets/feature-art.png';
import HeroImage from './components/HeroImage';
import TextComponent from './components/TextComponent';
import NavBarComponent from './components/NavBarComponent';
import GalleryImage from './components/GalleryImage';
import preview_1 from './assets/mobile-screen-1.png';
import preview_2 from './assets/mobile-screen-2.png';
import preview_3 from './assets/mobile-screen-3.png';

const App = () => {
    return (
        <>
            <NavBarComponent />

            <div className='App' id='App'>
                <div className='hero-image-container'>
                    <HeroImage src={feature_art} />
                    <a href='https://play.google.com/store/apps/details?id=com.gksoftware.jalgrattatestid&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                        <img
                            className='google-play-icon'
                            alt='Get it on Google Play'
                            src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                        />
                    </a>
                </div>
                <h1 id='Description'>Kirjeldus</h1>
                <div className='Description'>
                    <TextComponent
                        text='- Lahenda jalgratta liiklusteste olenemata oma asukohast ja internetiühendusest!
                     See rakendus võimaldab kasutajal harjutada oma oskusi jalgratta liiklusteoorias ja valmistuda jalgrattaloa teooriaeksamiks.'
                    />
                    <TextComponent
                        text='- Enam kui 100 küsimust,
                            lihtne kasutada ja
                            Testid on kooskõlas kõige uuemate liiklusseadustega.'
                    />
                    <TextComponent text='- Tehtud Georg Kivivälja poolt, Tallinna Nõmme Gümnaasiumi praktilise töö raames.' />
                </div>
                <h1 id='Photos'>Pildid</h1>
                <div className='Photos'>
                    <GalleryImage src={preview_1} />
                    <GalleryImage src={preview_2} />
                    <GalleryImage src={preview_3} />
                </div>
                <h1 id='Feedback'>Tagasiside</h1>
                <div className='Feedback'>
                    <iframe src='https://docs.google.com/forms/d/e/1FAIpQLSeuGD0IsYSSiExANmFR9GazEPN9xGpyGW4jqg65gpU4a6fkIA/viewform?embedded=true ' frameborder="0" scrolling="no">
                        Loading…
                    </iframe>
                </div>
            </div>
        </>
    );
};

export default App;
