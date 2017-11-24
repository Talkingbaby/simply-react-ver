// import React, { Component } from 'react';

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


// class Results extends Component {
//     render() {

//         return (
//             <div style={styles.root}>
//                 <GridList
//                     cols={4}
//                     cellHeight={200}
//                     padding={1}
//                     style={styles.gridList}
//                 >
//                     {this.props.recipes.map((recipe) => {
//                         let baseUri = 'https://spoonacular.com/recipeImages/' + recipe.image;
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
//         );
//     }
// }

// export default Results;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});


function AdvancedGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {
            this.props.recipes.map(recipe => {
                let baseUri = 'https://spoonacular.com/recipeImages/' + recipe.image;
                return (
          <GridListTile key={recipe.id} cols={recipe.featured ? 2 : 1} rows={recipe.featured ? 2 : 1}>
            <img src={baseUri} alt={recipe.title} />
            <GridListTileBar
              title={recipe.title}
              titlePosition="top"
              actionIcon={
                <IconButton>
                  <StarBorderIcon color="white" />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        )}
        )
        }
      </GridList>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);
