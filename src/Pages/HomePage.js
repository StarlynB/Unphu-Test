import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../Components/Header';

const HomePage = () => {
  const profilePIcDefault = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png';

  const[Id, setId] = useState('');
  const[password, setPassword] = useState('');
  const[Nombres, setNombres] = useState('');
  const[FirstLastName, setFirstLastName] = useState('');
  const[secondLastName, setSecondLastName] = useState('');
  const[Cédula,setCédula] = useState('');
  const[Edad,setEdad] = useState('');
  const[Genero,setGenero] = useState('');
  const[Dirección, setDirección] = useState('');
  const[Teléfono,setTeléfono] = useState('');
  const[email,setEmail] = useState('');
  const[EstCivil, setEstCivil] = useState('');
  const[hijos,setHijos] = useState('');
  const[date,setDate] = useState('');
  const[Imagen,setImg] = useState(profilePIcDefault);
  const[Term,setTerm] = useState(false);


  // cover img
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onabort = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  //handle img
  const handleImg = (e) => {
    const file = e.target.value[0];
    getBase64(file).then((base64) => {
      localStorage['Imagen'] = base64;
      console.debug('file store', base64);
    })
  }


  //form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if(Nombres === ''){
      toast.error('los Nombres son requeridos');
    } else if(FirstLastName === ''){
      toast.error('Primer apellido es requerido');
    } else if(secondLastName === ''){
      toast.error('Segundo apellido es requerido');
    } else if(Cédula === ''){
      toast.error('cedula es requerido');
    } else if(email === ''){
      toast.error('email es requerido');
    } else {
      localStorage.setItem('Id',Id)
      localStorage.setItem('password', password)
      localStorage.setItem('name',Nombres);
      localStorage.setItem('primer apellido',FirstLastName)
      localStorage.setItem('segundo apellido',secondLastName)
      localStorage.setItem('Cédula',Cédula)
      localStorage.setItem('Edad',Edad)
      localStorage.setItem('Genero',Genero)
      localStorage.setItem('Direccion',Dirección)
      localStorage.setItem('Tel',Teléfono)
      localStorage.setItem('Correo Electronico',email)
      localStorage.setItem('Estado civil',EstCivil)
      localStorage.setItem('Hijos',hijos)
      localStorage.setItem('Fecha de nacimiento',date)
      // localStorage.setItem('Imagen',img)
      localStorage.setItem('Term', Term)
      toast.success('Save user!') 
      
    }

  }

  return (
    <>
      <Header/>
      <div className='container content mt-4'>
        <h5>📝 Add new user </h5>
        <div className='row border p-4'>
          <div className='col-md-6'>
          <div className='mb-3'>
            <label htmlFor="exampleInputId" className="form-label">
                Id
              </label>
              <input
                type="text"
                value={Id}
                onChange={e => setId(e.target.value)}
                className="form-control"
                id="exampleInputId"
                // aria-describedby="emailHelp"
              />
            </div>
          <div className='mb-3'>
            <label htmlFor="exampleInputPassword" className="form-label">
                password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword"
                // aria-describedby="emailHelp"
              />
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputName" className="form-label">
                Nombres
              </label>
              <input
                type="text"
                value={Nombres}
                onChange={e => setNombres(e.target.value)}
                className="form-control"
                id="exampleInputName"
                // aria-describedby="emailHelp"
              />
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputLatsName1" className="form-label">
                Primer apellido
              </label>
              <input
                type="text"
                value={FirstLastName}
                onChange={e => setFirstLastName(e.target.value)}
                className="form-control"
                id="exampleInputLastName1"
                // aria-describedby="emailHelp"
              />
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputLastName1" className="form-label">
                Segundo apellido
              </label>
              <input
                type="text"
                value={secondLastName}
                onChange={e => setSecondLastName(e.target.value)}
                className="form-control"
                id="exampleInputlastName1"
                // aria-describedby="emailHelp"
              />
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputCedula1" className="form-label">
              Cédula
              </label>
              <input
                type="text"
                value={Cédula}
                onChange={e => setCédula(e.target.value)}
                className="form-control"
                id="exampleInputCédula1"
                // aria-describedby="emailHelp"
              />
            </div>
            <div className='mb-4'>
            <label htmlFor="exampleInputEdad1" className="form-label">
              Edad
              </label>
              <input
                type="number"
                value={Edad}
                onChange={e => setEdad(e.target.value)}
                className="form-control"
                id="exampleInputEdad1"
                // aria-describedby="emailHelp"
              />
            </div>
            <div className='mb-3'>
              <select class="form-select" aria-label="Default select example">
                <option selected>Seleccione una opcion</option>
                <option
                  value="Hombre"
                  defaultChecked={Genero === 'Hombre' }
                  onClick={e => setGenero(e.target.value)}
                >Hombre</option>
                <option
                  value="Mujer"
                  defaultChecked={Genero === 'Mujer' }
                  onClick={e => setGenero(e.target.value)} 
                >Mujer</option>
                <option
                  value="Binario"
                  defaultChecked={Genero === 'Binario' }
                  onClick={e => setGenero(e.target.value)}
                >Binario</option>
              </select>
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputAddress1" className="form-label">
              Direccion
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAddress1"
                value={Dirección}
                onChange={e => setDirección(e.target.value)}
                // aria-describedby="emailHelp"
              />
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputTel1" className="form-label">
              Telefono
              </label>
              <input
                type="number"
                value={Teléfono}
                onChange={e => setTeléfono(e.target.value)}
                className="form-control"
                id="exampleInputTel1"
                // aria-describedby="emailHelp"
              />
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputCorreo1" className="form-label">
              Correo electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputCorreoelectrónico1"
                // aria-describedby="emailHelp"
              />
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputEstado1" className="form-label">
              Estado civil
              </label>
              <input
                type="text"
                value={EstCivil}
                onChange={e => setEstCivil(e.target.value)}
                className="form-control"
                id="exampleInputBinario1"
                // aria-describedby="emailHelp"
              />
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputHijos1" className="form-label">
              Tienes hijos?
              </label>
              <input
                type="text"
                value={hijos}
                onChange={e => setHijos(e.target.value)}
                className="form-control"
                id="exampleInputHijos1"
                // aria-describedby="emailHelp"
              />
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputDate1" className="form-label">
              Fecha de nacimiento
              </label>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="form-control"
                id="exampleInputDate1"
                // aria-describedby="emailHelp"
              />
            </div>
          </div>
          
      

          {/* end col */}
          <div className="col-md-4 ">
            <div className="profile_section">
              <p>Seleccione alguna imagen: </p>
              <img
                src={
                  profilePIcDefault
                }
                alt="profile_pic"
                className="img-thumbnail"
                
                height={250}
                width={250}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input
                className="form-control" 
                type="file" 
                onChange={handleImg}
                id="formFile" 
              />
            </div>
            <button
            type="submit"
            value={Term}
            onChange={e => setTerm(e.target.value)}
            className="form__submit-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
          </div>
        </div>
        </div>
    </>
  );
};

export default HomePage;