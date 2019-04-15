import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name : 'Home',
      color : 'grey',
      img : 'Home.jpg',
      img2 : 'home.png',
      nilai1 : null,
      nilai2: null,
      operator: null,
      hasil: null,
    }

  }
  handleSubmit(e){
	  e.preventDefault();
	  
	  const nilai1 = parseInt(this.refs.nilai1.value);
	  const nilai2 = parseInt(this.refs.nilai2.value);
	  const operator = this.refs.operator.value;
	  
	  var hasil;
	  switch(operator){
		  case '+': 
			hasil = nilai1 + nilai2;
			break;
		  case '-':
			hasil = nilai1 - nilai2;
			break;
		  case '*':
			hasil = nilai1 * nilai2;
			break;
		  case '/':
		  hasil = nilai1 / nilai2;
			break;
	  }
	  this.setState({nilai1, nilai2, operator, hasil});
	  
	  this.refs.nilai1.value = null;
	  this.refs.nilai2.value = null;
  }
  
  renderHasil(){
	  const {nilai1, nilai2, operator, hasil} = this.state;
	  if(this.state.hasil){
		  return (
			<div>
				<br />
				<p className="alert alert-success">
				{"Hasilnya adalah "+hasil}
				</p>
			</div>	
		  );
	  }
	  
  }

  clicked(menu) {
    //utk memperbarui state sesuai dengan menu yang digunakan
    this.setState({
      name : menu.name,
      color: menu.color,
      img : menu.img,
      img2 : menu.img2,
    });
  }

  info(name){
    if(name === "Calculator"){
      return(
        <div>
          <span className={"selected "+this.state.color}>{this.state.name}</span>
            <br></br>
            <br></br>
          <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="number" ref="nilai1"></input>
  			  <select ref="operator" className="form-control">
				  <option value="+">+</option>
				  <option value="-">-</option>
				  <option value="*">*</option>
				  <option value="/">/"</option>
			    </select>
          <input type="number" ref="nilai2"></input> =...
          <br></br>
          <br></br>
          <button className="btn btn-primary">Count Me</button>
          </form>
          {this.renderHasil()}
        </div>
      )
      
    }
    else{
      return(
      <div>
      This is <span className={"selected "+this.state.color}>{this.state.name}</span>
            <br></br>
          <br></br>
          <img src={this.state.img} width="240"></img>
          <br></br>
          <br></br>
          <img src={this.state.img2} width="240"></img>
    </div>);
    }
  }
  /*menusaya(){
    if (this.state.active.toLowerCase()==='Red'){
			gambar = "Red";
		}
		else if (this.state.active.toLowerCase()==='Yellow'){
			gambar = "Yellow";
		}
		else if (this.state.active.toLowerCase()==='Green'){
			gambar = "Green";
		}
		else if (this.state.active.toLowerCase()==='Blue'){
			gambar = "Blue";
		} 
    return <img src={this.state.color+".jpg"} width="240"></img>
}*/

  render(){
    return(
      <div id="app">
          <nav className="nav">{this.props.items.map((
            menu, index)=> {
              var style = 'menu';

              if(this.state.color===menu.color){
                style = `${style} is-active`;
              } //muncul warna berbeda ketika diklik
            
          return <div 
                  className={style+" "+menu.color}
                  onClick={this.clicked.bind(this,menu)}
                  key={index}>
                  {menu.name}
                  </div>;
           }) }
          </nav>

          <div className="info">                  
          {this.info(this.state.name)}
          </div>
  </div>
    ); 
}}
export default App;    