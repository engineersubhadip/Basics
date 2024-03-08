let person1 = {
    name:"Ben",
    age:55,
    country:"USA",
    setMovies:function(movie1,movie2,movie3){
        console.log(this);
        this.movie1 = movie1;
        this.movie2 = movie2;
        this.movie3 = movie3;
    }
}

let person2 = {
    name:"Charlie",
    age:53
}

person1.setMovies("Batman","Hypnotic","Argo");

