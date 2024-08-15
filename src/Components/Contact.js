function Contact(props) {
    return(
        <>
        <section id="contact" className="contact">
      <h2>Contact</h2>
      <form>
        <label>
          Name: 
          <input type="text" name="name" value={props.fname} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={props.email}/>
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
        </>
    )
}
export default Contact;