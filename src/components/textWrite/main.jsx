import React from 'react';
import Typed from 'typed.js';

export default function MyComponent() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Aplikasi Premium", "Murah dan Terpercaya", "Checkout Sekarang"," Aplikasi Premium", "Murah dan Terpercaya", "Checkout Sekarang"," Aplikasi Premium", "Murah dan Terpercaya", "Checkout Sekarang"," Aplikasi Premium", "Murah dan Terpercaya", "Checkout Sekarang"," Aplikasi Premium", "Murah dan Terpercaya", "Checkout Sekarang"," Aplikasi Premium", "Murah dan Terpercaya", "Checkout Sekarang"," Aplikasi Premium", "Murah dan Terpercaya", "Checkout Sekarang"," Aplikasi Premium", "Murah dan Terpercaya", "Checkout Sekarang"," Aplikasi Premium", "Murah dan Terpercaya", "Checkout Sekarang"," Aplikasi Premium", "Murah dan Terpercaya", "Checkout Sekarang"," Aplikasi Premium", "Murah dan Terpercaya", "Checkout Sekarang"," Aplikasi Premium", "Murah dan Terpercaya", "Checkout Sekarang","Tempatnya Beli App premium"],
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} className='text-bold' />
    </div>
  );
}