class Lesson {
   private grade1:number;
   private grade2:number;


    constructor(_grade1:number,_grade2:number){
        this.grade1 = _grade1;
        this.grade2 = _grade2;
    }

    GetLessonAverage(){
        console.log("Lesson Average: " + ((this.grade1 + this.grade2)/2));
    }

    SetGrade1(value:number){
        this.grade1 = value;
    }
    GetGrade1():number{
        return this.grade1;
    }

    SetGrade2(value:number){
        this.grade2 = value;
    }
    GetGrade2():number{
        return this.grade2;
    }

}

let _lesson = new Lesson(15,20);

_lesson.SetGrade1(20);
_lesson.SetGrade2(25);

console.log( _lesson.GetGrade1())
console.log( _lesson.GetGrade2())
