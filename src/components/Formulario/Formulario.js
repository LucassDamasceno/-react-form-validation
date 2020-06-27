import React from 'react';
import './Formulario.css'
import { FormGroup, Label, Card, Button } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Formulario = () => {

    const initialValues = {
        user: '',
        password: ''
    };
    const validations = yup.object().shape({
        user: yup.string().email().required(),
        password: yup.string().required().min(8)
    });
    function handleSubmit(values) {
        alert('Fomulário validado com sucesso!!!')
    }

    return (
        <div className="form">
            <Card className="p-3">
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validations}>
                    {({ errors, touched }) => {
                        return (
                            <Form>
                                <h1 className="welcome">Welcome</h1>
                                <FormGroup>
                                    <Label>User</Label>
                                    <Field
                                        className={`form-control ${errors.user && touched.user ? 'is-invalid' : ''}`}
                                        name="user"
                                        type="text"
                                        placeholder="User" />
                                    <ErrorMessage className="invalid-feedback" name="user" component="div" />
                                </FormGroup>
                                <FormGroup>
                                    <Label >Password</Label>
                                    <Field
                                        className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                                        name="password"
                                        type="password"
                                        placeholder="Password" />
                                    <ErrorMessage className="invalid-feedback" name="password" component="div" />
                                </FormGroup>
                                <Button block type="submit" className="btnLogin">Login</Button>
                            </Form>
                        )
                    }}

                </Formik>
            </Card>
        </div >
    )
}
export default Formulario;
