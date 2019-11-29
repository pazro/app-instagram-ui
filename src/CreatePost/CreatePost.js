import React, {Component} from 'react';
import './CreatePost.scss';
import { Form as BForm, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import postModel from '../models/post.model';
import {FaCloudUploadAlt, FaFileImage, FaRegLightbulb} from "react-icons/all";
import TagsInput from 'react-tagsinput';

class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: []
        }
    }

    handleTagsChange(tags) {
        this.setState({
            tags: tags
        })
    }

    submit(values) {
        console.log(values);
    }

    render() {
        return (
            <div className="create-post">
                {/*<h2 className="form-title">Create Post:</h2>*/}
                <Formik initialValues={{image: '', title: '', tags: ''}}
                        validationSchema={postModel}
                        onSubmit={this.submit.bind(this)}>
                    <Form className="col-xs-12 col-sm-6">
                        <h2 className="form-title">Create Post:</h2>
                        <BForm.Group controlId="formBasicFile">
                            <BForm.Label>Load Image:</BForm.Label>
                            <Field type="file" name="image" id="image" className="form-control-image"/>
                            <label htmlFor="image" className="upload-btn">
                                <span>
                                    <FaFileImage className="upload-icon"/>
                                    Select your image...
                                </span>
                            </label>
                            {/*<br/><Button variant="primary" className="upload-btn">*/}
                            {/*    <FaFileImage className="upload-icon"/>*/}
                            {/*    Select your image...*/}
                            {/*</Button>*/}
                        </BForm.Group>
                        <BForm.Group controlId="formBasicEmail">
                            <BForm.Label>Post Title:</BForm.Label>
                            <Field name="title" className="form-control" placeholder="Place your post title here"/>
                            <ErrorMessage className="alert alert-danger" name="title" component="div" />
                        </BForm.Group>
                        <BForm.Group controlId="formBasicEmail">
                            <BForm.Label>Post Tags:</BForm.Label>
                            {/*<Field*/}
                            {/*    name="tags"*/}
                            {/*    className="form-control"*/}
                                <TagsInput
                                value={this.state.tags}
                                onChange={this.handleTagsChange.bind(this)}
                                className="tags-input"
                                />
                            <FaRegLightbulb/><span>Press Enter for each tag</span>
                            {/*/>*/}
                        </BForm.Group>
                        <Button variant="primary" type="submit" className="share-btn">
                            <FaCloudUploadAlt className="share-icon" />
                            Upload your post...
                        </Button>
                    </Form>
                </Formik>
            </div>

        );
    }
}

export default CreatePost;