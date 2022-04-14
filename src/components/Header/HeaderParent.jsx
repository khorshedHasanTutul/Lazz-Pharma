import React, { forwardRef, useCallback, useEffect, useRef } from "react";
import MiddleHeader from "./MiddleHeader";
import NavHeader from "./NavHeader";
import TopHeader from "./TopHeader";

const HeaderParent = forwardRef((props,stickyNavRef ) => {
  const navMidRef = useRef();
  const navTopRef = useRef();

  const handleScroll = useCallback(() => {
    const offset=window.scrollY;
    const navTopHeight = navTopRef.current?.clientHeight;
    const span = window.innerWidth <= 1000 ? `.5rem` : `1.25rem`;


    if(offset >  navTopHeight){
      stickyNavRef.current.style.top = `${-navTopHeight}px`;
      navMidRef.current.style.paddingTop = `.5rem`;
      navMidRef.current.style.paddingBottom = `.5rem`;
    }
    else if (offset < navTopHeight){
      stickyNavRef.current.style.top = `${0}px`;
      navMidRef.current.style.paddingTop = span;
      navMidRef.current.style.paddingBottom = span;
    }
  }, [stickyNavRef]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <div id="header" class="header header-new sticky_navs" ref={stickyNavRef}>
      <TopHeader ref={navTopRef}/>
      <MiddleHeader ref={navMidRef}/>
      <NavHeader />
    </div>
  );
});

export default HeaderParent;
