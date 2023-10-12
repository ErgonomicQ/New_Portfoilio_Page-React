import {React, useState} from 'react';
import '../styles/CustomStyle.css'

const Contact = () => {
    const[formData, setFormData] = useState({
        name: '',
        email: '', 
        message: '',
    });

    const [formError, setFormError] =useState({
        name: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        setFormError({ ...formError, [name]:''});
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
       //this is in place for later backend implimentation. At this time this form doesn't work.
      };


      return (
        <section id="contact" className="section">
          <div className="container">
            <h2 className="title is-2">Contact</h2>
            <div className="columns is-centered">
              <div className="column is-half">
                <form onSubmit={handleFormSubmit}>
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        className={`input ${formError.name && 'is-danger'}`}
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {formError.name && <p className="help is-danger">{formError.name}</p>}
                  </div>
    
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className={`input ${formError.email && 'is-danger'}`}
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {formError.email && <p className="help is-danger">{formError.email}</p>}
                  </div>
    
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                  </div>
    
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    };
    
export default Contact;