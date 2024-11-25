const timeline = [
    {
        year: 2018,
        entries: [
            {
                achieved: true,
                date: "May 31",
                title: "THE SNAP",
                description: "",
                href: "#",
            },
        ],
    },
    {
        year: 2023,
        entries: [
            {
                achieved: true,
                date: "October 17",
                title: "THE BLIP",
                description: "",
                href: "#",
            },
            {
                achieved: true,
                date: "October xx",
                title: "GLOBAL REPARTRIATION COUNCIL",
                description: "",
                href: "#",
            },
            {
                achieved: true,
                date: "XXX xx",
                title: "ENTRY TITLE",
                description: "",
                href: "#",
            },
        ],
    },
    {
        year: 2024,
        entries: [
            {
                achieved: true,
                date: "January xx",
                title: "NATIONAL BLIP SUPPORT",
                description: "",
                href: "#",
            },
            {
                achieved: true,
                date: "XXX xx",
                title: "ENTRY TITLE",
                description: "",
                href: "#",
            },
            {
                achieved: true,
                date: "XXX xx",
                title: "ENTRY TITLE",
                description: "",
                href: "#",
            },
            {
                achieved: true,
                date: "XXX xx",
                title: "ENTRY TITLE",
                description: "",
                href: "#",
            },
            {
                achieved: true,
                date: "April 12",
                title: "JOHN WALKER NAMED CAPTAIN AMERICA",
                description: "",
                href: "#",
            },
            {
                achieved: true,
                date: "April xx",
                title: "ENTRY TITLE",
                description: "",
                href: "#",
            },
            {
                achieved: true,
                date: "May xx",
                title: "UNVEILING THE PATCH ACT",
                description: "",
                href: "#",
            },
            {
                achieved: false,
                date: "July 7",
                title: "PATCH ACT: VOTING DAY",
                description: "",
                href: "#",
            },
            {
                achieved: false,
                date: "XXX xx",
                title: "ENTRY TITLE",
                description: "",
                href: "#",
            },
            {
                achieved: false,
                date: "XXX xx",
                title: "ENTRY TITLE",
                description: "",
                href: "#",
            },
        ],
    },
    {
        year: 2025,
        entries: [
            {
                achieved: false,
                date: "XXX xx",
                title: "ENTRY TITLE1",
                description: "",
                href: "#",
            },
            {
                achieved: false,
                date: "XXX xx",
                title: "ENTRY TITLE2",
                description: "",
                href: "#",
            },
            {
                achieved: false,
                date: "XXX xx",
                title: "ENTRY TITLE3",
                description: "",
                href: "#",
            },
        ],
    },
]

var totalEntries = 0
var timelineEntryScrollHeight
const init_timeline = () => {
    for (let i = 0; i < timeline.length; i++){
        for(let j = 0; j < timeline[i].entries.length; j++){
            $('<section>',{
                'id' : 'entry-'+(++totalEntries),
                'class' : 'entry',
                'html' : $('<div>',{
                    'class' : 'date'
                }).text(timeline[i].entries[j].date).add($('<button>',{
                    'id' : 'entry-'+totalEntries,
                    'class' : 'btn-icon'
                }).add($('<article>',{
                    'class' : 'flex-col',
                    'html' : $('<a>',{
                        'href' : timeline[i].entries[j].href,
                        'class' : 'entry-title'
                    }).text(timeline[i].entries[j].title).add($('<p>',{
                        'class' : 'entry-description'
                    }).text('Lorem ipsum dolor sit amet consectetur. Vel tellus enim turpis venenatis sed elementum nunc.'))
                })))
            }).appendTo('.timeline .content')

            if(timeline[i].entries[j].achieved) $('#entry-'+totalEntries).addClass('achieved')
        }
    }
    timelineEntryScrollHeight = $('.timeline #entry-1').height() + parseInt($('.timeline .content').css('gap'))
}

const checkProtocolDesc = () => {
    $('article.description').each(function() {
        $(this).attr('aria-hidden', !$(this).hasClass("on-screen"))
    })
}

$(document).ready(function(){
    init_timeline()

    $(window).on("load resize", function (){
        if($(window).width() > 762){
            $(".identify .labels button").prop('disabled', true).attr('aria-label', 'Heading')
            $('article.description').attr('aria-hidden', false)
        }
        else{
            $(".identify .labels button").prop('disabled', false).attr('aria-label', 'Toggle button')
            checkProtocolDesc()
        }
    })

    $("button#blipped, button#displaced").click(function() {
        if(!$(this).hasClass("on-screen")){
            // console.log(this.id) // or alert($(this).attr('id'));
            $("button#blipped, button#displaced")
            $(".labels button, article.description").removeClass("on-screen")
            $(".labels button#"+this.id+", .description#"+this.id).addClass("on-screen")
            checkProtocolDesc()
        }
    })

    $(window).on("scroll", function (){
        var offsetValue = $(".header-container").height()
        var docViewTop = $(window).scrollTop()

        var elemTop = $(".timeline").offset().top
        var elemBottom = elemTop + $(".timeline").height()
        var entries = document.querySelectorAll(".timeline .entry")
        
        $(".timeline .year-banner").css({"top": $(".header-container").height()})
        // $('.timepoints button').css("margin-bottom", timelineEntryScrollHeight - 16)

        // console.log("-" + (scrollY - elemTop + offsetValue))
        if((elemBottom >= docViewTop) && (elemTop - offsetValue <= docViewTop)){
            $(".timeline").addClass("in-view")

            let runningTotal = 0
            for (let i = 0; i < timeline.length; i++){
                for(let j = 0; j < timeline[i].entries.length; j++){
                    if ((scrollY - elemTop + offsetValue + 80) >= timelineEntryScrollHeight * (runningTotal++)){
                        $(".timeline .year-banner .year").html(timeline[i].year)
                    }
                }
            }

            let entryOffsetHeight = 200
            const observer = new IntersectionObserver(el =>{
                el.forEach((e)=>{            
                    if (e.isIntersecting) {
                        e.target.classList.add("scroll-current")
                    }
                    else e.target.classList.remove("scroll-current")
                })
            })
            entries.forEach((entry) => observer.observe(entry))
        }
        else if($(".timeline").hasClass("in-view")) $(".timeline").removeClass("in-view")
    })

    $(".timeline .entry > button").click(function(){
        $('html, body').animate({
            scrollTop: $(".timeline section#"+this.id).offset().top - $(".header-container").height() - $(".timeline .year-banner").height() - 20
        }, 200)
    })
})