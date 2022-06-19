import { Button, Form, Input } from "antd";
import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
    const[file,setFile]=useState();
  const onFinish = (values) => {
const formData=new FormData();

formData.append("name",values.name)
formData.append("email",values.email)
formData.append("address",values.address)
formData.append("phone",values.phone)
formData.append("job",values.job)
formData.append("salary",values.salary)
formData.append("education",values.education)
formData.append("location",values.location)
// formData.append("address",values.address)
formData.append("file",file)

const configAxios={
    headers:{
        "content-type":"multipart/form-data"
    }
}


    axios
      .post("http://localhost:7000/form/postall",formData,configAxios )
      .then(() => console.log("data posted"))
      .catch(() => {
        console.log("errr");
      });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFileChange=(event)=>{
    setFile(event.target.files[0])
  }

  return (<div >
    <Form
      name="basic"
      labelCol={{
        span: 8
      }}
      wrapperCol={{
        span: 16
      }}
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="phone"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="address"
        name="address"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="education"
        name="education"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Job Location"
        name="job"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Job salary"
        name="salary"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="image"
        name="img"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        
    <input type="file"  onChange={onFileChange}/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form></div>
  );
};

export default App;
