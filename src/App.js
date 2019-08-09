import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import hljs from 'highlight.js/lib/highlight';
// import sql from 'highlight.js/lib/languages/sql';
// import 'highlight.js/styles/monokai-sublime.css';
// import Tree from './Nav/Tree';
import Menu from './Nav/Menu';

const treeData = [
    { "name": "node1" },
    { "name": "node2" },
    { "name": "node3", "child": [ { "name": "node3_1"}, { "name": "node3_2"} ] }
];

const listHead = [
    "id", "name", "info"
]
const listData = [
    { "id": "1", "name": "ayao", "info": "better, to be better" }
]

class App extends React.Component {
    componentDidMount() {
        // hljs.registerLanguage( 'sql', sql );
        // this.updateCodeSyntaxHighlighting();
    }

    componentDidUpdate() {
        // this.updateCodeSyntaxHighlighting();
    }

    updateCodeSyntaxHighlighting = () => {
        document.querySelectorAll("pre code").forEach(block => {
        //   hljs.highlightBlock(block);
        });
    };
    
    /* fetch( '/api' ).then( function( railsJson ) {
        console.log( railsJson );
    } ); */

    render() {
        return (
            <div className="App">
                {/* <div>
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

                            insert into "topic" ("forum_id", "subject")
                            values (2, 'D''artagnian');
                        </code>
                    </pre>
                </div> */}

                <Menu />
                {/* <Tree data={treeData} /> */}
                {/* <List head={listHead} data={listData} /> */}
            </div>
      );
    }
}

export default App;