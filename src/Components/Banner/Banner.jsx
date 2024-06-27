import image from '../../../src/assets/pixlr-image-generator-9c5315fe-db9c-4d81-8296-4ac4ed0c7089.png'
import image2 from '../../../src/assets/men-clothes-set.jpg'
import image3 from '../../../src/assets/shirt.jpg'

const Banner = () => {
    return (
        <div>
              <div className="h-auto bg-base-200 p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className=" md:text-left md:pl-12 lg:pl-3 md:pt-8">
                    <h1 className="text-4xl font-Playwrite text-green-400">Sha-Shop now for </h1>
                       <h1 className="text-4xl font-Playwrite  text-green-400"> quality products at unbeatable prices.</h1>
                        <h1 className="text-6xl font-Playwrite  bg-gradient-to-r from-green-600 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient pt-3"> Save big!</h1>
                    
                    <br />
                    <button className="bg-blue-500 text-white px-4 hover:border-[4px] hover:border-black py-2 rounded mt-4 md:mt-8">View The List</button>
                </div>
                
                    <div className=" p-6 lg:p-1 grid gap-6 grid-rows-1 lg:grid-rows-none">
            <div className="carousel rounded-2xl  h-[350px] lg:h-[350px] md:ml-10 w-[350px]">
                <div id="slide1" className="carousel-item relative ">
                    <img src={image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle ">❮</a>
                        <a href="#slide2" className="btn btn-circle ">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;