import React, { useState } from 'react';
import PropTypes from 'prop-types'

const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda,guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    })
    const[error,guardarError] = useState(false)

    const {artista, cancion} = busqueda

    // funcion a cada input para leer su contenido
    const actualizarContenido = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    // consultar las API`S
    const buscarInformacion = e =>{
        e.preventDefault()

        // validar
        if (artista.trim() === '' || cancion.trim() === '') {
            guardarError(true)
            return
        }
        guardarError(false)
        
        // pasar al componente principal
        guardarBusquedaLetra(busqueda)
    }

    return ( 
        <div className='bg-info'>
            {error ? <p className='alert alert-danger text-center p-2'>Todos los campos son obligatorios</p> : null}
            <div className='container'>
                <div className='row'>
                    <form
                        onSubmit={buscarInformacion}
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                    >
                        <fieldset>
                            <legend className='text-center'>Buscador letras de canciones</legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artista</label>
                                        <input 
                                            type='text'
                                            placeholder='Nombre Artista'
                                            name='artista'
                                            className='form-control'
                                            onChange={actualizarContenido}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                            <label>Cancion</label>
                                            <input 
                                                type='text'
                                                placeholder='Nombre Cancion'
                                                name='cancion'
                                                className='form-control'
                                                onChange={actualizarContenido}
                                                value={cancion}
                                            />
                                    </div>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarBusquedaLetra: PropTypes.func.isRequired
}
 
export default Formulario;