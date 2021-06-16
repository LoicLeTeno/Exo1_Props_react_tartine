import React from 'react';
import './body.css'

import Header from '../Header/header';
import Article from '../Article/article';
import Footer from '../Footer/footer';


class Body extends React.Component {

    nombreArticles = 2;

    render() {

        return (
            <body>
                <Header />

                {this.nombreArticles >= 2 &&
                    <section>
                        <Article />
                        <Article />
                    </section>
                }

                {this.nombreArticles < 2 &&
                    <div>
                        <h1 className="dommage">
                            Dommage pas d'article
                        </h1>
                    </div>
                }

                <br /><br /><br />

                <Footer />
            </body>
        );
    }
}

export default Body;