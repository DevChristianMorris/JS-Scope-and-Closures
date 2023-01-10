// Write a getName function
let memoryName;
const getName = (name) => {
    if (memoryName === undefined) {
        memoryName = name;
    }
return memoryName;
};
/**
 * NOTE! Do not delete the JavaScript below
 * It's used to make the form work, and to run autograder tests
 */
export { getName };