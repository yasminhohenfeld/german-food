import React, { useState } from 'react';

const ContactForm = () =>{
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //implementar a lógica aqui posteriormente para enviar msg        
        console.log ('Mensagem enviada:', formData);
    };

    return (
        <div className="container">
            <h2>Contato</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input 
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    OnChange={handleChange}
                    required
                />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChance}
                    required
                    ></textarea>
                </div>
                <button type= "submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;