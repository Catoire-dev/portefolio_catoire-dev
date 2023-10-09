import './Contact.scss';

export const Contact = () => {
    const handleForm = (e: any) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const object = formData.get('object');
        const message = formData.get('message');

        console.log("form = ", email, object, message);

        
        form.reset();
    }

    return (
        <main className='box'>
            <section className='border-red title-box'>
                <h1>Contact</h1>
            </section>
            <section className='box'>
                <form onSubmit={handleForm} className='box'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="object">Objet</label>
                    <input type="text" name="object" id="object" />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" />
                    <input type="submit" name="submit" id="submit" />
                </form>
            </section>
        </main>
    )
}