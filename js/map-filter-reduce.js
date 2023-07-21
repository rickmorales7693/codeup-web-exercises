const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threeLanguages = users.filter(user => user.languages.length >= 3);

console.log('User with 3 languages => ', threeLanguages);


//Use .map to create an array of strings where each element is a user's email address
const userEmails = users.map(user => user.email);

console.log('User with email address => ', userEmails);


// //Use .reduce to get the total years of experience from the list of users.
// //Once you get the total of years, you can use the result to calculate the average.
// const totalYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
//
// console.log('Total years of experience => ', totalYears);


//Use .reduce to get the longest email from the list of users.
// const longestEmail = users.reduce((longest, user) => user.email.length > longest.length ? user.email : longest, "");
//
// console.log(longestEmail);
const longestEmail = users.reduce((accumulator, user, index)=>{
    const emailLength = user.email.length;
    const accLength = accumulator.length;
    if (emailLength > accLength){
        accumulator = user.email;
    }
    return accumulator;
}, '');

console.log('Longest Email => ', longestEmail)

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const userNames = users.reduce((names, user) => names + user.name + ", ", "Your instructors are: ");
console.log('User Names =>', userNames);


//Use .reduce to get the unique list of languages from the list of users.
const uniqueLanguages = users.reduce((languages, user) => {
    user.languages.forEach(language => languages.add(language));
    return languages;
}, new Set());

console.log('Users Unique List => ' ,uniqueLanguages);
