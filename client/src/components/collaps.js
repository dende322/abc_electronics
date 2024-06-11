import React from 'react'

export function collaps(client) {
    return (
        <div className='position-relative text-center py-2 px-4'>
            <div className="collapse" id={`${client._id}`}>
                <div className="card card-body">
                    <div className='row'>
                        <div className='col p-1 m-1 border rounded'>
                            <label className='py-2 col-12 text-bg-dark border rounded'><strong>Nombre</strong></label>
                            <p>{client?.nombre} {client?.apellido}</p>
                        </div>
                        <div className='col p-1 m-1 border rounded'>
                            <label className='py-2 col-12 text-bg-dark border rounded'><strong>Correo</strong></label>
                            <p>{client?.email}</p>
                        </div>
                        <div className='col p-1 m-1 border rounded'>
                            <label className='py-2 col-12 text-bg-dark border rounded'><strong>Direccion</strong></label>
                            <p>{client?.direccion}</p>
                        </div>
                        <div className='col p-1 m-1 border rounded'>
                            <label className='py-2 col-12 text-bg-dark border rounded'><strong>Telefono</strong></label>
                            <p>{client?.telefono}</p>
                        </div>
                        <div className='col p-1 m-1 border rounded'>
                            <label className='py-2 col-12 text-bg-dark border rounded'><strong>Celular</strong></label>
                            <p>{client?.celular}</p>
                        </div>
                        <div className='col p-1 m-1 border rounded'>
                            <label className='py-2 col-12 text-bg-dark border rounded'><strong>Fecha de Nacimiento</strong></label>
                            <p>{client?.f_nacimiento}</p>
                        </div>
                        <div className='col p-1 m-1 border rounded'>
                            <label className='py-2 col-12 text-bg-dark border rounded'><strong>Religion</strong></label>
                            <p>{client?.religion}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col p-1 m-1 border rounded'>
                            <label className='py-2 col-12 text-bg-dark border rounded'><strong>Hobbys</strong></label>
                            {
                                client?.hobbies?.map((hobbie) => (
                                    <p className='m-2 p-2 border rounded'>{hobbie}</p>
                                ))
                            }
                        </div>
                        <div className='col p-1 m-1 border rounded'>
                            <label className='py-2 col-12 text-bg-dark border rounded'><strong>Deportes</strong></label>
                            {
                                client?.deportes?.map((deporte) => (
                                    <p className='m-2 p-2 border rounded'>{deporte}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col p-1 m-1 border rounded'>
                            <label className='py-2 col-12 text-bg-dark border rounded'><strong>Lugar de Nacimiento</strong></label>
                            <div className='p-2'>
                                <label className='py-1 col-12 text-bg-secondary border rounded'><strong>Municipio</strong></label>
                                <p className='m-2 p-2 border rounded'>{client?.l_nacimiento?.m_c}</p>
                                <label className='py-1 col-12 text-bg-secondary border rounded'><strong>Departamento</strong></label>
                                <p className='m-2 p-2 border rounded'>{client?.l_nacimiento?.d_e}</p>
                                <label className='py-1 col-12 text-bg-secondary border rounded'><strong>Pais</strong></label>
                                <p className='m-2 p-2 border rounded'>{client?.l_nacimiento?.pais}</p>
                            </div>
                        </div>
                        <div className='col p-1 m-1 border rounded'>
                            <label className='py-2 col-12 text-bg-dark border rounded'><strong>Lugar de Ubicacion</strong></label>
                            <div className='p-2'>
                                <label className='py-1 col-12 text-bg-secondary border rounded'><strong>Municipio</strong></label>
                                <p className='m-2 p-2 border rounded'>{client?.l_ubicacion?.m_c}</p>
                                <label className='py-1 col-12 text-bg-secondary border rounded'><strong>Departamento</strong></label>
                                <p className='m-2 p-2 border rounded'>{client?.l_ubicacion?.d_e}</p>
                                <label className='py-1 col-12 text-bg-secondary border rounded'><strong>Pais</strong></label>
                                <p className='m-2 p-2 border rounded'>{client?.l_ubicacion?.pais}</p>
                                <label className='py-1 col-12 text-bg-secondary border rounded'><strong>Codigo Postal</strong></label>
                                <p className='m-2 p-2 border rounded'>{client?.l_ubicacion?.z_code}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col p-1 m-1 border rounded'>
                            <label className='py-2 col-12 text-bg-dark border rounded'><strong>Informacion Referente a los Hijos</strong></label>
                            <div className='p-2'>
                                <div className='row'>
                                    {
                                        client?.hijos?.map((hijo) => (
                                            <div className='col'>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <label className='py-2 col-12 text-bg-secondary border rounded'><strong>Fecha de Nacimeinto</strong></label>
                                                        <p className='border rounded'>{hijo?.f_nacimiento}</p>
                                                        <label className='py-2 col-12 text-bg-secondary border rounded'><strong>Genero</strong></label>
                                                        <p className='border rounded'>{hijo?.genero === 'F' ? 'Femenino' : 'Masculino'}</p>
                                                        <label className='py-2 col-12 text-bg-secondary border rounded'><strong>Se encuentra Estudiando?</strong></label>
                                                        <p className='border rounded'>{hijo?.estudia === true ? 'Si' : 'No'}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col p-1 m-1 border rounded'>
                            <label className='py-2 col-12 text-bg-dark border rounded'><strong>Informacion del Estdo Civil</strong></label>
                            <div className='p-2'>
                                <div className='row'>
                                    {
                                        client?.estado_c?.map((estado) => (
                                            <div className='col'>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <label className='py-2 col-12 text-bg-secondary border rounded'><strong>Estado</strong></label>
                                                        <p className='border rounded'>{estado?.estado}</p>
                                                        <label className='py-2 col-12 text-bg-secondary border rounded'><strong>Fecha</strong></label>
                                                        <p className='border rounded'>{estado?.f_estado}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
