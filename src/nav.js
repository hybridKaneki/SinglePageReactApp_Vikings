import React from 'react';
import { Link } from 'react-router-dom';

export default class nav extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

async componentDidMount() {
          try {
            setInterval(async () => {
              console.log("reloading");
              // add your api key below to make this app work
              const res = await fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=');
              const newsapi = await res.json();
              const articles = newsapi.articles;

              this.setState({
                isLoaded: true,
                items: articles
              })
            }, 5000);
          } catch(e) {
            console.log(e);
          }
    }
 render() {
    const { error, isLoaded, items } = this.state;
          if (!isLoaded) {
            return <div>Please Wait . . .</div>;
          } 
          else if (error) {
            return <nav><div>Error: {error.message}</div></nav>;
          }
         else {
          return (
            <nav>
             <div>
             <Link exact to="/"><div className="button"><h1 id="h1">HOME</h1></div></Link>
             </div>
             <div>
             <h2 id="h2">Latest News</h2>
             </div>
            <ul>
              {items.map((item, key) => (

                <li key={key}>
                  <p><strong id="strong">{item.title}</strong></p> 
                  <p><small id="small">{item.description}</small></p>
                  <p><a href={item.url} id="url">Continue Reading... </a></p>
                </li>
              ))}
            </ul>
            </nav>
          );
      }

    
    
  }
}
