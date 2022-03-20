import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalAlert = ( props ) => {
    const [ show, setShow ] = useState( false );

    const handleClose = () => setShow( false );
    const handleShow = () => setShow( true );

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
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>نام کاربری (ایمیل):</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                            لطفا همه را به حروف کوچک وارد کنید
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>
                            کلمه عبور:
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
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
                <Button variant="primary" onClick={ handleClose }>
                    <span className="text-white">
                            ثبت نام
                        </span>
                </Button>
            </Modal.Footer>
        </Modal>
    </> );
}

export default ModalAlert;