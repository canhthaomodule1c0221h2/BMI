let weight = +prompt("nhập vào cân nặng");
let heght = +prompt("nhập vào chiều cao")
Bmi = weight / (heght * heght);
if (Bmi < 18.5) {
    document.write("bạn quá gầy, cần ăn thêm cám con cò " + Bmi)
} else if (Bmi >= 18.5 && Bmi < 25.0) {
    document.write("cân nặng bạn chuẩn" + Bmi);
} else if (Bmi >= 25 && Bmi < 30) {
    document.write("bạn hơi mập, hãy giảm cân" + Bmi);
} else {
    document.write(" bạn quá béo, hãy tập thể dục " + Bmi)
}