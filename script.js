    const recipes = [
      {
        name: "Classic Carrot Cake",
        image: "pexels-igor-alves-13188970.jpg",
        description: "A traditional carrot cake with cream cheese frosting.",
        ratings: 4,
        avgRating: 4.2,
        calories: "400 calories",
        yield: 1,
        duration: "PT50M",
        ingredients: [
          "2 cups grated carrots",
          "1 cup chopped nuts",
          "1 cup vegetable oil",
          "3 eggs",
          "2 cups all-purpose flour",
          "1 3/4 cups granulated sugar",
          "1 teaspoon baking powder",
          "1/2 teaspoon baking soda",
          "1/2 teaspoon salt",
          "1 teaspoon ground cinnamon"
        ],
        recipeInstructions: [
          "Preheat the oven to 350°F.",
          "In a large bowl, combine grated carrots, chopped nuts, and vegetable oil.",
          "Add eggs and mix well.",
          "In a separate bowl, whisk together flour, sugar, baking powder, baking soda, salt, and ground cinnamon.",
          "Gradually add the dry ingredients to the wet ingredients, mixing until well combined.",
          "Pour the batter into a greased and floured cake pan.",
          "Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean.",
          "Allow the cake to cool before frosting."
        ]
      },
      {
        name: "Vegan Carrot Cake",
        image: "pexels-leeloo-the-first-5594501.jpg",
        description: "A plant-based carrot cake with dairy-free frosting.",
        ratings: 5,
        avgRating: 4.8,
        calories: "600 calories",
        yield: 1,
        duration: "PT70M",
        ingredients: [
          "2 cups grated carrots",
          "1 cup raisins",
          "1 cup vegetable oil",
          "3/4 cup maple syrup",
          "1 cup all-purpose flour",
          "1 cup whole wheat flour",
          "1 teaspoon baking powder",
          "1/2 teaspoon baking soda",
          "1/2 teaspoon salt",
          "1 teaspoon ground cinnamon"
        ],
        recipeInstructions: [
          "Preheat the oven to 350°F.",
          "In a large bowl, combine grated carrots, raisins, and vegetable oil.",
          "Add maple syrup and mix well.",
          "In a separate bowl, whisk together flours, baking powder, baking soda, salt, and ground cinnamon.",
          "Gradually add the dry ingredients to the wet ingredients, mixing until well combined.",
          "Pour the batter into a greased and floured cake pan.",
          "Bake for 35-40 minutes, or until a toothpick inserted into the center comes out clean.",
          "Allow the cake to cool before frosting."
        ]
      }
    ];

    function generateRecipes() {
      const recipesContainer = document.getElementById('recipes-container');

      recipes.forEach((recipe) => {
        const recipeContainer = document.createElement('div');
        recipeContainer.classList.add('recipe');

        const instructionsList = recipe.recipeInstructions.map((instruction, index) => `<li>${instruction}</li>`).join('');

        recipeContainer.innerHTML = `
          <h2>${recipe.name}</h2>
          <img src="${recipe.image}" alt="${recipe.name}">
          <p>${recipe.description}</p>
          <p>Number of Ratings: ${recipe.ratings}</p>
          <p>Average Rating: ${recipe.avgRating}</p>
          <p>Duration: ${recipe.duration}</p>
          <p>Ingredients:</p>
          <ul>
            ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}
          </ul>
          <p>Recipe Instructions:</p>
          <ol>
            ${instructionsList}
          </ol>
        `;

        recipesContainer.appendChild(recipeContainer);

        const recipeSchema = {
          "@context": "https://schema.org/",
          "@type": "Recipe",
          "name": recipe.name,
          "image": recipe.image,
          "author": {
            "@type": "Person",
            "name": "Chioma the Carrot Cake Queen"
          },
          "cookTime": recipe.duration,
          "description": recipe.description,
          "keywords": "cake for a party, carrot cake, dessert, cream cheese frosting",
          "recipeYield": recipe.yield,
          "recipeCategory": "Dessert",
          "recipeCuisine": "American",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": `${recipe.avgRating}`,
            "ratingCount": `${recipe.ratings}`
          },
          "nutrition": {
            "@type": "NutritionInformation",
            "calories": recipe.calories,
          },
          "recipeIngredient": recipe.ingredients,
          "recipeInstructions": recipe.recipeInstructions.map((instruction, index) => ({
            "@type": "HowToStep",
            "name": `Step ${index + 1}`,
            "text": instruction,
            "url": recipe.image,
            "image": recipe.image
          })),
          "prepTime": recipe.duration,
          "video": {
            "@type": "VideoObject",
            "name": `How to make ${recipes[0].name}`,
            "description": `Learn the step-by-step process of making a ${recipes[0].name}.`,
            "thumbnailUrl": [recipes[0].image], 
            "contentUrl": "https://www.example.com/classic-carrot-cake-video.mp4", 
            "uploadDate": "2022-01-18T08:00:00+00:00", 
            "duration": "PT5M", 
            "interactionStatistic": {
              "@type": "InteractionCounter",
              "interactionType": { "@type": "WatchAction" },
              "userInteractionCount": 500 
            }
          }
        };

        const schemaScript = document.getElementById('recipeSchema');
        schemaScript.appendChild(document.createTextNode(JSON.stringify(recipeSchema, null, 2)));
      });
    }

    generateRecipes();




