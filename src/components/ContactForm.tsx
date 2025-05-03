
import { useState } from 'react';
import { Terminal } from './Terminal';
import { RetroButton } from './RetroButton';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      if (name && email && message) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    }, 1500);
  };
  
  return (
    <section className="mb-8 retro-container pixel-corners">
      <h2 className="text-xl uppercase tracking-wider text-retro-amber-light mb-4">Establish Communication</h2>
      
      <div className="retro-border p-3 bg-retro-black mb-4">
        <Terminal
          text="Enter your message below to communicate with the system operator."
          className="text-retro-light-brown mb-4"
          typeSpeed={20}
        />
        
        {status === 'success' ? (
          <div className="p-4 retro-border bg-retro-dark-brown">
            <Terminal
              text="Message transmission successful. Awaiting further instructions."
              className="text-retro-amber-light"
              typeSpeed={30}
            />
            <div className="mt-4 flex justify-center">
              <RetroButton onClick={() => setStatus('idle')}>New Message</RetroButton>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-retro-amber mb-1 uppercase text-sm tracking-wider">
                Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-retro-dark-brown text-retro-amber p-2 retro-border font-terminal"
                placeholder="Enter designation"
              />
            </div>
            
            <div>
              <label className="block text-retro-amber mb-1 uppercase text-sm tracking-wider">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-retro-dark-brown text-retro-amber p-2 retro-border font-terminal"
                placeholder="Enter communication frequency"
              />
            </div>
            
            <div>
              <label className="block text-retro-amber mb-1 uppercase text-sm tracking-wider">
                Message:
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-retro-dark-brown text-retro-amber p-2 retro-border font-terminal resize-none"
                placeholder="Enter transmission data"
              />
            </div>
            
            {status === 'error' && (
              <div className="text-red-500 text-sm font-terminal">
                {">> Error: All fields required for transmission."}
              </div>
            )}
            
            <div className="flex justify-center">
              <RetroButton 
                type="submit" 
                disabled={status === 'sending'}
                className={status === 'sending' ? 'opacity-50' : ''}
              >
                {status === 'sending' ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
              </RetroButton>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
