import React, { useEffect, useRef, useState } from 'react';

function ScrollSection() {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);

  const [isRight, setisRight] = useState(false)
  const [isLeft, setIsLeft] = useState(true)

  const handleScroll = () => {
    if (targetRef.current) {
      const target = targetRef.current;
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight;
      const targetTop = target.offsetTop;
      const targetBottom = targetTop + target.clientHeight;

      if (targetTop >= viewportTop && targetBottom <= viewportBottom && isRight) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
    }
  };

  function onScroll() {
    const newScrollLeft = targetRef2.current.scrollLeft
    const width = targetRef2.current.clientWidth
    const scrollWidth = targetRef2.current.scrollWidth

    if (scrollWidth - newScrollLeft === width) {
      setisRight(true);
      document.body.style.overflowY = 'auto';
    } else {
      setisRight(false);
      document.body.style.overflowY = 'hidden';
    }

    if (targetRef2.current.scrollLeft === 0) {
      document.body.style.overflowY = 'auto';
    }
    console.log(window.scrollY)
    console.log(isRight)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollRef = useRef();

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const wheelListener = (e) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 5,
        });
      };
      el.addEventListener("wheel", wheelListener);
      return () => el.removeEventListener("wheel", wheelListener);
    }
  }, []);
  

  return (
    // <div onScroll={onScroll} ref={targetRef2} style={{ height: '100vh', width: '85vw', overflowX: 'scroll' }}>
    <div ref={scrollRef} style={{ height: '100vh', width: '85vw', overflowX: 'scroll' }}>
      <div ref={targetRef} style={{ height: '200px', backgroundColor: 'lightblue', width: '200vw' }}>
        This is the target div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quaerat ex, velit ratione nemo porro, tempora enim debitis deserunt commodi temporibus ab maxime, excepturi sunt iusto sapiente molestiae consequuntur voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo magnam, cumque amet ab atque unde quasi repellat error soluta nihil debitis laborum quod laudantium doloremque! Inventore rerum magnam perspiciatis dolore.
      </div>
    </div>
  );
}

export default ScrollSection;
