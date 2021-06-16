import React from 'react';
import './article.css'
import logo from './tartine.jpg';

class Article extends React.Component {

    render() {

        return (
            <div className="article">
                <div className="tartine">
                    <img src={logo} alt="logo" />
                </div>

                <div className="para">
                    <h2>
                        Mon premier article
                    </h2>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sint sit dicta. Doloribus repellendus ut sapiente ducimus consectetur dignissimos ipsam consequatur minima placeat sint, accusantium, eveniet odit eos tempore officiis asperiores. Delectus tenetur recusandae sed id autem fugiat suscipit fugit sapiente totam optio corrupti velit maxime non beatae veniam in, ratione soluta accusamus quisquam nemo incidunt consectetur quos magni. Recusandae, nihil sed blanditiis, dolore laboriosam aspernatur similique exercitationem mollitia voluptate eum, id commodi consequatur qui sint voluptatibus atque voluptatem velit totam illum minus beatae unde labore nam autem. Maiores ipsa pariatur nobis unde fugiat deleniti cupiditate dolor adipisci ullam incidunt, numquam ducimus consequatur quidem quia.
                    </p>
                </div>
            </div>
        );
    }
}

export default Article;