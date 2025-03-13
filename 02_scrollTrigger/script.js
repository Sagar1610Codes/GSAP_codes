gsap.from("#page1 .box",{
    scale: 0,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page1 .box",
        scroller: "body",
        markers:true,
    }
})


gsap.fromTo("#page2 h1",{
    x: 0
},{
    x: () => -document.querySelector("#page2 h1").offsetWidth,  // i want to make it more responsive
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub:2,
        pin: true
    }
})

gsap.from("#page3 .box",{
    scale: 0,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page3 .box",
        scroller: "body",
        markers:true
    }
})
