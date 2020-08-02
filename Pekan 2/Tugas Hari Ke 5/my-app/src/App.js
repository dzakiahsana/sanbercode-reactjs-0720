import React, {Component} from 'react'
import './App.css';


class FormsAndInputs extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
    }
    handleInputChange = () => {

    }
  render () {
    return (

      <div class='form'>
        <h1>Form Pembelian Buah</h1>
        <form method='POST' onSubmit={this.handleSubmit}>
          <div class='form2'>
          <p><b>Nama Pelanggan</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
          <input type='text' name='name' /></p>
          <div class='buah'>
              <div class="li1">
                <p><input type='checkbox' name='name' />Semangka</p>
              </div>
              <div class="li2">
                <p><input type='checkbox' name='name' />Jeruk</p>
              </div>
              <div class="li3">
                <p><input type='checkbox' name='name' />Nanas</p>
              </div>
              <div class="li4">
                <p><input type='checkbox' name='name' />Salak</p>
              </div>
              <div class="li5">
                <p><input type='checkbox' name='name' />Anggur</p>
              </div>
            
          </div>
          <div class='item'>
            <label><b>Daftar Item</b></label>
          </div>
          <p><button>Kirim</button></p>
          </div>
        </form>
      </div>
    )
  }
}
export default FormsAndInputs;
