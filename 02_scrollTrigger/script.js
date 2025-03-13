gsap.from("#page1 .box",{
    scale: 0,
    rotate: 360,
    delay:1,
    duration: 2
})

gsap.from("#page2 .box",{
    scale: 0,
    rotate: 360,
    delay:1,
    duration: 2,
    scrollTrigger: {
        trigger: "#page2 .box",
        scroller: "body",
        markers: true
    }
})
