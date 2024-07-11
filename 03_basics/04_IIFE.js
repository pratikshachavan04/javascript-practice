// Immediately Invoked Function Expression (IIFE)

(function shop(){
    //Named IFFE
    console.log(`DB CONNETED`);

})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ("pc")
