function calculateRectangleArea(){
    // console.log('Hello');
    //Get Triangle Base Value
    const rectangleWidthInput = document.getElementById('width-input');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    // console.log(base);
    //Get Triangle Height Value
    const rectangleLengthInput = document.getElementById('length-input');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat( rectangleLengthText);
    // console.log(height);
    //Calculate Triangle Area
    const area = width * length;
    console.log('Area of the Triangle is : ',area);
    //Display Triangle Area
    const displayArea = document.getElementById('rectangle-display-area');
    displayArea.innerText = area;
    // console.log(area);
}