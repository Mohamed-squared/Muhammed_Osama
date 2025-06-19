// app/components/Contact.tsx
import React from 'react';
const Contact = () => (
  <section id="contact" className="py-24 max-w-xl mx-auto text-center px-8">
    <h2 className="text-3xl font-bold text-primary mb-4">Get In Touch</h2>
    <p className="text-secondary mb-8">My inbox is always open. Whether you have a question or just want to say hi, I’ll do my best to get back to you!</p>
    <a href="mailto:muhammedoelderwy@gmail.com" className="inline-block bg-transparent border border-accent text-accent font-mono py-3 px-6 rounded hover:bg-accent/10 transition-colors text-lg">
      Say Hello
    </a>
  </section>
);
export default Contact;
