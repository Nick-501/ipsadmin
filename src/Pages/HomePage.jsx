import React, { Component } from 'react';
import AdvertentieService from '../Services/AdvertentieService';
import './../Style/Main.css'
import './../Style/card.css'
import { Link } from 'react-router-dom';
import SesionHanlder from '../SesionHandler'

class HomePage extends Component{
  constructor(props){
    super(props);
    
    this.state ={
      advertentie: [],
      filtered: []
    }
    this.editAdvertentie = this.editAdvertentie.bind(this);
  }

  editAdvertentie(id){
    this.props.history.push(`/update-add/${id}`)
  }

  handleChange = (e) => {
    e.preventDefault();
      if (e.target.value.length > 0) {
          this.setState({filtered:this.state.advertentie.filter(advertentie => advertentie.title.toLowerCase().includes(e.target.value))});
      }
      else{
          this.setState({filtered:this.state.advertentie})
      }
      console.log(e);
  	};

  componentDidMount(){
    AdvertentieService.getAdvertenties().then((res) => {
      console.log(res)
      this.setState({advertentie: res.data});
      this.setState({filtered: res.data});
      SesionHanlder.clearAddId();
    })
  }

  grabId = (id) =>{
    console.log(id); 
    SesionHanlder.setAddId(id)
  }

  deleteAdd = (id) =>{
    SesionHanlder.setAddId(id)
    AdvertentieService.deleteAdvertentie(SesionHanlder.getAddId())
    window.location.reload();
  }

  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
          </div>
          <div className='col-4'>
            <input className="searchbar" type="text" placeholder="Search" onChange={this.handleChange}/>
          </div>
        </div>
      <div className='card-container'>
        {
          this.state.filtered.map(
            advertentie =>
              <tr key={advertentie.id}>
                <div className='card' style={{ width: '18rem', margin: '10px' }}>
                  <div className="card-body">
                    <h5 className="card-title">{advertentie.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{advertentie.countryOfOrigin}</h6>
                    <p class="card-text mb-2 text-muted">{advertentie.original? 'Original' : 'Reproduction'}</p>
                    <p className="card-text">{advertentie.price}</p>
                    <a id={advertentie.id} className='button' value={advertentie.id} onClick={() =>this.grabId(advertentie.id)} href='/advertentie-details'>Details</a>
                    <button id={advertentie.id} className='del-button' value={advertentie.id} onClick={() =>this.deleteAdd(advertentie.id)}>Delete</button>
                  </div>
                </div>
              </tr>
          )
        }
      </div>
      </div>
    );
  }

}

export default HomePage
