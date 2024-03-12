import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink ="https://www.ambitiouskitchen.com/homemade-salsa/";
    let authorPhoto = "https://www.ambitiouskitchen.com/wp-content/uploads/2020/12/ak-mini-bio-2a-1.jpg"
    let authorName = "Monique";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>ambitiouskitchen</a> 
           </div>
        </div>
     );
}

function RecipeDescription() {
    return (
        <div> 
        <div>
           <h1>Tony's Ridiculously Easy Homemade Salsa</h1>
           <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
     </div>
    );
}

export default RecipeDescription;
