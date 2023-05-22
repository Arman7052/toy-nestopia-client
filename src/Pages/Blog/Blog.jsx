import Footer from "../../LayOut/Shared/Footer/Footer";
import Navbar from "../../LayOut/Shared/Header/Navbar";


const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-center'>
                <h1 className='font-bold font-serif italic text-3xl py-10 text-indigo-500'>Blog</h1>
                <div className='px-20 py-10 pb-20'>



                    <div>
                        <div className='border-2 py-2 lg:py-5 my-4 bg-violet-950	rounded-md'>
                            <h1 className='bg-gray-500	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                            <p className='bg-gray-700 font-serif	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>An access token is a short-lived credential for authorizing access to protected server resources in API requests. It is used for authentication. A refresh token is a longer-lived credential that allows obtaining a new access token when the current one expires, maintaining session persistence without reauthentication.
                            Access tokens are commonly stored on the client-side, like browser memory or local storage, for subsequent API requests. Refresh tokens should be securely stored on the server-side, usually in a secure HTTP-only cookie or server-side session store, to prevent unauthorizedaccess.</p>
                        </div>
                        <div className='border-2 py-2 my-4 bg-blue-950	rounded-md'>
                            <h1 className='bg-gray-500	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>Compare SQL and NoSQL databases?</h1>
                            <p className='bg-gray-700 font-serif	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>SQL databases are relational and use structured query language (SQL) to define and manipulate data. They have predefined schemas, support transactions, and ensure data consistency. NoSQL databases are non-relational and provide flexible data models, horizontal scalability, and high performance. They sacrifice some data consistency guarantees for increased scalability and flexibility.</p>
                        </div>
                        <div className='border-2 py-2 my-4 bg-violet-950	rounded-md'>
                            <h1 className='bg-gray-500	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>What is express js? What is Nest JS?</h1>
                            <p className='bg-gray-700 font-serif	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>Express.js is a fast and minimalist web application framework for Node.js. It simplifies the process of building server-side applications and APIs by providing a robust set of features, middleware, and routing capabilities. Express.js is known for its simplicity, flexibility, and extensibility, making it a popular choice for building web applications in Node.js.
                            NestJS is a robust and scalable TypeScript-based web application framework. It is built on top of Node.js and provides a structured approach for developing server-side applications. NestJS leverages modern JavaScript features and design patterns like decorators and dependency injection, making it a popular choice for building enterprise-level applications with features like routing, validation, authentication, and database integration.
                            </p>
                        </div>
                        <div className='border-2 py-2 my-4 bg-blue-950	rounded-md'>
                            <h1 className='bg-gray-500	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>What is MongoDB aggregate and how does it work?</h1>
                            <p className='bg-gray-700 font-serif	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>MongoDB's aggregate feature enables advanced data processing and analysis within the database. It combines multiple operations like filtering, grouping, sorting, and calculating into a query pipeline. Each stage in the pipeline applies a specific operation, sequentially transforming the input documents to produce the desired output. Aggregation operations can handle complex calculations, data transformations, and large datasets, facilitating flexible and efficient data analysis and reporting in MongoDB.</p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Blog;