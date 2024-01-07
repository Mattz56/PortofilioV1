let tl = gsap.timeline();

tl.from('#about', 
    {
        opacity: 0,
        x: -200,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '#about',
            start: 'top center',
            end: 'bottom center',
            once: true,
            scrub: true,
            markers: false
        }
    });

tl.from('.title_effect1', 
    {
        opacity: 0,
        x: -200,
        duration: 6,
        ease: 'circ.out',
        scrollTrigger: {
            trigger: '#about',
            start: 'top center',
            end: 'bottom center',
            once: true,
            scrub: true,
            markers: false
        }
    });
   
tl.from('.skills_card',
    {
        opacity: 0,
        x: 200,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#skills',
            start: 'top center',
            end: 'bottom center',
            once: true,
            scrub: true,
            markers: false
        }
    });

tl.fromTo('.title_effect2',
    {
        opacity: 0,
        x: 200
    },
    {
        opacity: 1,
        x: 0,
        duration: 5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '#skills',
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            once: true,
            markers: false
        }
    });

tl.fromTo('.title_effect3', 
    {
        opacity:0,
        y: -200,
        duration: 2,
    },
    {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '#project',
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            once: true,
            markers: false
        }
    });

tl.from('.project_card', 
    {
        y: -200,
        opacity: 0,
        stagger: 0.3,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '#project',
            start: 'top center',
            end: 'bottom 80%',
            once: true,
            scrub: true,
            markers: false
        }
    });

tl.from('#main_title',
    {
        opacity: 0,
        duration: 2,
        scale: 0.6,
        ease: "slow(0.7,0.7,false)"
    });