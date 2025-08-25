import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';

function ScrollTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;
  return (
    <Button
      onClick={() => scroll.scrollToTop()}
      className="scroll-top"
      variant="primary"
    >
      <FaArrowUp />
    </Button>
  );
}

export default ScrollTop;