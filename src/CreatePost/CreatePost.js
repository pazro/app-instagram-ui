import React, {Component} from 'react';
import './CreatePost.scss';
import { Form as BForm, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import postModel from '../models/post.model'

class CreatePost extends Component {

    submit(values) {
        console.log(values);
    }

    render() {
        return (
            <div className="create-post">
                <h2>Create Post:</h2>
                <Formik initialValues={{image: '', title: '', tags: ''}}
                        validationSchema={postModel}
                        onSubmit={this.submit.bind(this)}>
                    <Form className="col-xs-12 col-sm-6">
                        <BForm.Group controlId="formBasicEmail">
                            <BForm.Label>Load Image:</BForm.Label>
                            <Field type="file" name="image" />
                        </BForm.Group>
                        <BForm.Group controlId="formBasicEmail">
                            <BForm.Label>Post Title:</BForm.Label>
                            <Field name="title" className="form-control"/>
                            <ErrorMessage className="alert alert-danger" name="title" component="div" />
                        </BForm.Group>
                        <BForm.Group controlId="formBasicEmail">
                            <BForm.Label>Post Tags:</BForm.Label>
                            <Field name="tags" className="form-control" />
                        </BForm.Group>
                        <Button variant="primary" type="submit">
                            Share
                        </Button>
                    </Form>
                </Formik>
            </div>

        );
    }
}

export default CreatePost;