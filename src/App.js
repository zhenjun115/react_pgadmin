import React from 'react';
import logo from './logo.svg';
// import './App.css';
import hljs from 'highlight.js/lib/highlight';
import sql from 'highlight.js/lib/languages/sql';
import 'highlight.js/styles/monokai-sublime.css';
import Tree from './Nav/Tree';
import List from './Nav/List';

// hljs.registerLanguage( 'sql', sql );

class App extends React.Component {
    componentDidMount() {
        hljs.registerLanguage( 'sql', sql );
        this.updateCodeSyntaxHighlighting();
      }

      componentDidUpdate() {
        this.updateCodeSyntaxHighlighting();
      }

      updateCodeSyntaxHighlighting = () => {
        document.querySelectorAll("pre code").forEach(block => {
          hljs.highlightBlock(block);
        });
      };
    
    /* fetch( '/api' ).then( function( railsJson ) {
        console.log( railsJson );
    } ); */

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    </a>
                </header>
                <div>
                    <pre>
                        <code className="sql">
                            select * from database; insert into database values('1'); 
CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');
            
                        </code>
                    </pre>
                </div>

                <Tree />
                <List />
        </div>
      );
    }
}

export default App;
