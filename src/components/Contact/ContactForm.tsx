import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlassForm = styled.form`
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 500px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
  }
`;

const InputField = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: #333;
  font-size: 16px;
  outline: none;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  margin: 10px 0;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: #333;
  font-size: 16px;
  outline: none;
  resize: none;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  background: #4caf50;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #45a049;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    userEmail: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://email-backend-s33o.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({
          userEmail: "",
          message: "",
        });
      } else {
        toast.error("Failed to submit form. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit form. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <GlassForm onSubmit={handleSubmit}>
        <InputField
          type="email"
          name="userEmail"
          placeholder="Your Email"
          value={formData.userEmail}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </GlassForm>
      <ToastContainer position="bottom-center" />
    </div>
  );
}
