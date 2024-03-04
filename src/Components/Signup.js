import './css files/SignupCss.css'
import  { useLanguage } from './Context/LanguageContext'

import React from "react";
import { useState } from "react";
const Signup = () => {

    const {language}=useLanguage();


const englishText= {

title:'Signup',
name:'name',
Username: "Username",
Emailaddress: "Emailaddress",
Password: "Password",
Confirmpassword: "Confirmpassword",
submit:'SignUp'

}


const arabicText= {

    title:'سجل الان',
    name:'الاسم',
    Username: "اسم المستخدم",
    Emailaddress: "عنوان البريد الإلكتروني",
    Password: "كلمة المرور",
    Confirmpassword: "تأكيد كلمة المرور",
    submit:'تسجيل'
    
    
    }


const getText =()=>{

    return language === 'ar' ? arabicText : englishText;

}

    const [Form, setForm] = useState({
        name: "",
        Username: "",
        Emailaddress: "",
        Password: "",
        Confirmpassword: "",

    });


    const [FormErrors, setFormErrors] = useState({
        name: null,
        Username: null,
        Emailaddress: null,
        Password: null,
        Confirmpassword: null,
    });



    const handleFieldChange = (event) => {
        console.log(event.target.value);
        const field_name = event.target.name;
        const field_value = event.target.value;

        if (field_name === "name") {
            setForm({
                ...Form,
                name: field_value,
            });

            setFormErrors({
                ...FormErrors,
                name: field_value.length === 0 ? "This field is required" : null,
            });
        }

        if (field_name === "Username") {
            setForm({
                ...Form,
                Username: field_value,
            });

            setFormErrors({
                ...FormErrors,
                Username:
                    field_value.length === 0
                        ? "This field is required"
                        : null
            });
        }

        if (field_name === "Emailaddress") {
            setForm({
                ...Form,
                Emailaddress: field_value,
            });

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            setFormErrors({
                ...FormErrors,
                Emailaddress:
                    field_value.length === 0
                        ? "This field is required"
                        : !emailRegex.test(field_value)
                            ? "Invalid email format"
                            : null,
            });
        }


        if (field_name === "Password") {
            setForm({
                ...Form,
                Password: field_value,
            });

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            setFormErrors({
                ...FormErrors,
                Password:
                    field_value.length === 0
                        ? "This field is required"
                        : !passwordRegex.test(field_value)
                            ? "Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
                            : null,
            });
        }


        if (field_name === "Confirmpassword") {
            setForm({
                ...Form,
                Confirmpassword: field_value,
            });

            setFormErrors({
                ...FormErrors,
                Confirmpassword:
                    field_value.length === 0
                        ? "This field is required"
                        : field_value !== Form.Password
                            ? "Passwords do not match"
                            : null,
            });
        }



    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Form);
    };







    return (


        <>
<div className='sign'>
            <h2>{getText().title}</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                    {getText().name}
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={Form.name}
                        onChange={handleFieldChange}
                        name="name"
                    />
                    {FormErrors.name && (
                        <div id="nameInput" className="form-text text-danger">
                            {FormErrors.name}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="Username" className="form-label">
                   {getText().Username}
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="Username"
                        value={Form.Username}
                        onChange={handleFieldChange}
                        name="Username"
                    />
                    {FormErrors.Username && (
                        <div id="descriptionInput" className="form-text text-danger">
                            {FormErrors.Username}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="Emailaddress" className="form-label">
                    {getText().Emailaddress}
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="Emailaddress"
                        value={Form.Emailaddress}
                        onChange={handleFieldChange}
                        name="Emailaddress"
                    />
                    {FormErrors.Emailaddress && (
                        <div id="Emailaddress" className="form-text text-danger">
                            {FormErrors.Emailaddress}
                        </div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">
                      { getText().Password}
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="Password"
                        value={Form.Password}
                        onChange={handleFieldChange}
                        name="Password"
                    />
                    {FormErrors.Password && (
                        <div id="Password" className="form-text text-danger">
                            {FormErrors.Password}
                        </div>
                    )}
                </div>



                <div className="mb-3">
                    <label htmlFor="Confirmpassword" className="form-label">
                    {getText().Confirmpassword}
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="Confirmpassword"
                        value={Form.Confirmpassword}
                        onChange={handleFieldChange}
                        name="Confirmpassword"
                    />
                    {FormErrors.Confirmpassword && (
                        <div id="Confirmpassword" className="form-text text-danger">
                            {FormErrors.Confirmpassword}
                        </div>
                    )}
                </div>








                <button type="submit" className="btn btn-primary">
                  { getText().submit}
                </button>
            </form>
            </div>
        </>
    );

}

export default Signup;