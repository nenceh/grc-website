const council = [
    // Source: https://marvelcinematicuniverse.fandom.com/wiki/Global_Repatriation_Council
    {
        country: 'United States of America',
        doa: 'October 2023',
        href: 'usa',
        flag_img_src: '',
        representatives: [
            {
                rank: 'primary',
                list: [
                    {
                        name: 'Government Official',
                        role: 'U.S. Senator',
                        href: '#',
                        img_src: '',
                    }
                ],
            },
            {
                rank: 'secondary',
                list: [
                    {
                        name: 'Captain John Walker',
                        role: 'Military Personnel',
                        href: '#',
                        img_src: '',
                    },
                    {
                        name: 'Sergeant Major Lemar Hoskins',
                        role: 'Military Personnel',
                        href: '#',
                        img_src: '',
                    },
                ]
            },
        ]
    },
    {
        country: 'Philippines',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
        representatives: [
            {
                rank: 'primary',
                list: [
                    {
                        name: 'Ayla Perez',
                        role: 'Air Force Officer',
                        href: '#',
                        img_src: '',
                    },
                ]
            },
        ]
    },
    {
        country: 'India',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
        representatives: [
            {
                rank: 'primary',
                list: [
                    {
                        name: 'Lacont',
                        role: 'Prime Minister',
                        href: '#',
                        img_src: '',
                    },
                ]
            },
        ]
    },
    {
        country: 'European Union',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'United Kingdom',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'China',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'Japan',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'France',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'Italy',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'South Korea',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'South Africa',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'Saudi Arabia',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'Germany',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'Russia',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'Canada',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'Brazil',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'Indonesia',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'Australia',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'Argentina',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
    {
        country: 'Jamaica',
        doa: 'XXX 2023',
        href: '#',
        flag_img_src: '',
    },
]

init_council = () => {
    for(let i = 0; i < council.length; i++){
        $('<div>',{
            'class' : 'country minor-block',
            'html' : $('<div>',{
                'class' : 'country-info flex-col block-data',
                'html' : $('<h3>',{
                    'class' : 'country-info-name block-link',
                }).text(council[i].country).add($('<div>',{
                    'class' : 'country-info-date',
                }).text("Date of Admission: "+council[i].doa))
            }).add($('<figure>',{
                'class' : 'country-flag',
                'html' : $('<img>',{
                    'src' : council[i].flag_img_src,
                    'class' : '',
                    'alt' : 'Country flag',
                })
            })).add($('<a>',{
                'href' : 'council-'+council[i].href+'.html',
                'class' : 'full-link block-link',
            }))
        }).appendTo('.page-content section.countries-list')
    }
}

init_members = () => {
    for(let i = 0; i < 1; i++){
        for(let j = 0; j < council[i].representatives.length; j++){
            for(let k = 0; k < council[i].representatives[j].list.length; k++){
                $('<div>',{
                    'class' : 'representative',
                    'html' : $('<figure>',{
                        'class' : 'representative-img',
                        'html' : $('<img>',{
                            'src' : council[i].representatives[j].list[k].img_src,
                            'class' : '',
                            'alt' : 'Representative image',
                        })
                    }).add($('<div>',{
                        'class' : 'representative-info flex-col',
                        'html' : $('<h2>').text(council[i].representatives[j].list[k].name
                    ).add($('<div>').text(council[i].representatives[j].list[k].role))
                    })).add($('<a>',{
                        'href' : council[i].representatives[j].list[k].href,
                        'class' : 'full-link',
                    }))
                }).appendTo('div.rep-'+council[i].representatives[j].rank)
            }
        }
    }
}

$(document).ready(function(){
    $(window).on("load", function(){
        init_council()
        init_members()
    })
})