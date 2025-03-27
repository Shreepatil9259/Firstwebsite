import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Products() {

    let MOCK_API = "https://63c663fcd307b76967380f55.mockapi.io/products";

    const [data, setData] = useState({
        image: "",
        name: "",
        price: "",
        mrp: ""
    });

    const [newData, setNewData] = useState([]);
    const [id, setId] = useState(undefined)

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value });
    };


    function handleSubmit() {

        if (id === undefined) {
            axios.post("https://63c663fcd307b76967380f55.mockapi.io/products", data)
                .then((res) => {
                    setData({
                        image: "",
                        name: "",
                        price: "",
                        mrp: ""
                    })
                    console.log(res.data);
                    alert("Data Submitted Successfully")
                    loadData();
                })
        } else {
            // alert(id)
            axios.put("https://63c663fcd307b76967380f55.mockapi.io/products/" + id, data)
                .then((res) => {
                    console.log(res.data);
                    loadData();
                    setData({
                        image: "",
                        name: "",
                        price: "",
                        mrp: ""
                    })
                    loadData()
                    setId(undefined)
                })
        }

    };

    function loadData() {
        axios.get("https://63c663fcd307b76967380f55.mockapi.io/products")
            .then((res) => {
                console.log(res.data);
                setNewData(res.data)
            })
    };

    function handleDelete(id) {
        // alert(id)
        axios.delete("https://63c663fcd307b76967380f55.mockapi.io/products/" + id)
            .then((res) => {
                console.log(res.data);
                loadData()
            })
    };


    function handleUpdate(id) {
        // alert(id)
        setId(id)
        axios.get("https://63c663fcd307b76967380f55.mockapi.io/products/" + id)
            .then((res) => {
                console.log(res.data);
                setData({
                    image: res.data.image,
                    name: res.data.name,
                    price: res.data.price,
                    mrp: res.data.mrp,
                })
            })
    };

    useEffect(() => {
        loadData();
    }, []);



    return (
        <div className='mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Image</label>
                            <input value={data.image} onChange={handleChange} type="text" class="form-control" id="image" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Name</label>
                            <input value={data.name} onChange={handleChange} type="text" class="form-control" id="name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Price</label>
                            <input value={data.price} onChange={handleChange} type="text" class="form-control" id="price" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Mrp</label>
                            <input value={data.mrp} onChange={handleChange} type="text" class="form-control" id="mrp" />
                        </div>
                        <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>

                    </div>


                    {/* Table Data */}
                    <div className="col-lg-6">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">MRP</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newData.map((eachData, index) => {
                                        console.log(eachData);

                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>< img style={{ height: "100px" }} src={eachData.image} alt="" /></td>
                                                <td>{eachData.name}</td>
                                                <td>{eachData.price}</td>
                                                <td>{eachData.mrp}</td>
                                                <td>
                                                    <button onClick={() => handleUpdate(eachData.id)} className="btn btn-primary m-1"><i class="fa-solid fa-pencil"></i></button>
                                                    <button onClick={() => handleDelete(eachData.id)} className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                };

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products