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

const ModalAlert = ( props ) => {
    const [ show, setShow ] = useState( false );
    const handleClose = () => setShow( false );
    const handleShow = () => setShow( true );
    const onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData( e.target ),
            formDataObj = Object.fromEntries( formData.entries() )
        console.log( formDataObj )
    }
    return ( <>
        <Button variant="primary" className={ props.btnCat } onClick={ handleShow }>
            <span className="text-white">{ props.text }</span>
            <i className={ props.icon }/>
        </Button>

        <Modal show={ show } onHide={ handleClose }>
            <Modal.Header closeButton>
                <Modal.Title>
                    پنل عضویت
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={ onFormSubmit }>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>نام کاربری:</Form.Label>
                        <Form.Control type="text" placeholder="نام"/>
                        <Form.Text className="text-muted">
                            لطفا کیبورد خود را در حالت انگلیسی بگذارید
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>
                            ایمیل:
                        </Form.Label>
                        <Form.Control type="email" placeholder="ایمیل"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>
                            شماره تلفن:
                        </Form.Label>
                        <Form.Control type="tel" placeholder="09120000000"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>
                            کلمه عبور:
                        </Form.Label>
                        <Form.Control type="password" placeholder="پسورد"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="مرا به خاطر بسپار"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={ handleClose }>
                        <span className="text-white">
                            بستن
                        </span>
                </Button>
                <Button variant="primary" type="submit">
                    <span className="text-white">
                            ثبت نام
                        </span>
                </Button>
            </Modal.Footer>
        </Modal>
    </> );
}

export default ModalAlert;