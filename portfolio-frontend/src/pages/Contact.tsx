import "../styles/contact.scss";

const Contact = () => {

    return (
        <div className="contact">
            <div>Salut</div>
            <form>
                <div>
                    <div>
                        <label>Votre Nom</label>
                        <input />
                    </div>
                    <div>
                        <label>Numéro de Téléphone</label>
                        <input />
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <input />
                </div>
                
                <div>
                    <label>Objet</label>
                    <input></input> 
                </div>
                
                <div>
                    <label>Votre Message</label>
                    <input />  
                </div>
                
                <button type="submit"><strong>Envoyer</strong></button>
            </form>
        </div>
    )
}

export default Contact;