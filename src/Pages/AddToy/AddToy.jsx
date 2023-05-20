
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";


const AddToy = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);

    const onSubmit = (data) => {

        console.log(data);
        // You can perform further actions with the form data, such as sending it to an API or storing it in a state.

        fetch('http://localhost:5000/allToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    return (
        <div className="text-center mx-auto py-8">
            <h2 className="text-2xl font-bold py-10">Add Toy</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className=" grid grid-cols-1 lg:grid-cols-2">
                    <div className="mb-4">
                        <div>
                            <label htmlFor="name" className="form-label text-xl">
                                Name:
                            </label>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="name"

                                {...register("name")}
                                className="form-input rounded-md mx-2 h-10 text-indigo-600 px-2  "
                                required

                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div>
                            <label htmlFor="picture_url" className="form-label text-xl">
                                Picture URL:
                            </label>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="picture_url"

                                {...register("picture_url")}
                                className="form-input rounded-md mx-2 h-10 text-indigo-600 px-2  "
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <div>
                            <label htmlFor="seller_name" className="form-label text-xl">
                                Seller Name:
                            </label>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="seller_name"
                                defaultValue={user?.displayName}
                                {...register("seller_name")}
                                className="form-input rounded-md mx-2 h-10 text-indigo-600 px-2  "
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div>
                            <label htmlFor="seller_email" className="form-label text-xl">
                                Seller Email:
                            </label>
                        </div>
                        <div>
                            <input
                                type="email"
                                id="seller_email"
                                defaultValue={user?.email}
                                {...register("seller_email")}
                                className="form-input rounded-md mx-2 h-10 text-indigo-600 px-2  "
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div>
                            <label htmlFor="sub_category" className="form-label text-xl">
                                Sub Category:
                            </label>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="sub_category"
                                {...register("sub_category")}
                                className="form-input rounded-md mx-2 h-10 text-indigo-600 px-2  "
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div>
                            <label htmlFor="price" className="form-label text-xl">
                                Price:
                            </label>
                        </div>
                        <div>
                            <input
                                type="number"
                                id="price"
                                {...register("price")}
                                className="form-input rounded-md mx-2 h-10 text-indigo-600 px-2  "
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div>
                            <label htmlFor="rating" className="form-label text-xl">
                                Rating(1 to 5):
                            </label>
                        </div>
                        <div>
                            <input
                                type="number"
                                id="rating"
                                {...register("rating", { min: 1, max: 5 })}
                                className="form-input rounded-md mx-2 h-10 text-indigo-600 px-2"

                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <div>
                            <label htmlFor="available_quantity" className="form-label text-xl">
                                Available Quantity:
                            </label>
                        </div>
                        <div>
                            <input
                                type="number"
                                id="available_quantity"
                                {...register("available_quantity")}
                                className="form-input rounded-md mx-2 h-10 text-indigo-600 px-2  "
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div>
                        <label htmlFor="detail_description" className="form-label text-xl">
                            Detail Description:
                        </label>
                    </div>
                    <div>
                        <textarea
                            id="detail_description"
                            {...register("detail_description")}
                            className="form-textarea w-3/4 rounded-md"
                        ></textarea>
                    </div>
                </div>
                <div className="mt-6 py-10">
                    <button type="submit" className="btn btn-success bg-inherit  ">
                        Add Toy
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;
