let person1 = {
    name:"Ben",
    age:55,
    country:"USA",
    setMovies:function(movie1,movie2,movie3){
        this.movie1 = movie1;
        this.movie2 = movie2;
        this.movie3 = movie3;
    }
}

let person2 = {
    name:"Charlie",
    age:53
}

let person3 = {
    name:"Kat",
    age:49
}

person1.setMovies("Batman","Hypnotic","Argo");

// * We shall be using the context of setMovies to set the properties of person2.

person1.setMovies.call(person2,"Two and a half men","Gentlemen","Figure of Speech");

// * We shall be using the context of setMovies to set the properties of person3.

person1.setMovies.apply(person3,["CatWoman","SpiderMan","Captain Marvel"]);

