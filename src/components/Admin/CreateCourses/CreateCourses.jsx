import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import cursor from '../../../assets/images/learning.jpg';
import Sidebar from '../Dashboard/Sidebar';

const CreateCourses = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const categories = [
    'web developement',
    'Data Structure',
    'Machine Learning',
    'Python',
    'Javascript',
    'Java',
    'Springboot',
    'flask',
  ];

  const imagePrevHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  return (
    <Container>
      <Row
        className="my-3"
        style={{ cursor: `url(${cursor}),default`, height: '90vh' }}
      >
        <Col md={10}>
          <div>
            <form>
              <div>
                <div>
                  <h1 className="fs-4 fw-semibold">Create Courses</h1>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column ">
                  <label>Title</label>
                  <input
                    type="text"
                    onChange={e => {
                      setTitle(e.target.value);
                    }}
                    value={title}
                    placeholder="Enter your Title"
                    className="border rounded p-2"
                  />
                </div>
                <div className="d-flex flex-column">
                  <label>description</label>
                  <input
                    type="text"
                    onChange={e => {
                      setDescription(e.target.value);
                    }}
                    value={description}
                    placeholder="Enter your description"
                    className="border rounded p-2"
                  />
                </div>

                <div className="d-flex flex-column">
                  <label>Created By</label>
                  <input
                    type="text"
                    onChange={e => {
                      setCreatedBy(e.target.value);
                    }}
                    value={createdBy}
                    placeholder="Creator Name"
                    className="border rounded p-2"
                  />
                </div>

                <div className="d-flex flex-column">
                  <label>Select Category</label>
                  <select
                    value={category}
                    onChange={e => {
                      setCategory(e.target.value);
                    }}
                    className="border rounded p-2"
                  >
                    {categories.map(item => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div className="d-flex flex-column my-2">
                  <label>
                    <span className="" aria-hidden="true">
                      choose file
                    </span>
                    <input
                      type="file"
                      value={image}
                      id="upload"
                      style={{ display: 'none' }}
                      onChange={imagePrevHandler}
                    />
                  </label>
                </div>

                <div>
                  {imagePrev && (
                    <img
                      src={imagePrev}
                      alt="pic"
                      style={{
                        objectFit: 'cover',
                        height: '200px',
                        width: '100%',
                      }}
                    />
                  )}
                </div>
                <div>
                  <Button variant="secondary" className="my-3" type="submit">
                    Create
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Col>
        <Col md={2}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default CreateCourses;
