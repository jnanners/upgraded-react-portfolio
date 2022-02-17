import React, {useState} from "react";
import { FaMailBulk } from "react-icons/fa";

const ContactForm = () => {
    const [formState, setFormState] = useState({subject: "", message: ""});
    const [errorMessage, setErrorMessage] = useState("");

    const {subject, message} = formState;

    const handleChange = (e) => {
        
        if(!e.target.value.length){
            setErrorMessage(`${e.target.name} is required`);
        }
        else{
            setErrorMessage("");
        }


        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        console.log(formState.email, formState.name, formState.message);

        let email = document.createElement("a");
        email.href = `mailto:johnandrewharris3@gmail.com?subject=${formState.subject}&body=${formState.message}`;
        email.click();

        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );

        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
        );
    }

    return(
        <section className="contact-me">
            <h1>Contact Me</h1>
            <p>Please contact me with any questions or inquiries!</p>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="contact-input">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" name="subject" defaultValue={subject} onBlur={handleChange}/>
                </div>
                <div className="contact-input">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            <div className="email">
                <a href="mailto:johnandrewharris3@gmail.com"><FaMailBulk />  johnandrewharris3@gmail.com</a>
            </div>
        </section>
    );
}

export default ContactForm;