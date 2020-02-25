import React from 'react';

import SearchDirector from '../../components/SearchDirector/searchDirector';
import Layout from '../../components/layout'

import './search.css';

const authors = [
    {  
        slug: 'belousov',
        name: 'Oleg Pavlovich Belousov',
        city: 'Slutsk',
        bday: '13.11.1945 - 26.03.2009',
        titleText: 'Belarusian Soviet director, screenwriter, operator. Honored art worker of the Belarusian SSR (1974)',
        pathname: '/assets/belousov.jpg',
    },
    {
        slug: 'dashuk',
        name: 'Victor Nikiforovich Dashuk',
        city: 'Valoki village',
        bday: '22.10.1933 - 19.07.2010',
        titleText: 'Soviet Belarusian documentary filmmaker. Winner of the State Prize of the USSR (1985), Honored Artist of the Byelorussian SSR (1977), National Artist of the Byelorussian SSR (1989).',
        pathname: '/assets/dashuk.jpg',
    },
    {
        slug: 'dobrolubov',
        name: 'Igor Mikhailovich Dobrolyubov',
        city: 'Novosibirsk city',
        bday: '22.10.1933 - 19.07.2010',
        titleText: 'Belarusian Soviet film director, actor, teacher and screenwriter, National Artist of the Byelorussian SSR (1985). Member of the CPSU since 1963',
        pathname: '/assets/dobrolubov.jpg',
    },
    {
        slug: 'khashchavatski',
        name: 'Yury Iosifovich Khashchavatski',
        city: 'Odessa',
        bday: '18.10.1947 - Nowadays',
        titleText: 'Belarusian film director and public figure, a politician. Member of International and Eurasian Academy of Television and Radio.',
        pathname: '/assets/Khashchavatski.jpg',
    },
    {
        slug: 'korsh-sablin',
        name: 'Vladimir Vladimirovich Korsh-Sablin',
        city: 'Minsk',
        bday: 'May, 1939 - January 24, 2010',
        titleText: 'Belarusian Soviet film director, film actor. Peoples Artist of the USSR. Laureate of the Stalin Prize. One of the founders of Belarusian cinema.',
        pathname: '/assets/KorshSablin.jpg',
    },
    {
        slug: 'ptashuk',
        name: 'Mikhail Nikolayevich Ptashuk',
        city: 'Minsk',
        bday: '8.01.1943 - 26.04.2002',
        titleText: 'Soviet and Belarusian film director, peoples artist of Belarus.',
        pathname: '/assets/Ptashuk.jpg',
    },
    {
        slug: 'rubinchik',
        name: 'Valery Davidovich Rubinchik ',
        city: 'Minsk',
        bday: '17.04.1940 - 02.03.2011',
        titleText: 'Belarusian and Russian Soviet film director and screenwriter',
        pathname: '/assets/rubinchik.jpg',
    },
    {
        slug: 'tcvetkov',
        name: 'Yuri Nikolaevich Tcvetkov',
        city: 'Minsk',
        bday: '14.02.1941 - 25.01.2011',
        titleText: 'Soviet and Belarusian film director, screenwriter, cameraman, director of "Belarusian Video Center", Director of the National Film Studio "BelarusFilm".',
        pathname: '/assets/Tcvetkov.jpg',
    },
    {
        slug: 'turov',
        name: 'Viktor Timofeevich Turov',
        city: 'Mogilev',
        bday: '25.10.1936 - 31.10.1996',
        titleText: 'During his short creative life, Viktor Turov made 26 films that represent the golden fund of Belarusian cinema.',
        pathname: '/assets/turov-logo.jpg',
    },
]

const Search = ({ location }) => (
    <Layout location={location}>
        <div className="container-fluid">
            <section className="authors-list">
                <h2>
                    Title goes here ... 
                </h2>
                <SearchDirector authors={authors}/>
            </section>
        </div> 
    </Layout>  
);

export default Search;