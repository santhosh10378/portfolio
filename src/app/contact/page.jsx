import ContactForm from '@/components/forms/ContactForm';

const ContactPage = () => {
  return (
    <div className='pb-24 pt-28'>
      <div className='container max-w-3xl'>
        <h2 className='title'>Let&apos;s talk about your project</h2>

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
