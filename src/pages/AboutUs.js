import Award from '../assets/award.jpg';
import Recycled from '../assets/recycled.jpg';
import './aboutUs.css';
import headerImg from '../assets/headerImage.jpg'
import Typewriter from 'typewriter-effect';

function AboutUs() {
    return (
        <div className='page-body slideInRight'>
            <div className='abhead'>
                <img src={headerImg}></img>
               <h1 ><Typewriter options={{autoStart: true, loop: true, delay: 80, strings: ["Embrace Your Authentic Style<br/> Where Trends Meet Individuality!", "We Support our community", "About Us", "Join our community"]}}/></h1>
            </div>

            <p class="aboutUsContent" style={{ marginLeft: '60px', fontSize: '17px', padding: '0' }}>
                Welcome to Fake, where style meets innovation and every outfit tells a story. Born from
                a love of fashion and a desire to redefine the shopping experience, our journey began
                with a simple vision: to empower individuals to embrace their unique style journeys.
                From our carefully curated collections that blend the latest trends with timeless
                classics, to our commitment to sustainability and ethical practices, we're more than
                just a fashion store - we're a community of trendsetters, dreamers, and believers. Join
                us as we continue to push boundaries, spark creativity, and inspire confidence, one
                fabulous outfit at a time.
            </p>

            <div class="outerContainer">
                <div class="container-center">
                    <h2>The journey to making better things in a better way is a long one, and we’re just
                        getting started.</h2>
                </div>

                <div class="grid-container">
                    <div class="container-cell">
                        
                         <p>Being recognized for our commitment to sustainability in fashion, receiving the
                            Green Fashion Award.</p><img src={Award} alt="Greem Fasjon Award" />
                    </div>
                    <div class="container-cell">

                        <img src={Recycled} alt="Recycled Packaging" /><p>We are working towards building a society that is accessible to all humans by using
                            90% post-consumer recycled cardboard that serves as a shoebox, shopping bag, and mailer
                            all in one.</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
