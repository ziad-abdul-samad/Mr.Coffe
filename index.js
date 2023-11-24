// const sr = ScrollReveal ({
//     distance:'90px',
//     duration:"1500",
//     delay:"100",
//     reset:true
//     }) 
    
//     sr.reveal('header' ,{delay:200 , origin: "top"} )
//     sr.reveal('.landing' ,{delay:200 , origin: "left"} )
//     sr.reveal('.text' ,{delay:200 , origin: "top"} )
//     sr.reveal('.heading' ,{delay:800 , origin: "top"} )
//     sr.reveal('.ride-container .box' ,{delay:600 , origin: "top"} )
//     sr.reveal('.serv-container .box' ,{delay:600 , origin: "bottom"} )
//     sr.reveal('.about .container ' ,{delay:600 , origin: "bottom"} )
//     sr.reveal('.about .container img ' ,{delay:800 , origin: "left"} )
//     sr.reveal('.reviews .container .box' ,{delay:600 , origin: "top"} )
//     sr.reveal('.news .container ' ,{delay:400 , origin: "bottom"} )
//     sr.reveal('.copyright ' ,{delay:200 , origin: "top"} )
//     sr.reveal('.ziad-info ' ,{delay:200 , origin: "top"} )
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
	  	      sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
// scroll reveal 
const sr = ScrollReveal ({
    origin:'top',
    distance:'60px',
    duration:"2500",
    delay:"400",
    // reset:true 
    }) 
    
    sr.reveal('.home-title, .popular-container, .subscribe-container, .footer-container' )
    sr.reveal('.home-description, .footer-info' ,{delay:500 } )
    sr.reveal('.home-search' ,{delay:600 } )
    sr.reveal('.home-value' ,{delay:700 } )
    sr.reveal('.home-images' ,{delay:800, origin:'bottom' } )
    sr.reveal('.logos-img' ,{interval:100 } )
    sr.reveal('.value-images, .contact-content' ,{origin:'left' } )
    sr.reveal('.value-content, .contact-images ' ,{origin:'right' } )