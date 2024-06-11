import React, { useEffect, useState } from 'react';
import { show_alerta } from '../functions';
import { Client } from '../api/client'
import { collaps } from './collaps';

const clientController = new Client();


const ShowClients = () => {
    const [error, setError] = useState('');
    const [clients, setClients] = useState([]);
    const [client, setClient] = useState({});
    const [title, setTitle] = useState('');
    const [operation, setOperation] = useState(0);
    //lugar de nacimiento
    const [l_nacimiento, setL_nacimiento] = useState({});
    const [l_nacimiento_m_c, setl_nacimiento_m_c] = useState('');
    const [l_nacimiento_d_e, setl_nacimiento_d_e] = useState('');
    const [l_nacimiento_pais, setl_nacimiento_pais] = useState('');
    //lugar de ubicacion
    const [l_ubicacion, setL_ubicacion] = useState({});
    const [l_ubicacion_m_c, setl_ubicacion_m_c] = useState('');
    const [l_ubicacion_d_e, setl_ubicacion_d_e] = useState('');
    const [l_ubicacion_pais, setl_ubicacion_pais] = useState('');
    const [l_ubicacion_z_code, setl_ubicacion_z_code] = useState('');
    //
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [f_nacimiento, setF_nacimiento] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [celular, setCelular] = useState('');
    const [password, setPassword] = useState('');
    const [religion, setReligion] = useState('');
    const [hobbie, setHobbie] = useState('')
    const [hobbies, setHobbies] = useState([]);
    const [deporte, setDeporte] = useState('');
    const [deportes, setDeportes] = useState([]);
    //hijos
    const [hijos, setHijos] = useState([]);
    const [hijos_f_nacimeinto, setHijos_f_nacimeinto] = useState('');
    const [hijos_genero, setHijos_genero] = useState('');
    const [hijos_estudia, setHijos_estudia] = useState(Boolean);
    //estado civil
    const [estado_c, setEstado_c] = useState([]);
    const [estado_c_estado, setestado_c_estado] = useState('');
    const [estado_c_f_estado, setestado_c_f_estado] = useState('');

    useEffect(() => {
        getClients();
    }, []);

    const getClients = async () => {
        try {
            setError("");
            const response = await clientController.getClients();
            setClients(response)
        } catch (error) {
            setError(error);
        }
    }

    const deleteClient = async (id) => {
        try {
            setError('');
            await clientController.deleteClient(id);
            getClients();
        } catch (error) {
            setError(error);
        }
    }

    const getClient = async (id) => {
        try {
            setError('');
            setClient(await clientController.getClient(id));
        } catch (error) {
            setError(error);
        }
    }

    const openModal = (op, id, nombre,
        apellido, direccion, f_nacimiento,
        email, telefono, celular,
        religion, hobbies, deportes,
        hijos, estado_c,
        l_nacimiento_m_c, l_nacimiento_d_e, l_nacimiento_pais,
        l_ubicacion_m_c, l_ubicacion_d_e, l_ubicacion_pais, l_ubicacion_z_code) => {
        setId('');
        setNombre('');
        setApellido('');
        setDireccion('');
        setF_nacimiento('');
        setEmail('');
        setTelefono('');
        setCelular('');
        setReligion('');
        setHobbies([]);
        setDeportes([]);
        setHijos([]);
        setEstado_c([]);

        setL_nacimiento({});
        setl_nacimiento_m_c('');
        setl_nacimiento_d_e('');
        setl_nacimiento_pais('');

        setL_ubicacion({});
        setl_ubicacion_m_c('');
        setl_ubicacion_d_e('');
        setl_ubicacion_pais('');
        setl_ubicacion_z_code('');

        if (op === 0) {
            setOperation(0);
            setTitle('Registro de Cliente');
        } else if (op === 1) {
            setOperation(1);
            setTitle('Editar Cliente');
            setId(id);
            setNombre(nombre);
            setApellido(apellido);
            setDireccion(direccion);
            setF_nacimiento(f_nacimiento);
            setEmail(email);
            setTelefono(telefono);
            setCelular(celular);
            setReligion(religion);
            setHobbies(hobbies);
            setDeportes(deportes);
            setHijos(hijos);
            setEstado_c(estado_c);

            setl_nacimiento_m_c(l_nacimiento_m_c);
            setl_nacimiento_d_e(l_nacimiento_d_e);
            setl_nacimiento_pais(l_nacimiento_pais);
            setL_nacimiento({
                "m_c": l_nacimiento_m_c,
                "d_e": l_nacimiento_d_e,
                "pais": l_nacimiento_pais
            });

            setl_ubicacion_m_c(l_ubicacion_m_c);
            setl_ubicacion_d_e(l_ubicacion_d_e);
            setl_ubicacion_pais(l_ubicacion_pais);
            setl_ubicacion_z_code(l_ubicacion_z_code);
            setL_ubicacion({
                "m_c": l_ubicacion_m_c,
                "d_e": l_ubicacion_d_e,
                "pais": l_ubicacion_pais,
                "z_code": l_ubicacion_z_code
            });
        }
        window.setTimeout(function () {
            document.getElementById('nombre').focus();
        }, 500);
    }

    const validar = () => {
        var data;

        if (nombre.trim() === '') {
            show_alerta('El nombre es obligatorio', 'warning');
        } else if (direccion.trim() === '') {
            show_alerta('La direccion es obligatorio', 'warning');
        } else if (email.trim() === '') {
            show_alerta('El correo es obligatorio', 'warning');
        } else if (celular.trim() === '') {
            show_alerta('El celular es obligatorio', 'warning');
        } else {

            data = {
                "nombre": nombre.trim(),
                "apellido": apellido.trim(),
                "direccion": direccion.trim(),
                "f_nacimiento": f_nacimiento,
                "email": email.trim(),
                "telefono": telefono.trim(),
                "celular": celular.trim(),
                "password": password.trim(),
                "hijos": hijos,
                "l_nacimiento": l_nacimiento,
                "l_ubicacion": l_ubicacion,
                "religion": religion.trim(),
                "hobbies": hobbies,
                "deportes": deportes,
                "estado_c": estado_c
            }

            enviarSolicitud(data);

        }
    }

    const enviarSolicitud = async (data) => {
        if (operation === 0) {
            const response = await clientController.createClient(data, 'POST');
            if (response === false) {
                show_alerta("Error en la creacion", "error")
            } else {
                show_alerta("Creado con exito", "success");
                document.getElementById('btnCerrar').click();
                getClients();
            }
        } else if (operation === 1) {
            const response = await clientController.updateClient(id, data, 'PATCH');
            if (response === false) {
                show_alerta("Error en la creacion", "error")
            } else {
                show_alerta(response.msg, "success");
                document.getElementById('btnCerrar').click();
                getClients();
            }
        }
    }

    return (
        <div className='App'>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='d-grid mx-aotu'>
                            <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalClients' onClick={() => openModal(0)}>
                                <i className='fa-solid fa-circle-plus'></i> Agregar
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Correo</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                <tbody className='table-group-divider'>
                                    {
                                        clients.map((client, i) => (
                                            <>
                                                <tr key={client._id}>
                                                    <td>{(i + 1)}</td>
                                                    <td>{client?.nombre} {client?.apellido}</td>
                                                    <td>{client?.email}</td>
                                                    <td>{client?.role}</td>
                                                    <td>
                                                        <button className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalClients' onClick={() => openModal(
                                                            1,
                                                            client?._id,
                                                            client?.nombre,
                                                            client?.apellido,
                                                            client?.direccion,
                                                            client?.f_nacimiento,
                                                            client?.email,
                                                            client?.telefono,
                                                            client?.celular,
                                                            client?.religion,
                                                            client?.hobbies,
                                                            client?.deportes,
                                                            client?.hijos,
                                                            client?.estado_c,
                                                            client?.l_nacimiento?.m_c,
                                                            client?.l_nacimiento?.d_e,
                                                            client?.l_nacimiento?.pais,
                                                            client?.l_ubicacion?.m_c,
                                                            client?.l_ubicacion?.d_e,
                                                            client?.l_ubicacion?.pais,
                                                            client?.l_ubicacion?.z_code)} >
                                                            <i className='fa-solid fa-edit'></i>
                                                        </button>
                                                        &nbsp;
                                                        <button className='btn btn-danger' onClick={() => deleteClient(client._id)}>
                                                            <i className='fa-solid fa-trash'></i>
                                                        </button>
                                                        &nbsp;
                                                        <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target={`#${client._id}`} aria-expanded="false" onClick={() => getClient(client._id)}>
                                                            <i className="fa-solid fa-eye"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                </div>
                {
                    <div className='row'>
                        <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                            {collaps(client)}
                        </div>
                    </div>
                }
            </div>
            <div id='modalClients' className='modal fade' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <label className='h5'>{title}</label>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <input type='hidden' id='id' />
                            <div className="position-relative text-center py-2 px-4">
                                Informacion personal
                            </div>
                            <hr />
                            {/*nombre*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-user'></i></span>
                                <input type='text' id='nombre' className='form-control' placeholder='Nombre' value={nombre}
                                    onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            {/*apellido*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-user'></i></span>
                                <input type='text' id='apellido' className='form-control' placeholder='Apellido' value={apellido}
                                    onChange={(e) => setApellido(e.target.value)} />
                            </div>
                            {/*direccion*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-diamond-turn-right"></i></span>
                                <input type='text' id='direccion' className='form-control' placeholder='Direccion' value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)} />
                            </div>
                            {/*fecha de nacimiento*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-calendar-days"></i></span>
                                <label className='input-group-text'>Fecha de nacimiento</label>
                                <input type='date' id='f_nacimiento' className='form-control' placeholder='Fecha de nacimiento' value={f_nacimiento}
                                    onChange={(e) => setF_nacimiento(e.target.value)} />
                            </div>
                            {/*email*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-envelope"></i></span>
                                <input type='email' id='email' className='form-control' placeholder='Correo' value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            {/*telefono*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-phone"></i></span>
                                <input type='number' id='telefono' className='form-control' placeholder='Telefono' value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)} />
                            </div>
                            {/*celular*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-mobile-retro"></i></span>
                                <input type='number' id='celular' className='form-control' placeholder='Celular' value={celular}
                                    onChange={(e) => setCelular(e.target.value)} />
                            </div>
                            {/*clave*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-key"></i></span>
                                <input type='text' id='password' className='form-control' placeholder='Clave' value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {/*religion*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-person-praying"></i></span>
                                <input type='text' id='religion' className='form-control' placeholder='Religion' value={religion}
                                    onChange={(e) => setReligion(e.target.value)} />
                            </div>
                            {/*hobbies*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-face-smile"></i></span>
                                <input type='text' id='hobbie' className='form-control' placeholder='Hobby' value={hobbie}
                                    onChange={(e) => setHobbie(e.target.value)} />
                                <button type='submit' className='btn btn-dark' onClick={() => setHobbies([...hobbies, hobbie])}>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <div className="row mb-3 position-relative text-center">
                                {hobbies.map((h) => (
                                    <div className="col border rounded">{h}</div>
                                ))}
                            </div>
                            {/*deportes*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-volleyball"></i></span>
                                <input type='text' id='deporte' className='form-control' placeholder='Deporte' value={deporte}
                                    onChange={(e) => setDeporte(e.target.value)} />
                                <button type='submit' className='btn btn-dark' onClick={() => setDeportes([...deportes, deporte])}>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <div className="row mb-3 position-relative text-center">
                                {deportes.map((d) => (
                                    <div className="col border rounded">{d}</div>
                                ))}
                            </div>
                            <hr />
                            {/*informacion de nacimeinto*/}
                            <div className="position-relative text-center py-2 px-4">
                                Informacion de nacimiento
                            </div>
                            {/*municipio*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-city"></i></span>
                                <input type='text' id='l_nacimiento_m_c' className='form-control' placeholder='Municipio' value={l_nacimiento_m_c}
                                    onChange={(e) => setl_nacimiento_m_c(e.target.value)} />
                            </div>
                            {/*departamento*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-bullseye"></i></span>
                                <input type='text' id='l_nacimiento_d_e' className='form-control' placeholder='Departamento' value={l_nacimiento_d_e}
                                    onChange={(e) => setl_nacimiento_d_e(e.target.value)} />
                            </div>
                            {/*pais*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-earth-americas"></i></span>
                                <input type='text' id='l_nacimiento_pais' className='form-control' placeholder='Pais' value={l_nacimiento_pais}
                                    onChange={(e) => setl_nacimiento_pais(e.target.value)} />
                            </div>
                            <div className="position-relative text-center py-2">
                                <button type='submit' className='btn btn-dark' onClick={() => setL_nacimiento(
                                    {
                                        "m_c": l_nacimiento_m_c,
                                        "d_e": l_nacimiento_d_e,
                                        "pais": l_nacimiento_pais
                                    }
                                )}>
                                    <i className="fa-solid fa-plus px-5"></i>
                                </button>
                            </div>
                            {/*informacion de ubicacion*/}
                            <div className="position-relative text-center py-2 px-4">
                                Informacion de ubicacion
                            </div>
                            {/*municipio*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-city"></i></span>
                                <input type='text' id='l_ubicacion_m_c' className='form-control' placeholder='Municipio' value={l_ubicacion_m_c}
                                    onChange={(e) => setl_ubicacion_m_c(e.target.value)} />
                            </div>
                            {/*departamento*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-bullseye"></i></span>
                                <input type='text' id='l_ubicacion_d_e' className='form-control' placeholder='Departamento' value={l_ubicacion_d_e}
                                    onChange={(e) => setl_ubicacion_d_e(e.target.value)} />
                            </div>
                            {/*pais*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-earth-americas"></i></span>
                                <input type='text' id='l_ubicacion_pais' className='form-control' placeholder='Pais' value={l_ubicacion_pais}
                                    onChange={(e) => setl_ubicacion_pais(e.target.value)} />
                            </div>
                            {/*codigo postal*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-signs-post"></i></span>
                                <input type='text' id='l_ubicacion_z_code' className='form-control' placeholder='Codigo Postal' value={l_ubicacion_z_code}
                                    onChange={(e) => setl_ubicacion_z_code(e.target.value)} />
                            </div>
                            <div className="position-relative text-center py-2">
                                <button type='submit' className='btn btn-dark' onClick={() => setL_ubicacion(
                                    {
                                        "m_c": l_ubicacion_m_c,
                                        "d_e": l_ubicacion_d_e,
                                        "pais": l_ubicacion_pais,
                                        "z_code": l_ubicacion_z_code
                                    }
                                )}>
                                    <i className="fa-solid fa-plus px-5"></i>
                                </button>
                            </div>
                            <hr />
                            <div className="position-relative text-center py-2 px-4">
                                Informacion de los hijos
                            </div>
                            <hr />
                            {/*fecha de nacimiento*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-calendar-days"></i></span>
                                <label className='input-group-text'>Fecha de nacimiento</label>
                                <input type='date' id='hijos_f_nacimeinto' className='form-control' placeholder='Fecha de nacimiento' value={hijos_f_nacimeinto}
                                    onChange={(e) => setHijos_f_nacimeinto(e.target.value)} />
                            </div>
                            {/*genero*/}
                            <div className='input-group mb-3' role="group">
                                <span className='input-group-text'><i className="fa-solid fa-venus-mars"></i></span>
                                <label className="input-group-text">Genero</label>

                                <input type="radio" className="btn-check" id='hijos_genero_M' name="btnradio" value='M' autoComplete="off" onChange={(e) => setHijos_genero(e.target.value)} />
                                <label className="btn btn-outline-dark" for="hijos_genero_M">Maculino</label>

                                <input type="radio" className="btn-check" id='hijos_genero_F' name="btnradio" value="F" autoComplete="off" onChange={(e) => setHijos_genero(e.target.value)} />
                                <label className="btn btn-outline-dark" for="hijos_genero_F">Femenino</label>
                            </div>
                            {/*Estudia*/}
                            <div className='input-group mb-3' role="group">
                                <span className='input-group-text'><i className="fa-solid fa-building-columns"></i></span>
                                <label className="input-group-text">¿Se encuentra estudiando?</label>

                                <input type="radio" className="btn-check" id='hijos_estudia_s' name="btnradio_2" value={true} autoComplete="off" onChange={(e) => setHijos_estudia(e.target.value)} />
                                <label className="btn btn-outline-dark" for="hijos_estudia_s">Si</label>

                                <input type="radio" className="btn-check" id='hijos_estudia_n' name="btnradio_2" value={false} autoComplete="off" onChange={(e) => setHijos_estudia(e.target.value)} />
                                <label className="btn btn-outline-dark" for="hijos_estudia_n">No</label>
                            </div>
                            <div className="position-relative text-center py-2">
                                <button type='submit' className='btn btn-dark' onClick={() => setHijos([
                                    ...hijos,
                                    {
                                        "f_nacimiento": hijos_f_nacimeinto,
                                        "genero": hijos_genero,
                                        "estudia": hijos_estudia
                                    }
                                ])}>
                                    <i className="fa-solid fa-plus px-5"></i>
                                </button>
                            </div>
                            <div className='row  mb-3 position-relative text-center'>
                                {
                                    hijos.map((hijo) => (
                                        <div className='col'>
                                            <div className="card">
                                                <div className="card-body">
                                                    <p><strong>Fecha de Nacimiento</strong><br />{hijo.f_nacimiento}</p>
                                                    <p><strong>Genero</strong><br />{hijo.genero === 'F' ? 'Femenino' : 'Masculino'}</p>
                                                    <p><strong>Estudia?</strong><br />{hijo.estudia === true ? 'Si' : 'No'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <hr />
                            <div className="position-relative text-center py-2 px-4">
                                Estado Civil
                            </div>
                            <hr />
                            {/*Estado_c*/}
                            <div className='input-group mb-3' role="group">
                                <span className='input-group-text'><i className="fa-solid fa-ring"></i></span>

                                <select className="form-select form-control" id="estado" aria-label="Floating label select example" value={estado_c_estado} onChange={(e) => setestado_c_estado(e.target.value)}>
                                    <option defaultValue={true}>Estado CiviL</option>
                                    <option value="Soltero">Soltero</option>
                                    <option value="Divorciado">Divorciado</option>
                                    <option value="Casado">Casado</option>
                                    <option value="Viudo/a">Viudo/a</option>
                                    <option value="Matrimonio Religioso">Matrimonio Religioso</option>
                                    <option value="Matrimonio Civil">Matrimonio Civil</option>
                                    <option value="Union Marital de Hecho">Union Marital de Hecho</option>
                                    <option value="Union Libre">Union Libre</option>
                                </select>
                            </div>
                            {/*fecha de estado*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className="fa-solid fa-calendar-days"></i></span>
                                <label className='input-group-text'>Fecha</label>
                                <input type='date' id='f_estado' className='form-control' placeholder='Fecha' value={estado_c_f_estado}
                                    onChange={(e) => setestado_c_f_estado(e.target.value)} />
                            </div>
                            <div className="position-relative text-center py-2">
                                <button type='submit' className='btn btn-dark' onClick={() => setEstado_c([
                                    ...estado_c,
                                    {
                                        "estado": estado_c_estado,
                                        "f_estado": estado_c_f_estado
                                    }
                                ])}>
                                    <i className="fa-solid fa-plus px-5"></i>
                                </button>
                            </div>
                            <div className='row  mb-3 position-relative text-center'>
                                {
                                    estado_c.map((estado) => (
                                        <div className='col'>
                                            <div className="card">
                                                <div className="card-body">
                                                    <p><strong>Estado</strong><br />{estado.estado}</p>
                                                    <p><strong>Fecha</strong><br />{estado.f_estado}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <hr />
                            <div className='d-grid col-6 mx-auto'>
                                <button className='btn btn-success' onClick={() => validar()}>
                                    <i className='fa-solid fa-floppy-disk'></i>
                                </button>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-secondary' id='btnCerrar' type='button' data-bs-dismiss='modal'>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowClients