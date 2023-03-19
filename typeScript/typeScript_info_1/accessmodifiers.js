var Lesson = /** @class */ (function () {
    function Lesson(_grade1, _grade2) {
        this.grade1 = _grade1;
        this.grade2 = _grade2;
    }
    Lesson.prototype.GetLessonAverage = function () {
        console.log("Lesson Average: " + ((this.grade1 + this.grade2) / 2));
    };
    Lesson.prototype.SetGrade1 = function (value) {
        this.grade1 = value;
    };
    Lesson.prototype.GetGrade1 = function () {
        return this.grade1;
    };
    Lesson.prototype.SetGrade2 = function (value) {
        this.grade2 = value;
    };
    Lesson.prototype.GetGrade2 = function () {
        return this.grade2;
    };
    return Lesson;
}());
var _lesson = new Lesson(15, 20);
_lesson.SetGrade1(20);
_lesson.SetGrade2(25);
console.log(_lesson.GetGrade1());
console.log(_lesson.GetGrade2());
