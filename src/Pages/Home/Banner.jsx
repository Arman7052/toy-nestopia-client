


const Banner = () => {
    return (
        <div className="carousel w-full h-32 lg:h-96 rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1564429238817-393bd4286b2d?ixlib&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" className="w-full" />

                <div className="absolute justify-start  left-0 right-0 bottom-0 top-0 bg-gradient-to-r from-indigo-600 ">
                    <div className="text-white lg:text-2xl p-4 lg:p-20">
                        <p>Transform Ordinary Moments into Extraordinary Memories with Nestopia Toys!</p>
                        
                    </div>
                </div>
                <div className="absolute flex justify-between lg:justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-ghost text-indigo-950 text-lg lg:text-2xl">❮</a>
                    <a href="#slide2" className="btn btn-ghost text-indigo-950 text-lg lg:text-2xl">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1533234427049-9e9bb093186d?ixlib&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVkdWNhdGlvbiUyMHRveXxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60" className="w-full" />

                <div className="absolute justify-start  left-0 right-0 bottom-0 top-0 bg-gradient-to-r from-indigo-600 ">
                    <div className="text-white lg:text-2xl p-4 lg:p-20">
                        <p>Unlock the World of Fun with Nestopia Premium Toys!</p>
                        
                    </div>
                </div>
                <div className="absolute flex justify-between lg:justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-ghost text-indigo-950 text-lg lg:text-2xl">❮</a>
                    <a href="#slide3" className="btn btn-ghost text-indigo-950 text-lg lg:text-2xl">❯</a>
                </div>

            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/id/1332728408/photo/children-of-different-races-sit-together-at-the-table-and-count-on-the-abacus.jpg?b=1&s=170667a&w=0&k=20&c=vDVKpYGf0jTRVpbEEjvYL-Eon6quoOIbANdnwXC8Ui4=" className="w-full" />

                <div className="absolute justify-start  left-0 right-0 bottom-0 top-0 bg-gradient-to-r from-indigo-600 ">
                    <div className="text-white lg:text-2xl p-4 lg:p-20">
                        <p>Join the Nestopia Revolution and Embrace Playtime Like Never Before!</p>
                        
                    </div>
                </div>
                <div className="absolute flex justify-between lg:justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-ghost text-indigo-950 text-lg lg:text-2xl">❮</a>
                    <a href="#slide1" className="btn btn-ghost text-indigo-950 text-lg lg:text-2xl">❯</a>
                </div>

            </div>

        </div>
    );
};

export default Banner;