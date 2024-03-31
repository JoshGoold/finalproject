import Award from '../assets/award.jpg';
import Recycled from '../assets/recycled.jpg';
import './aboutUs.css';

function AboutUs() {
    return (
        <div>
            <section class="headImg">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <h1 class="imgHeader" style={{ fontSize: '50px', color: 'white' }}>
                            Embrace Your Authentic Style.<br />Where Trends Meet Individuality!</h1>
                        <p class="lead"></p>
                        <div class="col-12 text-center">
                        </div>
                    </div>
                </div>
            </section>

            <p class="aboutUsContent" style={{ marginLeft: '60px', fontSize: '25px', padding: '0' }}>
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
                        <img src={Award} alt="Greem Fasjon Award" />
                    </div>
                    <div class="container-cell">
                        <img src={Recycled} alt="Recycled Packaging" />
                    </div>
                    <div>
                        <p>Being recognized for our commitment to sustainability in fashion, receiving the
                            Green Fashion Award.</p>
                    </div>
                    <div>
                        <p>We are working towards building a society that is accessible to all humans by using
                            90% post-consumer recycled cardboard that serves as a shoebox, shopping bag, and mailer
                            all in one.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
