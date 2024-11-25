const article = [
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Pulvinar ac quam et erat at nulla nulla tristique.",
    },
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Dictumst faucibus proin amet pellentesque.",
    },
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Lacus vitae orci ullamcorper morbi porttitor sapien.",
    },
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Nunc nibh massa lorem morbi.",
    },
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit vulputate tristique donec lorem neque.",
    },
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Volutpat netus quis sed ultrices turpis potenti.",
    },
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Tincidunt eget volutpat quis id quam leo semper ac.",
    },
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Pulvinar ac quam et erat at nulla nulla tristique.",
    },
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Dictumst faucibus proin amet pellentesque.",
    },
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Lacus vitae orci ullamcorper morbi porttitor sapien.",
    },
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Nunc nibh massa lorem morbi.",
    },
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit vulputate tristique donec lorem neque.",
    },
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Volutpat netus quis sed ultrices turpis potenti.",
    },
    {
        date: "DATE",
        tag: "TAG",
        href: "#",
        title: "Lorem ipsum dolor sit amet consectetur. Tincidunt eget volutpat quis id quam leo semper ac.",
    },
]

var numChecked
const filter = [
    {
        name: 'tag1',
        id: 'filter-tag1',
        checked: null,
    },
    {
        name: 'tag2',
        id: 'filter-tag2',
        checked: null,
    },
    {
        name: 'tag3',
        id: 'filter-tag3',
        checked: null,
    },
]

const MAX_ONSCREEN = 7 // maximum 7 articles on screen
var curPage = 0 // currently on page 1/?
var lastPage

const init_list = () => {
    // list articles
    var len = 0
    for (let i = curPage * MAX_ONSCREEN; i < article.length; i++){
        $('<article>',{
            'class' : 'minor-block flex-col',
            'html': $('<div>',{
              'class' : 'block-data',
              'html' : $('<time>').text(article[i].date)
                    .add($('<div>', {
                        'class' : article[i].tag.toLowerCase(),
                        'html' : $('<a>',{
                            'href' : '#',
                            'class' : 'block-link',
                        }).text(article[i].tag)
                    }))
            }).add($('<a>',{
                'href': article[i].href,
                'class' : 'block-link',
                'html' : $('<h2>').text(article[i].title)
            }))
        }).appendTo('main .blocks')
        len++
    }

    lastPage = Math.ceil(len/MAX_ONSCREEN)
}

/* UNFINISHED
const updateFilter = (id) => {
    if(numChecked==1 || id == 'filter-viewall'){
        $('.filter-item input[type=checkbox]').removeAttr('checked')
        $('#filter-viewall').prop('checked', 'checked')

        filter.forEach(function(tag) {tag.checked = true})

        numChecked = 3
    } else{
        filter[filter.findIndex(tag => tag.id == id)].checked = filter[filter.findIndex(tag => tag.id == id)].checked
        console.log(filter[filter.findIndex(tag => tag.id == id)].checked)
    }
} */

$(document).ready(function(){
    $(window).on("load", function(){
        init_list()
        //updateFilter('filter-viewall')
    })

    // UNFINISHED
    // $('input[type=checkbox]').change(function(){
    //     console.log(this.id)
    //     updateFilter(this.id)
    // })
})