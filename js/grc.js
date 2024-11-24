var browserScrollbarWidth

const modalOpenPadding = () => {
    if (parseInt($("body").css("padding-right")) == 0){
        $("body, .header-nav").css({"padding-right" : browserScrollbarWidth})
        // console.log("here2: " + browserScrollbarWidth)
    } else {
        $("body, .header-nav").css({"padding-right" : 0})
    }
}

const toggleCTA = () => {
    $(".modal-container.header-cta").toggleClass("open")
    $('.modal-container.header-cta').attr('aria-hidden', !$('.modal-container.header-cta').hasClass("open"))

    $(".btn-header-modal").toggleClass("open")
    $("body").toggleClass("modal-open")

    $(".header-nav").toggleClass("modal-open")

    modalOpenPadding()

    if($(".btn-header-modal").prop('scrollHeight') > $(window).height()){
        // modal scroll exists
    }
}

const toggleMenu = () => {
    $(".modal-container.submenu").toggleClass("open")
    $('.modal-container.submenu').attr('aria-hidden', !$('.modal-container.submenu').hasClass("open"))

    $(".submenu-modal").toggleClass("open")
    $("body").toggleClass("modal-open")
    $(".header-nav").toggleClass("modal-open")

    modalOpenPadding()
}

const toggleSearch = () =>{
    $(".subheader-search").toggleClass("search-expand")
    $(".subheader-search").attr('aria-expanded',$(".subheader-search").hasClass('search-expand'))
}

const togglePanel = () => {
    $(".dropdown-panel.filter").slideToggle(800)
    $('.btn-dropdown svg').toggleClass('rotate')
    $('.btn-dropdown svg').toggleClass('rotate-reset')

    $('.page-dropdown').attr('aria-expanded', $('.page-dropdown').attr('aria-expanded')==='false')
}

$(document).ready(function(){
    $(window).on("load", function(){
        if ($(window).width() > 762) togglePanel()
    })

    browserScrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    $('#site-language').on('change', function() {
        window.open( this.options[ this.selectedIndex ].value, '_self')
        toggleMenu()
    })

    $(window).on("load resize scroll", function () {
        $('.header-logo span:hidden, submenu :hidden, .subheader-search input:hidden, .page-dropdown:hidden, .page-dropdown-container:hidden').attr('aria-hidden', true)
        $('.header-logo span:visible, submenu :visible, .subheader-search input:visible, .page-dropdown:visible, .page-dropdown-container:visible').attr('aria-hidden', false)

        // header padding onscroll
        if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45){
            $(".header").addClass("scroll")
            $(".header-container").css({"box-shadow": "0 0 25px rgba(10,36,88,.25)"})
        }
        else{
            $(".header").removeClass("scroll")
            $(".header-container").css({"box-shadow": "0 0 0 rgba(10,36,88,0)"})

            sessionStorage.scrollPos = $(window).scrollTop()
        }
    })

    $(window).on("scroll", function (){
        // in-page navigation
        var inPageNav = document.querySelector("nav.page-dropdown")
        var inPageLinks = document.querySelectorAll(".in-page-link")
        var sections = document.querySelectorAll("main > section")

        var currentSection = "section-1"
        sections.forEach((section)=>{
            const sectionTop = section.offsetTop
            if(scrollY >= sectionTop - $(".header-container").height() - 120) currentSection = section.getAttribute("id")
        })

        inPageLinks.forEach((item)=>{
            item.classList.remove("in-page-current")
            if(item.href.includes(currentSection))
                item.classList.add("in-page-current")
            else
                item.classList.remove("in-page-current")
        })
    })
})