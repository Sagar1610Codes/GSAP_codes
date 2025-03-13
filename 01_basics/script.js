const tl = gsap.timeline()


tl.to("#box",{
    x: 500,  // translate x property
    backgroundColor: "blue",
    borderRadius: "50%",
    rotate: 360,
    scale: 0.01,   // size changes 
    repeat:-1,  // -1 repeat is infinite
    yoyo:true,  // yoyo if true goes from-to and to-from 
    duration: 2,
})


tl.from("h1",{
    opacity: 0,
    y:10,
    stagger: 0.3,  // makes time limit per element one after another
    duration:2,
})