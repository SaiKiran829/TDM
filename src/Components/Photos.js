import React, { useState} from 'react'
import {arrOfApplication} from './arrOfApplication';


export default function Photos(props) {


  const [app,setapp] = useState(arrOfApplication);

  const hadleTopRating = () => {
    const topapp = arrOfApplication.sort((x, y) => (x.rating < y.rating) ? 1 : (x.rating > y.rating) ? -1 : 0);
    console.log(topapp);
        console.log("clicked on top app");
        setapp([...arrOfApplication]);
    }

    // const handleOnSubmit = () => {
    //   const search = arrOfApplication.filter(x => x.movie).includes(searched);
    //   setapp(search);
    //   setapp([...arrOfApplication]);
    // }

    const handleLowRating = () => {
        const lowapp = arrOfApplication.sort((x,y) => (x.rating < y.rating) ? -1 : (x.rating > y.rating) ? 1 : 0);
        setapp(lowapp);
        setapp([...arrOfApplication]);
    }

    const handleAllRated = () => {
      console.log("clicked on All app");
        setapp([...arrOfApplication]);
    }

    const fiveStarRating = () => {
      const fiveStars = arrOfApplication.filter(x => x.rating === 5);
      setapp(fiveStars);
    }

    const fourStarRating = () => {
      const fourStars = arrOfApplication.filter(x => x.rating === 4);
      setapp(fourStars);
    }

    const threeStarRating = () => {
      const threeStars = arrOfApplication.filter(x => x.rating === 3);
      setapp(threeStars);
    }

    const twoStarRating = () => {
      const twoStars = arrOfApplication.filter(x => x.rating === 2);
      setapp(twoStars);
    }

    const OneStarRating = () => {
      const oneStar = arrOfApplication.filter(x => x.rating === 1);
      setapp(oneStar);
    }

    const [data,setData] = useState({
      AppName:'',
      appDescription:'',
      createdBy:''
    })

    const {AppName,appDescription,createdBy} = data;

    const onchangeHandle = e => {
      setData({...data,[e.target.name]:e.target.value})
    }
   
     
    const submitHandle = e => {
      e.preventDefault();
      console.log(data);
      let newId = app.length + 1;
      const newValue = {
      id:newId,
      AppName:data.AppName,
      imageUrl:"https://img.freepik.com/free-vector/illustration-data-folder-icon_53876-6329.jpg?w=2000",
      rating:3,
      CreatedBy:data.createdBy,
      AppDescription:data.appDescription,
      environment:[]
      };
      app.push(newValue);
      console.log(app);
      setapp([...app]);
      console.log(app);
      <Photos/>
    }

    const deleteApplication = (id) => {
      const updatedItems = app.filter(item => item.id !== id );
      setapp(updatedItems);
      }

  return (
    <div>
      
      <div className="dropdown ">
        <button className="btn btn-secondary dropdown-toggle bg-dark float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort By
        </button>
        <ul className="dropdown-menu small ">
            <li><button className="dropdown-item " onClick={handleAllRated} href="/" >All</button></li>
            <li><button className="dropdown-item " onClick={hadleTopRating} href="/">Top Rated</button></li>
            <li><button className="dropdown-item" onClick={handleLowRating} href="/" >Low Rated</button></li>
        </ul>
       </div>
       <div className="dropdown ">
        <button className="btn btn-secondary dropdown-toggle bg-dark float-end me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter By
        </button>
        <ul className="dropdown-menu small">
            <li><button className="dropdown-item" onClick={fiveStarRating} href="/" >5 STAR</button></li>
            <li><button className="dropdown-item " onClick={fourStarRating} href="/" >4 STAR</button></li>
            <li><button className="dropdown-item " onClick={threeStarRating} href="/">3 STAR</button></li>
            <li><button className="dropdown-item" onClick={twoStarRating} href="/" >2 STAR</button></li>
            <li><button className="dropdown-item" onClick={OneStarRating} href="/" >1 STAR</button></li>
        </ul>
       </div>
          <h2 className='main-heading text-ms-5'> Application </h2>
          <hr/>
    <div className='container-sm my-3'>
    <div className='d-flex' >
      <div>
      <button className='btn col-lg-2 btn btn-sm btn-white ' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width:"200px"}} ><img src="https://img.freepik.com/free-vector/illustration-data-folder-icon_53876-6329.jpg?w=2000" className="card-img-top" alt="..."/><b>Add</b></button>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">New Application</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
          <form onSubmit={submitHandle}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1"   className="form-label">Application name</label>
              <input type="text"  className="form-control" name='AppName' value={AppName}  onChange={onchangeHandle} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1"  className="form-label">Application description</label>
              <textarea type="text" name='appDescription' className="form-control" value={appDescription}  onChange={onchangeHandle} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1"  className="form-label">Created by</label>
              <input type="text" name='createdBy' className="form-control" value={createdBy} onChange={onchangeHandle} />
            </div>
            <button type="submit" data-bs-dismiss="modal" className="btn btn-dark btn-center">Create</button>
          </form>
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
      <div className='row scrollable ' style={{width:"1200px"}}>
          {
                app.map((item) => {
                    return(
                        <div className='col-md-2 mb-5' key={item.id}>
                        <div className="card" style={{width: "10rem" ,height:"10vh",marginBottom:"150px"}}>
                        <button type="button" className="btn  btn-sm position-absolute top-0 end-0 ImageButton my-1 mx-1" onClick={() => deleteApplication(item.id)} ><img src="https://static.vecteezy.com/system/resources/thumbnails/000/630/510/small/illust58-7378-01.jpg" className="buttonImage" alt="..."/></button>
            <img src={item.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body bg-white">
              <p className='text-center'>{item.AppName}</p>
            </div>
            </div>
            </div>
                    )
                })
} 
        </div>
    


        
        </div>
    </div>
    
    </div>
  )
}