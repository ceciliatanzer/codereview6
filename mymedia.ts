/*creating a parent class, and then creating childclasses
for each type of media*/

abstract class allMedia {
  titel:string;
  author:string;
  genre:string;
  publisher:string;
  rating:number;
  imgSrc:string;
  constructor(titel:string,author:string,genre:string,publisher:string,rating:number,imgSrc:string){
    this.titel = titel;
    this.author = author;
    this.genre = genre;
    this.publisher = publisher;
    this.rating = rating;
    this.imgSrc = imgSrc;


  }
  render():string{

          let writeOut:string = '<li>' + 'Titel: ' + this.titel + '</li>';
          writeOut += '<li>' + 'Author: ' + this.author + '</li>';
          writeOut += '<li>' + 'Genre: ' + this.genre + '</li>';
          writeOut += '<li>' + 'Publisher: ' + this.publisher + '</li>';
          writeOut += '<li>' + 'Rating: ' + this.rating + '</li>';
    return writeOut;
  }
  getImgSrc():string{
    return this.imgSrc;
  }
  getTitel():string{
    return this.titel;
  }
  }



class Cd extends allMedia{
  minutes:number;
  constructor(titel:string,author:string,genre:string,publisher:string,rating:number,minutes:number,imgSrc:string){
    super(titel,author,genre,publisher,rating,imgSrc);
    this.minutes = minutes;
  }
  render():string{
    let writeOut:string = "<div class=\"row cdStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + super.getTitel() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '<li>' + 'Minutes: ' + this.minutes + '</li>';
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }




}

class Dvd extends allMedia{
  minutes:number;
  constructor(titel:string,author:string,genre:string,publisher:string,rating:number,minutes:number,imgSrc:string){
    super(titel,author,genre,publisher,rating,imgSrc);
    this.minutes = minutes;
  }
  render():string{
    let writeOut:string = "<div class=\"row dvdStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + super.getTitel() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '<li>' + 'Minutes: ' + this.minutes + '</li>';
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }




}


class Book extends allMedia{
  weight:number;
  constructor(titel:string,author:string,genre:string,publisher:string,rating:number,weight:number,imgSrc:string){
    super(titel,author,genre,publisher,rating,imgSrc);
    this.weight = weight;
  }
  render():string{
    let writeOut:string = "<div class=\"row bookStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + super.getTitel() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '<li>' + 'Weight: ' + this.weight + '</li>';
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }




}

class Comic extends allMedia{

  constructor(titel:string,author:string,genre:string,publisher:string,rating:number,imgSrc:string){
    super(titel,author,genre,publisher,rating,imgSrc);
    
  }
  render():string{
    let writeOut:string = "<div class=\"row comicStyle\">";
    writeOut += "<div class=\"col-lg-6\">";
    writeOut +="<img class='img-responsive' src=\""+  super.getImgSrc() +"\">";
    writeOut += "</div>";
      writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + super.getTitel() + '</h1>';
        writeOut += '<ul>';
        writeOut += super.render();
        writeOut += '</ul>';
      writeOut += "</div>";
    writeOut += "</div>";
    return writeOut;
  }




}

class Display{
  mediaArray:Array<allMedia>;
  firstCd:allMedia;
  secoundCd:allMedia;
  firstDvd:allMedia;
  secoundDvd:allMedia;
  firstBook:allMedia;
  secoundBook:allMedia;
  firstComic:allMedia;
  secoundComic:allMedia;
  newMedia:allMedia;
  constructor(testArray:Array<allMedia>){
  this.mediaArray =testArray;
  
  }
  showArray(){
    console.log(this.mediaArray);
  }
  renderAll(){
    for(let i= 0;i<this.mediaArray.length;i++){
      document.getElementById('mediaList').innerHTML += this.mediaArray[i].render();
    }
  }
}
 
