/*creating a parent class, and then creating childclasses
for each type of media*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var allMedia = (function () {
    function allMedia(titel, author, genre, publisher, rating, imgSrc) {
        this.titel = titel;
        this.author = author;
        this.genre = genre;
        this.publisher = publisher;
        this.rating = rating;
        this.imgSrc = imgSrc;
    }
    allMedia.prototype.render = function () {
        var writeOut = '<li>' + 'Titel: ' + this.titel + '</li>';
        writeOut += '<li>' + 'Author: ' + this.author + '</li>';
        writeOut += '<li>' + 'Genre: ' + this.genre + '</li>';
        writeOut += '<li>' + 'Publisher: ' + this.publisher + '</li>';
        writeOut += '<li>' + 'Rating: ' + this.rating + '</li>';
        return writeOut;
    };
    allMedia.prototype.getImgSrc = function () {
        return this.imgSrc;
    };
    allMedia.prototype.getTitel = function () {
        return this.titel;
    };
    return allMedia;
}());
var Cd = (function (_super) {
    __extends(Cd, _super);
    function Cd(titel, author, genre, publisher, rating, minutes, imgSrc) {
        var _this = _super.call(this, titel, author, genre, publisher, rating, imgSrc) || this;
        _this.minutes = minutes;
        return _this;
    }
    Cd.prototype.render = function () {
        var writeOut = "<div class=\"row cdStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + _super.prototype.getTitel.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '<li>' + 'Minutes: ' + this.minutes + '</li>';
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Cd;
}(allMedia));
var Dvd = (function (_super) {
    __extends(Dvd, _super);
    function Dvd(titel, author, genre, publisher, rating, minutes, imgSrc) {
        var _this = _super.call(this, titel, author, genre, publisher, rating, imgSrc) || this;
        _this.minutes = minutes;
        return _this;
    }
    Dvd.prototype.render = function () {
        var writeOut = "<div class=\"row dvdStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + _super.prototype.getTitel.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '<li>' + 'Minutes: ' + this.minutes + '</li>';
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Dvd;
}(allMedia));
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(titel, author, genre, publisher, rating, weight, imgSrc) {
        var _this = _super.call(this, titel, author, genre, publisher, rating, imgSrc) || this;
        _this.weight = weight;
        return _this;
    }
    Book.prototype.render = function () {
        var writeOut = "<div class=\"row bookStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + _super.prototype.getTitel.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '<li>' + 'Weight: ' + this.weight + '</li>';
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Book;
}(allMedia));
var Comic = (function (_super) {
    __extends(Comic, _super);
    function Comic(titel, author, genre, publisher, rating, imgSrc) {
        return _super.call(this, titel, author, genre, publisher, rating, imgSrc) || this;
    }
    Comic.prototype.render = function () {
        var writeOut = "<div class=\"row comicStyle\">";
        writeOut += "<div class=\"col-lg-6\">";
        writeOut += "<img class='img-responsive' src=\"" + _super.prototype.getImgSrc.call(this) + "\">";
        writeOut += "</div>";
        writeOut += "<div class=\"col-lg-6 carStyle\">";
        writeOut += '<h1>' + _super.prototype.getTitel.call(this) + '</h1>';
        writeOut += '<ul>';
        writeOut += _super.prototype.render.call(this);
        writeOut += '</ul>';
        writeOut += "</div>";
        writeOut += "</div>";
        return writeOut;
    };
    return Comic;
}(allMedia));
var Display = (function () {
    function Display(testArray) {
        this.mediaArray = testArray;
    }
    Display.prototype.showArray = function () {
        console.log(this.mediaArray);
    };
    Display.prototype.renderAll = function () {
        for (var i = 0; i < this.mediaArray.length; i++) {
            document.getElementById('mediaList').innerHTML += this.mediaArray[i].render();
        }
    };
    return Display;
}());
