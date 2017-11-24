//CommentBox.js
import React, { Component } from 'react';
import Recipe from './Recipe';

// import { GridList, GridTile } from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// const styles = {
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//     },
//     gridList: {
//         display: 'flex',
//         width: '100%',
//         height: '100%',
//         padding: '2rem',
//     }
// };

// class UserRecipes extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { data: [] };
//     }
//     render() {
//         return (
//             <div style={styles.root}>
//                 <h2>Recipes:</h2>
//                 <GridList
//                     cols={4}
//                     cellHeight={200}
//                     padding={1}
//                     style={styles.gridList}
//                 >
//                     {this.state.data.map((recipe) => {

//                         return (
//                             <GridTile
//                                 style={styles.gridTile}
//                                 key={recipe.id}
//                                 title={recipe.title}
//                                 actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
//                                 actionPosition="left"
//                                 titlePosition="top"
//                                 titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
//                             /* cols={tile.featured ? 2 : 1}
//                             rows={tile.featured ? 2 : 1} */
//                             >
//                                 <img src={baseUri} />
//                             </GridTile>
//                         );
//                     })
//                     }
//                 </GridList>
//             </div>
//         )
//     }
// }
// export default UserRecipes;

class CommentList extends Component {
    render() {
        let recipeNodes = this.props.data.map(comment => {
            return (
                <Recipe author={comment.author} key={comment.id}>
                    {comment.text}
                </Recipe>
            )
        })
        return (
            <div>
                {recipeNodes}
            </div>
        )
    }
}
export default CommentList;