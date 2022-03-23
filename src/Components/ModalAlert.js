/*
 * In this component we get user data and send it to local DB
 * In navbar we have a button, by clicking u can see a modal which has 4 inputs.
 * - name
 * - email
 * - phone number
 * - password
 * After getting this details from user, we store it on our local DB (./DB/DB.json)
 */
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import data from "./DB/DB.json";
import { useLocalStorage } from "./Store/useLocalStorage";

function ModalAlert( props ) {
    // Toggle Show & Close Modal.
    const [ show, setShow ] = useState( false );
    const handleClose = () => setShow( false );
    const handleShow = () => setShow( true );

    /*
     * import json file and try to write something in it.
     */

    // set the initial state (an array with 1 object to start (this can be an empty object to start))
    // inject stored data in users
    const [ users, setUsers ] = useState( data );
    // state to get name
    const [ name, setName ] = useState( "" );

    // state to get email
    const [ email, setEmail ] = useState( "" );

    // state to get phone num
    const [ phone, setPhone ] = useState( "" );

    // state to get password
    const [ password, setPassword ] = useState( "" );

    // state to get valueOf CheckBox
    const [ checked, setChecked ] = useLocalStorage( "checked", false );

    // declare the function
    function handleAddNewUser( e ) {
        // prevent loading page
        e.preventDefault();
        // it's important to not mutate state directly, so here we are creating a copy of the current state using the spread syntax
        const updateUsers = [
            // copy the current users state
            ...users, // now you can add a new object to add to the array
            {
                // using the length of the array for a unique id
                id: users.length + 1, // adding a new id
                name: name, // adding a new name
                email: email, // new email
                password: password, // new password
                phone: phone, // new phone
            },
        ];
        // update the state to the updatedUsers
        setUsers( updateUsers );

        //close modal after submit
        setShow( false )
        // store data into localstorage.
        localStorage.setItem( 'stored_data', JSON.stringify( updateUsers ) );
    }

    /* return */
    return (
        <>
            <Button variant="primary" className={ props.btnCat } onClick={ handleShow }>
                <span className="text-white">{ props.text }</span>
                <i className={ props.icon }/>
            </Button>

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>پنل عضویت</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* end - edit form */ }
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>نام کاربری:</Form.Label>
                            <Form.Control
                                onChange={ ( e ) => setName( e.target.value ) }
                                type="text"
                                placeholder="نام"
                            />
                            <Form.Text className="text-muted">
                                لطفا کیبورد خود را در حالت انگلیسی بگذارید
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>ایمیل:</Form.Label>
                            <Form.Control
                                onChange={ ( e ) => setEmail( e.target.value ) }
                                type="email"
                                placeholder="ایمیل"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>شماره تلفن:</Form.Label>
                            <Form.Control
                                onChange={ ( e ) => setPhone( e.target.value ) }
                                type="tel"
                                placeholder="09120000000"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>کلمه عبور:</Form.Label>
                            <Form.Control
                                onChange={ ( e ) => setPassword( e.target.value ) }
                                type="password"
                                placeholder="پسورد"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                checked={ checked }
                                onChange={ ( e ) => setChecked( e.target.checked ) }
                                type="checkbox"
                                label="مرا به خاطر بسپار"
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        <span className="text-white">بستن</span>
                    </Button>
                    <Button variant="primary" type="submit" onClick={ handleAddNewUser }>
                        <span className="text-white">ثبت نام</span>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAlert;
