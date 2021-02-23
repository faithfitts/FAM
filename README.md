# FAM - FLOWERS AS MEDICINE

#### For centuries, cultures around the world have utilized the therapeutic properties of certain flowers in their daily lives. This site allows the user to read about the benefits of medicinal flowers/herbs. Also, users are able to leave comments about how they have used the flower as medicine (brewed the pedals in a tea, used the buds as a topical ointment, etc.)

##### USER STORIES:
1. As a user, I want to be able to view comments made by other users
2. As a user, I want to add comments on posts
2. As a user, I want to edit (my own) comments on posts
4. As a user, I want to delete (my own) comments on posts
5. As a user, I want to like a post
6. As a user, I want to view all the flowers (posts) on the site
7. As a user, I want to view the flowers that I liked

### Other Important Links & Resources Used:
- [Back-End Repo](https://github.com/faithfitts/FAM-API)
- [Deployed API](https://fast-fjord-69255.herokuapp.com/)
- [Deployed App](https://github.com/faithfitts.github.io/fam/)

**Website Resources**
- [fernsnpetals](https://www.fnp.com/article/which-flowers-are-used-profusely-in-medicine)
- [healthline](https://www.healthline.com/nutrition)
- [stackOverflow](stackOverflow.com)
- [webmd](webmd.com)
- [Univ. of Rochester encyclopedia](https://www.urmc.rochester.edu/encyclopedia.aspx)


##### Welcome To The FAM!
![FAM App](https://i.imgur.com/kVh9b6t.png)

#### Set Up Instructions:
1. At the top right of the page, you can click sign-up and enter the required information (username, email, and password) to create an account. You will only have to do this once, because the next time you will only need to sign-in with the email and password you used to create your account.
2. Once you are logged in, click the "Explore!" button at the upper-right corner. This will take you to a page that displays all of the flowers that are currently on the site.
3. Now, read the descriptions of how that flower can be used as medicine. If you would like to learn more about a particular one, click the green "Click Here to Learn More" link.
4. Once you are viewing a particular flower, feel free to leave a comment and read comments that other users have left. Have fun!

## Planning and Story: Development Process and Problem-Solving Strategy:

### Planning:
- I have a background in biology/pre-med and I love Botany and studying about different flowers. Therefore, for this project I wanted to work on something I love talking about and explaining to others. I began by creating user stories so I had a clear idea of the features I wanted my app to contain. Next, I made an ERD so I could visualize the relationships between my different resources (the user, the posts, and the comments). Lastly, I created a wireframe to get an idea of how version 1 would appear to the user.

### CRUD Posts & Comments:
- I began the front end by making CRUD actions for my posts and then I moved on to CRUD the comments as well. After the functionality was working properly and all buttons were redirected users to the correct views, I started with the more creative side of the project. I created a logo and description of my project because I wanted the user to have an idea of what the site was about before signing-up. For easy readability purposes, I made a separate file for this data that I used for my unauthenticated home page. Finally, I did my final touches on styling. Since this was the first time I was working with a group of images, it took some trial and error before I had was able to get the margins and font sizes to appear the way I wanted.

### Problem-Solving:
- My biggest dilemma during this project was learning how to seed a database. Although the bulk of this work was completed in the backend, I still had to find a way to allow admin to create, update, and delete post while denying that functionality to non-admin users. Since all of the CRUD actions for post was reliant on clicking the "Create A Post" button, I knew that if I could find a way to hide that button from non-admin users, I wouldn't have to worry about trying to hide each CRUD feature one-by-one. After collaborating with my colleagues, I was able to show the create button in the navigation bar to only admin.

## Technologies Used:
- HTML/CSS
- Javascript
- React
- Axios
- Bootstrap

## Future Iterations:
- Add a like button for users
- Add a search feature

##### WIREFRAME:
![FAM Wireframe](https://i.imgur.com/G4pifHs.png)
